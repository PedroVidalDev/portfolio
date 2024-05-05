import listaFormacoes from "../json/formacoes.json" assert {type: "json"};
import dividirLista from "./utils/dividirLista.js";

const formacaoContainerAjuste = document.querySelector("#formacoes-container-ajuste");
const botoesFormacoes = document.querySelectorAll("#formacoes-botao");
const legendaBotao = document.querySelector("#menu-number");

let i = 0;
const partesLista = dividirLista(listaFormacoes, 4);
mostrarFormacoes(partesLista[i]);

function mostrarFormacoes(lista){
    formacaoContainerAjuste.innerHTML = "";

    lista.forEach(formacao => {
        const element = `
            <a href="${formacao.url}" target="_blank"><div class="formacao-box">  ${formacao.nome} </div></a>
        `

        formacaoContainerAjuste.innerHTML += element;
    })
}

botoesFormacoes.forEach(botao => {
    botao.addEventListener("click", (event) => {
        event.preventDefault();

        let acao = botao.innerHTML.trim();
        
        if(acao == "&gt;"){
            try{
                if((i+1) < partesLista.length){
                    i++; 
                } else{
                    i = 0;
                }
                mostrarFormacoes(partesLista[i]);
            }
            catch(erro){
                i--;
            }
        }

        else if(acao == "&lt;"){
            try{
                if(i > 0){
                    i--;  
                } else{
                    i = partesLista.length - 1;
                }
                mostrarFormacoes(partesLista[i]); 
            }
            catch(erro){
                i++;
            }
        }
        legendaBotao.innerHTML = i + 1;
    })
})