// MENU //
$('.sub-btn').next('.sub-menu').slideToggle();

$(document).ready(function(){
    $('.projeto-box').hover(function(){
        $(this).children('.sub-menu').slideToggle();
    })
})

// IMAGEM //
const divImagem = document.querySelector(".projeto-tela");
const projetos = document.querySelectorAll(".projeto-box");

projetos.forEach(projeto => {
    projeto.addEventListener("mouseover", () => {
        let nome = projeto.querySelector(".sub-btn").innerHTML;
        let nomeFormatado = nome.trim();

        let img = document.createElement("img");
        img.className = "projeto-img";

        if(nomeFormatado == "Sphynx - Segurança Escolar"){
            img.src = "/assets/img/projetos/sphynx.jpg";
        }
        if(nomeFormatado == "Socius - Gerência de Clubes"){
            img.src = "/assets/img/projetos/socius.jpg";
        }
        if(nomeFormatado == "Picpay Simplificado"){
            img.src = "/assets/img/projetos/picpay.webp";
        }
        if(nomeFormatado == "Livraria Alura"){
            img.src = "/assets/img/projetos/livraria.jpg";
        }
        divImagem.appendChild(img);
    });

    projeto.addEventListener("mouseout", () => {
        divImagem.innerHTML = "";
    })
});