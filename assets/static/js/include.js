async function loadPartials() {
  const includeNodes = document.querySelectorAll("[data-include]");
  await Promise.all(
    Array.from(includeNodes).map(async (node) => {
      const filePath = node.getAttribute("data-include");
      if (!filePath) return;
      const response = await fetch(filePath);
      node.innerHTML = await response.text();
    })
  );

  const yearNodes = document.querySelectorAll("[data-current-year]");
  yearNodes.forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const savedTheme = localStorage.getItem("site-theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("site-theme", next);
    });
  }

  document.dispatchEvent(new CustomEvent("partials:loaded"));
}

document.addEventListener("DOMContentLoaded", loadPartials);
