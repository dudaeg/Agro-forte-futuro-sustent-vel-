// Contador animado
const contador = document.getElementById("counter");

let valor = 0;
const alvo = 5000;

const intervalo = setInterval(() => {
    valor += 50;

    contador.textContent = valor.toLocaleString("pt-BR");

    if (valor >= alvo) {
        contador.textContent = alvo.toLocaleString("pt-BR");
        clearInterval(intervalo);
    }
}, 20);

// Botão voltar ao topo
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Formulário
const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Mensagem enviada com sucesso!");

    formulario.reset();
});