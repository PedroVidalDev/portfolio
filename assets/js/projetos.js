import listaProjetos from "../json/projetos.json" assert {type: "json"};

// MENU //
$('.sub-btn').next('.sub-menu').slideToggle();

$(document).ready(function(){
    $('.projeto-box').click(function(){
        let caixaAberta = $(this).parent().parent().find('.open');
        let caixaClickada = $(this).children('.sub-menu');

        if(caixaAberta.text() == caixaClickada.text()){
            caixaAberta.slideToggle().toggleClass('open');
        } 
        
        else{
            caixaAberta.slideToggle().toggleClass('open');
            caixaClickada.slideToggle().toggleClass('open');
        }
    })

})

// IMAGEM //
const divImagem = document.querySelector(".projeto-tela");
const projetos = document.querySelectorAll(".projeto-box");

projetos.forEach(projeto => {
    projeto.addEventListener("click", () => {
        let nome = projeto.querySelector(".sub-btn").innerHTML;
        let nomeFormatado = nome.trim();

        let imagemExistente = divImagem.querySelector(".projeto-img");
        
        if(imagemExistente){

            if(imagemExistente.alt == nomeFormatado){
                esconderImagem(imagemExistente);
            }
            else{
                esconderImagem(imagemExistente);

                criarImagem(nomeFormatado);
            }

        }

        else{
            criarImagem(nomeFormatado);
        }
    });
});

function criarImagem(alt){
    let img = document.createElement("img");
    img.className = "projeto-img";
    img.alt = alt;

    if(alt == "Sphynx - Segurança Escolar"){
        img.src = "/assets/img/projetos/sphynx.jpg";
    }
    if(alt == "Socius - Gerência de Clubes"){
        img.src = "/assets/img/projetos/socius.jpg";
    }
    if(alt == "Picpay Simplificado"){
        img.src = "/assets/img/projetos/picpay.webp";
    }
    if(alt == "Livraria Alura"){
        img.src = "/assets/img/projetos/livraria.jpg";
    }
    divImagem.appendChild(img);
}

function esconderImagem(imagemExistente){
    imagemExistente.classList.toggle("hidden");
            
    function esconder(){
        imagemExistente.remove();
    }

    setTimeout(esconder, 100);
}