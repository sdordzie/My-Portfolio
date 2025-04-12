// DOM Elements
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

// 1. Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
}

// 2. Toggle theme on button click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
toggleButton.textContent = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
 

    
    // 3. Save preference
    const currentTheme = body.classList.contains("dark-mode") ? "dark-mode" : "";
    localStorage.setItem("theme", currentTheme);
});