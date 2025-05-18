const projects = [
  {
    title: "Project 1",
    description: "Coming soon",
    image: "static/images/home.jpg",
    tech: "Coming Soon",
    github: "#",
    demo: "#"
  },
  {
    title: "Project 2",
    description: "Coming soon",
    image: "static/images/home.jpg",
    tech: "Coming Soon",
    github: "#",
    demo: "#"
  }
];

const container = document.getElementById("project");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="project-card-content">
        <div class="project-card-title">${project.title}</div>
        <div class="project-card-description">${project.description}</div>
        <div class="project-tech-stack">${project.tech}</div>
        <div class="project-card-buttons">
            <a href="${project.github}" target="_blank">GitHub</a>
            <a href="${project.demo}" target="_blank">Demo</a>
        </div>
    </div>
  `;
  container.appendChild(card);
});
