import listaProjetos from "../json/projetos.json" assert {type: "json"};
import dividirLista from "./utils/dividirLista.js";
import { deletar, escrever } from "./utils/efeitoEscrever.js";

const containerImagens = document.querySelector("#container-imagens");
const tituloProjeto = document.querySelector("#titulo-projeto");
const descricaoProjeto = document.querySelector("#descricao-projeto");

let i = 0;
const partesLista = dividirLista(listaProjetos, 4);

adicionarProjetos(partesLista[i]);

function adicionarProjetos(projetos){
    projetos.forEach(projeto => {
        let divImagem = document.createElement("div");
        divImagem.className = "imagem-projeto";
        divImagem.style.backgroundImage = `url("${projeto.imagem}")`;
        divImagem.addEventListener("mouseover", () => {
            escrever(tituloProjeto, projeto.nome, 40);
            escrever(descricaoProjeto, projeto.descricao, 25);
        })
    
        divImagem.addEventListener("mouseout", () => {
            deletar(tituloProjeto);
            deletar(descricaoProjeto);
        })
    
        containerImagens.appendChild(divImagem);
    });
}