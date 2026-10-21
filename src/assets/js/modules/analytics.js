// Microsoft Clarity, loaded from a file instead of an inline snippet so the CSP can block inline scripts.
export function initClarity(id) {
  if (!id || !/^[a-z0-9]+$/i.test(id)) return;
  const c = window;
  c.clarity =
    c.clarity ||
    function (...args) {
      (c.clarity.q = c.clarity.q || []).push(args);
    };
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${id}`;
  document.head.appendChild(s);
}
