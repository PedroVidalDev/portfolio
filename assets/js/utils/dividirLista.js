function dividirLista(lista, tamanho) {
    const partes = [];
    for (let i = 0; i < lista.length; i += tamanho) {
        partes.push(lista.slice(i, i + tamanho));
    }
    return partes;
}

export default dividirLista;