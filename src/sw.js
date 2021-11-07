import { manifest, version } from '@parcel/service-worker';

const repoName = 'simon';
const cachePrefix = `${repoName}-cache-`;
const caheName = `${cachePrefix}${version}`;

const preCacheAll = async () => {
  const cache = await caches.open(caheName);
  await cache.addAll(manifest);
};

const deleteOldCaches = async () => {
  const allCachesFromOrigin = await caches.keys();
  return Promise.allSettled(
    allCachesFromOrigin
      .filter(name => name !== caheName && name.startsWith(cachePrefix))
      .map(name => caches.delete(name))
  );
};

const cachedWithNetworkFallback = async req => {
  const cache = await caches.open(caheName);
  let res = await cache.match(req);
  if (res) {
    return res;
  }
  res = await fetch(req);
  if (res.type === 'basic' && res.ok) {
    cache.put(req, res.clone());
  }
  return res;
};

self.addEventListener('install', event => event.waitUntil(preCacheAll()));
self.addEventListener('activate', event => event.waitUntil(deleteOldCaches()));
self.addEventListener('fetch', event => event.respondWith(cachedWithNetworkFallback(event.request)));
