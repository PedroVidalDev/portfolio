const projectsDescription = document.querySelector("#projects-description");
const boxesAll = document.querySelectorAll("#project-box");

boxesAll.forEach(box => {
    box.addEventListener("mouseover", (event) => {
        event.preventDefault;   

        let title = box.querySelector(".project-box-texts").querySelector("h3").textContent.replaceAll(" ", "");
        switch(title){
            case "SphynxV2":
                projectsDescription.innerHTML = "Continuation of the Sphynx project, focusing on improving and adding features to the original project."
                break;
            
            case "Sphynx":
                projectsDescription.innerHTML = "Project with the objective of creating a simple and practical security system, using embedded systems and web servers."
                break;
            
            case "Socius":
                projectsDescription.innerHTML = "Terminal application aiming to help club owners better control their business.";
                break;
            
            case "AluraSpring":
                projectsDescription.innerHTML = "Project developed during an introduction course to the Spring Framework on the Alura platform, focusing on creating a simple CRUD.";
                break;
            
            case "NewGOATV2":
                projectsDescription.innerHTML = "Project that aims to create an inventory management system.";
                break;

            case "LifeSearch":
                projectsDescription.innerHTML = "Project with the aim of creating a forum for the dissemination of technology-related projects";
                break;

            case "Statilator":
                projectsDescription.innerHTML = "Simple project developed with the intention of being a statistical calculator.";
                break;
        }   
        projectsDescription.classList.toggle("show");      
    })

    box.addEventListener("mouseout", (event) => {
        event.preventDefault;
        projectsDescription.textContent = "";
        projectsDescription.classList.toggle("show");
    })
});
