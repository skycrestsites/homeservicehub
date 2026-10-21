const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LISTS = new Set(["cleaning-premium", "junk-removal", "landscaping", "scaling-beyond"]);

export function initWaitlist(config) {
  document.querySelectorAll("form[data-waitlist]").forEach((form) => {
    const msg = form.querySelector(".waitlist-msg");
    const input = form.querySelector('input[type="email"]');
    const list = form.dataset.waitlist;
    let last = 0;

    const say = (text, kind = "") => {
      msg.textContent = text;
      msg.className = `waitlist-msg${kind ? ` ${kind}` : ""}`;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = input.value.trim().toLowerCase();
      if (form.querySelector(".hp input")?.value) return;
      if (!EMAIL_RE.test(email) || email.length > 254) return say("Enter a valid email address.", "err");
      if (!LISTS.has(list)) return say("This waitlist is not open yet.", "err");
      if (!config?.apiKey) return say("Signups open shortly. Join the Discord to hear first.", "err");
      if (Date.now() - last < 5000) return;
      last = Date.now();

      form.classList.add("is-busy");
      say("Adding you to the list...");
      try {
        const { joinWaitlist } = await import("./firebase.js");
        const result = await joinWaitlist(config, email, list);
        form.reset();
        say(result === "already" ? "You are already on the list." : "You are on the list. We will email you at launch.", "ok");
      } catch {
        say("Something went wrong. Please try again in a minute.", "err");
      } finally {
        form.classList.remove("is-busy");
      }
    });
  });
}
