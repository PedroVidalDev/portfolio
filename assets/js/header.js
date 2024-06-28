const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("nav");

const opcoes = menu.querySelectorAll("li");

menuIcon.addEventListener("click", () => {
    if(menu.classList.contains("mostrarMenu")){
        menu.classList.remove("mostrarMenu");
        menu.classList.add("esconderMenu");
    }

    else{
        menu.classList.remove("esconderMenu");
        menu.classList.add("mostrarMenu");
    }
    
})

opcoes.forEach(opcao => {
    opcao.addEventListener("click", () => {
        if(menu.classList.contains("mostrarMenu")){
            menu.classList.remove("mostrarMenu");
            menu.classList.add("esconderMenu");
        } 
    })
})