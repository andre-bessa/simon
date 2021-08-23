const repoName = 'simon';
const cacheVersion = 'v0.1.0';
const cachePrefix = `${repoName}-cache-`;
const caheName = `${cachePrefix}${cacheVersion}`;

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

self.addEventListener('fetch', event => event.respondWith(cachedWithNetworkFallback(event.request)));

const deleteOldCaches = async () => {
  const allCachesFromOrigin = await caches.keys();
  return Promise.allSettled(
    allCachesFromOrigin
      .filter(name => name.startsWith(cachePrefix))
      .map(name => caches.delete(name))
  );
};

self.addEventListener('activate', event => event.waitUntil(deleteOldCaches()));
