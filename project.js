const projects = [
  {
    title: "Todo App", 
    description: "A simple task manager built with HTML/CSS/JS.",
    link: "#"
  },
  {
    title: "Weather App",
    description: "Fetches real-time weather data from an API.",
    link: "#"
  }
];

function renderProjects() {
  const container = document.getElementById("projects-container");
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}">View Project</a>
    `;
    container.appendChild(card);
  });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", renderProjects);
