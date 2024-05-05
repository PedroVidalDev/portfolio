import listaFormacoes from "../json/formacoes.json" assert {type: "json"};

const formacaoContainerAjuste = document.querySelector("#formacoes-container-ajuste");
const botoesFormacoes = document.querySelectorAll("#formacoes-botao");

listaFormacoes.forEach(formacao => {
    const element = `
        <a href="${formacao.url}" target="_blank"><div class="formacao-box">  ${formacao.nome} </div></a>
    `

    formacaoContainerAjuste.innerHTML += element;
})

botoesFormacoes.forEach(botao => {
    botao.addEventListener("click", (event) => {
        event.preventDefault();

        let acao = botao.innerHTML.trim();
        console.log(acao)
        
        if(acao == "&gt;"){
            alert(">")
        }

        else if(acao == "&lt;"){
            alert("<")
        }
    })
})