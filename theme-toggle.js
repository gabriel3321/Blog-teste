
const toggle = document.getElementById("toggle-theme");
const setTheme = (theme) => {
  document.body.className = theme === "dark" ? "dark-theme" : "";
  localStorage.setItem("theme", theme);
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
};

toggle.onclick = () => {
  const current = localStorage.getItem("theme") === "dark" ? "light" : "dark";
  setTheme(current);
};

window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
};
