const boxes = document.querySelectorAll(".language-box")
const description = document.querySelector("#description");

boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        let id = box.id;
        let language = id.replace("-box", "");
        
        switch(language){
            case "html":
                description.textContent = "HTML is the standard markup language for creating Web pages.";
                break;
            case "css":
                description.textContent = "CSS is a computer language for laying out and structuring web pages.";
                break;
            case "js":
                description.textContent = "JavaScript is a scripting language that enables you to create dynamically updating content.";
                break;
            case "java":
                description.textContent = "Java is a object-oriented language that can be used as a platform in itself.";
                break;
            case "spring":
                description.textContent = "Spring is a Java framework created with the aim of facilitating application development.";
                break;
            case "python":
                description.textContent = "Python is a programming language widely used in web applications, software development and more.";
                break;
            case "mysql":
                description.textContent = "MySQL is a database management system that uses the SQL language as an interface.";
                break;
            case "postgre":
                description.textContent = "PostgreSQL is an object-relational database management system, developed as an open source project.";
                break;
        }
        description.classList.toggle("show");
    })

    box.addEventListener("mouseout", () => {
        description.textContent = "";
        description.classList.toggle("show");
    })
});