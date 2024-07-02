async function jsonParaLista(caminho){

    let lista = [];

    await fetch(caminho)
    .then(response => response.json())
    .then(data => {
        data.forEach(elemento => {
            lista.push(elemento)
        })
    });

    return lista;
}

export {jsonParaLista};