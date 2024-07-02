import dividirLista from "./utils/dividirLista.js";
import { deletar, escrever } from "./utils/efeitoEscrever.js";
import { jsonParaLista } from "./utils/resgatarJsonParaLista.js";

const containerImagens = document.querySelector("#container-imagens");
const tituloProjeto = document.querySelector("#titulo-projeto");
const descricaoProjeto = document.querySelector("#descricao-projeto");
const botoesProjetos = document.querySelectorAll("#projetos-botao");

let listaProjetos = await jsonParaLista("../assets/json/projetos.json")
let i = 0;
const partesLista = dividirLista(listaProjetos, listaProjetos.length / 2);
console.log(partesLista)

escrever(tituloProjeto, "");
escrever(descricaoProjeto, "");
adicionarProjetos(partesLista[i]);

function adicionarProjetos(projetos){
    containerImagens.innerHTML = "";
    projetos.forEach(projeto => {
        let divImagem = document.createElement("div");
        divImagem.className = "imagem-projeto";
        divImagem.style.backgroundImage = `url("${projeto.imagem}")`;
        divImagem.addEventListener("mouseover", () => {
            escrever(tituloProjeto, projeto.nome, 40);
            escrever(descricaoProjeto, projeto.descricao, 25);     
        })

        divImagem.addEventListener("click", () => {
            window.location.href = projeto.url
        })
    
        divImagem.addEventListener("mouseout", () => {
            deletar(tituloProjeto);
            deletar(descricaoProjeto);
        })
    
        containerImagens.appendChild(divImagem);
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
                } 
                
                else{
                    i = 0;
                }
            }
            catch(erro){
                i--;
                return;
            }
        }

        else if(acao == "&lt;"){
            try{
                if(i > 0){
                    i--;  
                } 
                
                else{
                    i = partesLista.length - 1;
                }
            }
            catch(erro){
                i++;
                return
            }
        }

        adicionarProjetos(partesLista[i]);
    })
});