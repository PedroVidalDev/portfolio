import listProjects from "../json/projects.json" assert { type: "json" };
const projectsDiv = document.querySelector(".projects-div");

const projectsDescription = document.querySelector("#projects-description");

listProjects.forEach(project => {
    let mainDiv = document.createElement("div");
    mainDiv.className = "project-box";
    mainDiv.id = "project-box";

    let image = document.createElement("img");
    image.src = project.imageUrl;
    
    let textDiv = document.createElement("div");
    textDiv.className = "project-box-texts";

    let title = document.createElement("h3");
    title.textContent = project.title;

    let subtitle = document.createElement("p");
    subtitle.textContent = project.subtitle;

    textDiv.appendChild(title);
    textDiv.appendChild(subtitle);

    let linkButton = document.createElement("a");
    linkButton.href = project.repository;

    let button = document.createElement("button");
    button.innerHTML = "See more";

    linkButton.appendChild(button);

    mainDiv.appendChild(image);
    mainDiv.appendChild(textDiv);
    mainDiv.appendChild(linkButton);

    projectsDiv.appendChild(mainDiv);

    mainDiv.addEventListener("mouseover", () => {
        projectsDescription.textContent = project.text;
        projectsDescription.classList.toggle("show");
    })

    mainDiv.addEventListener("mouseout", () => {
        projectsDescription.textContent = "";
        projectsDescription.classList.toggle("show");
    })
})