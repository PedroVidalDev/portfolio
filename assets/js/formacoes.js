import listaFormacoes from "../json/formacoes.json" assert {type: "json"};

const formacaoContainerAjuste = document.querySelector("#formacoes-container-ajuste");
const botoesFormacoes = document.querySelectorAll("#formacoes-botao");

let i = 0;
const partesLista = dividirLista(listaFormacoes, 4);
mostrarFormacoes(partesLista[i]);

function dividirLista(lista, tamanho) {
    const partes = [];
    for (let i = 0; i < lista.length; i += tamanho) {
        partes.push(lista.slice(i, i + tamanho));
    }
    return partes;
}

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
                    mostrarFormacoes(partesLista[i]); 
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
                    mostrarFormacoes(partesLista[i]); 
                }
            }
            catch(erro){
                i++;
            }
        }
    })
})