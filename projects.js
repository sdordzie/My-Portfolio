// Sample project data
const projects = [
  {
    title: "Todo App",
    description: "A task manager with localStorage support. Built with HTML/CSS/JS.",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Weather App",
    description: "Fetches real-time weather data from an API. Uses async/await.",
    link: "#",
    tags: ["API", "JavaScript"]
  },
  {
    title: "Portfolio Site",
    description: "The very site you're viewing now! Features dark mode and dynamic content.",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

// Function to render projects
function renderProjects() {
  const container = document.getElementById("projects-container");
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
  });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", renderProjects);
