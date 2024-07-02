async function jsonParaLista(caminho){

    let lista = [];

    await fetch("../assets/json/formacoes.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(elemento => {
            lista.push(elemento)
        })
    });

    return lista;
}

export {jsonParaLista};