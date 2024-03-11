const cargo = document.querySelector(".cargo");

var typewriter = new Typewriter(cargo, {
    loop: true
});

typewriter
    .typeString('Fullstack')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Backend')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Frontend')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web')
    .pauseFor(2500)
    .start();