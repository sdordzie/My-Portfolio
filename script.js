// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    
    // 1. Check for saved theme preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Light Mode";
    }
    
    // 2. Toggle dark mode on button click
    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        
        // 3. Update button text
        const isDarkMode = body.classList.contains("dark-mode");
        toggleButton.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
        
        // 4. Save preference
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    });
});
