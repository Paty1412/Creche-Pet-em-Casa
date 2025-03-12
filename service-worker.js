// Durante a instalação, armazenamos os arquivos em cache
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('pet-em-casa-cache').then((cache) => {
        return cache.addAll([
          '/cadastro.html',
          '/index.html',
          '/styles.css',
          '/script.js',
          '/icones/92x92.png',
         '/icones/128x128.png',
         '/icones/144x144.png',
          '/icones/512x512.png',
          
        ]);
      })
    );
  });
  
  // Durante a ativação, removemos caches antigos, se necessário
  self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['pet-em-casa-cache'];
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  
  // Intercepta requisições de rede e retorna do cache, se possível
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  