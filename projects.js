// Sample project data
const projects = [
  {
    title: "Todo App",
    description: "A task manager with localStorage support. Built with HTML/CSS/JS.",
    link: null,
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Weather App",
    description: "Fetches real-time weather data from an API. Uses async/await.",
    link: null,
    tags: ["API", "JavaScript"]
  },
  {
    title: "Portfolio Site",
    description: "The very site you're viewing now! Features dark mode and dynamic content.",
    link: null,
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

// Function to render projects
function renderProjects(projectsToRender = projects) {
  const container = document.getElementById("projects-container");
  container.innerHTML = ''; // Clear existing content
  
  projectsToRender.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      ${project.link ? 
        `<a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>` : 
        `<button class="coming-soon">Coming Soon</button>`
      }
    `;
    container.appendChild(card);
  });
}

// Filter function
function filterProjects(tag) {
  const filtered = tag === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(tag));
  renderProjects(filtered);
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  
  // Optional: Add filter buttons event listeners here
});

// Add to projects.js
function filterProjects(tag) {
    const filtered = tag === 'all' 
        ? projects 
        : projects.filter(p => p.tags.includes(tag));
    renderFilteredProjects(filtered);
}
