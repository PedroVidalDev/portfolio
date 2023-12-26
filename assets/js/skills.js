import listSkills from "../json/skills.json" assert { type: "json" };
const languagesDiv = document.querySelector(".languages-div");

const skillsDescription = document.querySelector("#skills-description");

listSkills.forEach(skill => {
    let mainDiv = document.createElement("div");
    mainDiv.id = skill.id;
    mainDiv.className = "language-box";

    let image = document.createElement("img");
    image.src = skill.imageUrl;
    image.style.width = "128px";

    mainDiv.appendChild(image);

    languagesDiv.appendChild(mainDiv);

    mainDiv.addEventListener("mouseover", () => {
        skillsDescription.textContent = skill.text;
        skillsDescription.classList.toggle("show");
    })

    mainDiv.addEventListener("mouseout", () => {
        skillsDescription.textContent = "";
        skillsDescription.classList.toggle("show");
    })
})