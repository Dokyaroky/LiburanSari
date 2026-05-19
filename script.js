const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".toggle-icon");
const toggleLabel = document.querySelector(".toggle-label");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

const savedTheme = localStorage.getItem("liburansari-theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleIcon.textContent = "☀";
  toggleLabel.textContent = "Light";
  themeToggle.setAttribute("aria-label", "Switch to light mode");
}

themeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  localStorage.setItem("liburansari-theme", isDark ? "dark" : "light");
  toggleIcon.textContent = isDark ? "☀" : "☾";
  toggleLabel.textContent = isDark ? "Light" : "Dark";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "Inquiry Sent";
  setTimeout(() => {
    button.textContent = "Send Inquiry";
    event.currentTarget.reset();
  }, 1800);
});
