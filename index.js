const texto = document.querySelector(".hero h2 strong");

const palavras = [
  "Desenvolvimento de Sistemas",
  "tecnologia",
  "programação",
  "novos projetos",
];

let palavraAtual = 0;
let letraAtual = 0;
let apagando = false;

function escreverTexto() {
  const palavra = palavras[palavraAtual];

  if (!apagando) {
    letraAtual++;

    texto.textContent = palavra.substring(0, letraAtual);

    if (letraAtual >= palavra.length) {
      apagando = true;

      setTimeout(escreverTexto, 1800);

      return;
    }
  } else {
    letraAtual--;

    texto.textContent = palavra.substring(0, letraAtual);

    if (letraAtual <= 0) {
      apagando = false;

      palavraAtual++;

      if (palavraAtual >= palavras.length) {
        palavraAtual = 0;
      }
    }
  }

  const velocidade = apagando ? 45 : 80;

  setTimeout(escreverTexto, velocidade);
}

escreverTexto();

const elementos = document.querySelectorAll(
  ".project-card, .skill-card, .about-highlight",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },

  {
    threshold: 0.15,
  },
);

elementos.forEach((elemento) => {
  elemento.classList.add("hidden");

  observer.observe(elemento);
});

const linksMenu = document.querySelectorAll(".navbar .nav-link");

const menu = document.querySelector("#menu");

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      const navbar = bootstrap.Collapse.getInstance(menu);

      if (navbar) {
        navbar.hide();
      }
    }
  });
});

function toggleProjetos(botao) {

  const card = botao.closest('.project-card');
  if (!card) return;

  const detalhes = card.querySelector('.project-details');
  if (!detalhes) return;

  const aberto = botao.getAttribute("aria-expanded") === "true";

  detalhes.hidden = aberto;
  botao.setAttribute("aria-expanded", String(!aberto));

  botao.innerHTML = aberto
    ? 'Ver projeto <i class="bi bi-arrow-up-right"></i>'
    : 'Fechar projeto <i class="bi bi-x-lg"></i>';
}

const botoesCertificados = document.querySelectorAll(
    ".certificate-button[data-certificate]"
);

const imagemCertificado = document.getElementById("certificateImage");
const tituloCertificado = document.getElementById("certificateModalLabel");
const linkCertificado = document.getElementById("certificateOpenLink");

botoesCertificados.forEach((botao) => {
    botao.addEventListener("click", () => {

        const caminho = botao.dataset.certificate;
        const titulo = botao.dataset.title;

        imagemCertificado.src = caminho;
        tituloCertificado.textContent = titulo;
        linkCertificado.href = caminho;

        const modalElement = document.getElementById("certificateModal");

        const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

        modal.show();
    });
});
