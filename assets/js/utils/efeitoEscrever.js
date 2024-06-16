function escrever(tag, texto, velocidade = 'natural'){
    var typewriter = new Typewriter(tag, {
        loop: false,
        delay: velocidade
    });
    typewriter
        .typeString(texto)
        .start();
}

function deletar(tag){
    var typewriter = new Typewriter(tag, {
        loop: false,
    });
    typewriter
        .deleteAll()
        .start();
}

export {escrever, deletar};