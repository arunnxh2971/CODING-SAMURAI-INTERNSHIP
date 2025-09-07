/* ===== Helpers ===== */
const $ = (sel, parent = document) => parent.querySelector(sel);
const $$ = (sel, parent = document) => [...parent.querySelectorAll(sel)];

/* ===== Dynamic Year ===== */
$("#year").textContent = new Date().getFullYear();

/* ===== Mobile Menu ===== */
const menuToggle = $("#menuToggle");
const navLinks = $("#navLinks");
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
$$("#navLinks a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* ===== Active Link on Scroll ===== */
const sections = $$("section[id]");
const linkObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const link = $(`.nav-links a[href="#${id}"]`);
    if (entry.isIntersecting) {
      $$(".nav-links a").forEach(a => a.classList.remove("active"));
      link?.classList.add("active");
    }
  });
}, { threshold: 0.6 });
sections.forEach(sec => linkObserver.observe(sec));

/* ===== Typing Effect ===== */
const typingEl = $(".typing");
const roles = [
  "a Web Developer",
  "a Coding Samurai Intern",
  "a Problem Solver",
  "a Lifelong Learner"
];
let r = 0, i = 0, deleting = false;
function type() {
  const current = roles[r];
  typingEl.textContent = current.slice(0, i);
  if (!deleting && i < current.length) { i++; setTimeout(type, 90); }
  else if (!deleting && i === current.length) { deleting = true; setTimeout(type, 1100); }
  else if (deleting && i > 0) { i--; setTimeout(type, 40); }
  else { deleting = false; r = (r + 1) % roles.length; setTimeout(type, 120); }
}
type();

/* ===== Reveal on Scroll ===== */
const revealEls = $$(".reveal, .p-card");
const revealObs = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });
revealEls.forEach(el => revealObs.observe(el));

/* ===== Stat Counters ===== */
const nums = $$(".num");
const statObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.count;
    let value = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const tick = () => {
      value += step;
      if (value >= target) value = target;
      el.textContent = value;
      if (value < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, { threshold: 0.6 });
nums.forEach(n => statObserver.observe(n));

/* ===== Contact Form (basic client-side validation + message) ===== */
const form = $("#contactForm");
const formStatus = $("#formStatus");
form?.addEventListener("submit", (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill out all fields.";
    return;
  }
  // Demo success
  formStatus.textContent = "Sending…";
  setTimeout(()=>{
    formStatus.textContent = `Thanks, ${name}! I’ll get back to you soon.`;
    form.reset();
  }, 800);
});
