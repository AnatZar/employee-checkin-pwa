self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
  return self.clients.claim();
});
