// Apply saved preference immediately (before paint)
const stored = localStorage.getItem("substack-dark-mode");
if (stored === "true") {
  document.documentElement.classList.add("substack-dark");
}

browser.runtime.onMessage.addListener((msg) => {
  if (msg.action === "toggle") {
    const html = document.documentElement;
    html.classList.toggle("substack-dark");
    const enabled = html.classList.contains("substack-dark");
    localStorage.setItem("substack-dark-mode", enabled);
  }
});
