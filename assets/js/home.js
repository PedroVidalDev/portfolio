const cargo = document.querySelector(".cargo");

var typewriter = new Typewriter(cargo, {
    loop: true
});

typewriter
    .typeString('Backend')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Java')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Node.js')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web')
    .pauseFor(2500)
    .start();