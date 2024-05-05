import listaProjetos from "../json/projetos.json" assert {type: "json"};
import dividirLista from "./utils/dividirLista.js";

const botoesProjetos = document.querySelectorAll("#projetos-botao");
const containerProjetoBox = document.querySelector("#container-projeto-box");

let i = 0;
const partesLista = dividirLista(listaProjetos, 4);

mostrarProjetos(partesLista[0]);

// MENU //
$('.sub-btn').next('.sub-menu').slideToggle();

$(document).ready(function(){
    atribuindoAnimacaoMenu();
})

// IMAGEM //
const divImagem = document.querySelector(".projeto-tela");

atribuirFuncaoAosProjetos();

function atribuirFuncaoAosProjetos(){
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
}

botoesProjetos.forEach(botao => {
    botao.addEventListener("click", (event) => {
        event.preventDefault();

        let acao = botao.innerHTML.trim();
        
        if(acao == "&gt;"){
            try{
                if((i+1) < partesLista.length){
                    i++;
                    mostrarProjetos(partesLista[i]); 
                    $('.sub-btn').next('.sub-menu').slideToggle();
                }
            }
            catch(erro){
                i--;
            }
        }

        else if(acao == "&lt;"){
            try{
                if(i > 0){
                    i--;
                    mostrarProjetos(partesLista[i]); 
                    
                    $('.sub-btn').next('.sub-menu').slideToggle();
                }
            }
            catch(erro){
                i++;
            }
        }

        atribuindoAnimacaoMenu();
        atribuirFuncaoAosProjetos();
    })
})

function criarImagem(alt){
    let img = document.createElement("img");
    img.className = "projeto-img";
    img.alt = alt;
    const objeto = partesLista[i].find(projeto => projeto.nome === alt);
    img.src = objeto.imagem;

    // if(alt == "Sphynx - Segurança Escolar"){
    //     img.src = "/assets/img/projetos/sphynx.jpg";
    // }
    // if(alt == "Socius - Gerência de Clubes"){
    //     img.src = "/assets/img/projetos/socius.jpg";
    // }
    // if(alt == "Picpay Simplificado"){
    //     img.src = "/assets/img/projetos/picpay.webp";
    // }
    // if(alt == "Livraria Alura"){
    //     img.src = "/assets/img/projetos/livraria.jpg";
    // }
    divImagem.appendChild(img);
}

function esconderImagem(imagemExistente){
    imagemExistente.classList.toggle("hidden");
            
    function esconder(){
        imagemExistente.remove();
    }

    setTimeout(esconder, 100);
}

function atribuindoAnimacaoMenu(){
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
}

// MOSTRAR PROJETOS
function mostrarProjetos(lista){
    containerProjetoBox.innerHTML = "";

    lista.forEach(projeto => {
        const element = `
        <div class="projeto-box"> 
            <a class="sub-btn"> ${projeto.nome} </a>
            <div class="sub-menu">
                <a class="sub-item" href="${projeto.url}" target="_blank"> 
                    ${projeto.descricao}
                </a>
            </div> 
        </div>  
        `

        containerProjetoBox.innerHTML += element;
    })
}