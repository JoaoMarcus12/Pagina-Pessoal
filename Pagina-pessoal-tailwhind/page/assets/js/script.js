const root = document.documentElement;
const btn = document.getElementById("themeToggle");

function applyTheme(theme) {
    if (theme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);

    btn.innerHTML = theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
}

const saved = localStorage.getItem("theme");
applyTheme(saved ? saved : "light");

btn.addEventListener("click", () => {
    applyTheme(root.classList.contains("dark") ? "light" : "dark");
});

document.getElementById("year").textContent = new Date().getFullYear();