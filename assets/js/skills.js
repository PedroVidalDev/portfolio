const boxes = document.querySelectorAll(".language-box")
const skillsDescription = document.querySelector("#skills-description");

boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        let id = box.id;
        let language = id.replace("-box", "");
        
        switch(language){
            case "html":
                skillsDescription.textContent = "HTML is the standard markup language for creating Web pages.";
                break;
            case "css":
                skillsDescription.textContent = "CSS is a computer language for laying out and structuring web pages.";
                break;
            case "js":
                skillsDescription.textContent = "JavaScript is a scripting language that enables you to create dynamically updating content.";
                break;
            case "java":
                skillsDescription.textContent = "Java is a object-oriented language that can be used as a platform in itself.";
                break;
            case "spring":
                skillsDescription.textContent = "Spring is a Java framework created with the aim of facilitating application development.";
                break;
            case "python":
                skillsDescription.textContent = "Python is a programming language widely used in web applications, software development and more.";
                break;
            case "mysql":
                skillsDescription.textContent = "MySQL is a database management system that uses the SQL language as an interface.";
                break;
            case "postgre":
                skillsDescription.textContent = "PostgreSQL is an object-relational database management system, developed as an open source project.";
                break;
        }
        skillsDescription.classList.toggle("show");
    })

    box.addEventListener("mouseout", () => {
        skillsDescription.textContent = "";
        skillsDescription.classList.toggle("show");
    })
});