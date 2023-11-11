const menu = document.querySelector(".nav-list");

function show(){
    if(menu.classList == 'nav-list'){
        menu.classList.add("active");
    }

    else{
        menu.classList.remove("active");
    }
}

function hid(){
    menu.classList.remove("active");
}
