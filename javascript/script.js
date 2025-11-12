function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  function mudarFonte(fonte, peso = 'normal') {
    document.body.style.fontFamily = `'${fonte}', sans-serif`;
    document.body.style.fontWeight = peso;
  }

  const imagens= [{
   src: "imagem/borboleta.jpg",
  titulo:"Borboleta",
  data:"2025",
  descriçao:" Modelagem feita para Tcc desenvolvido para a matéria de Projeto desenvolvimento de jogos, para o jogo The charles que está sendo desenvolvido para apresentar no fim do ano.",
  largura:"50%",
  altura:"auto"
  },
  {
    src: "imagem/CONFEITARIA.jpg",
   titulo:"Confeitaria",
   data:"2024",
   descriçao:"Foi desenvolvido em dupla para a matéria de Programação 2D, o foco foi na programação da mecânica do jogo que era para ser feito um bolo de acordo com a imagem que estava sendo apresentado.",
   largura:"50%",
   altura:"auto"
   },
   {
    src: "imagem/raposo.jpg",
   titulo:"Raposa",
   data:"2024",
   descriçao:"Jogo feito em grupo para a matéria de Programação 3D, o meu foco foi em modelagem dos personagens para a movimentação, fazer a animação do player  para que tivesse uma modelagem mais interessante.",
   largura:"50%",
   altura:"auto"
   },
   {
   src: "imagem/SimiaLabMonkey.jpg",
   titulo:"Simia",
   data:"2025",
   descriçao:"Modelagem feita em grupo para Tcc, essa será a logo do jogo The charles que estou desenvolvendo para a matéria de de Projeto desenvolvimentos de jogos para entrega no fim do ano.",
   largura:"40%",
   altura:"auto"
   },
   {
    src:    "imagem/templo.jpg",
    titulo:"Templo",
    data:"2025",
    descriçao:"Jogo desenvolvido para a matéria programação 3D, esse projeto é focado na parte visual  e auditiva para criar uma sensação de terror na pessoa que está jogando.O jogo não possui interações somente sons. ",
    largura:"50%",
    altura:"auto"
    },
     {
    // se não possuir bee_thumb.png, pode usar "imagem/start.png"
    src: "imagem/youwin.png",
    titulo: "Jogo da Abelha",
    data: "Novembro de 2025",
    descricao: "Mini-game em Canvas. Use A/D para mover, desvie da aranha e colete 10 flores.",
    largura: "10%",
    altura: "auto",
    link: "jogo.html" // abre a página do jogo
  }
    
  ];


 let indiceAtual = 0;
const imagensPorTela = 3;

// Renderiza as imagens do carrossel (se o carrossel existir na página)
function exibirImagens() {
  const container = document.getElementById("carrossel-imagens");
  if (!container) return; // Página sem carrossel (ex.: jogo-abelha.html)

  container.innerHTML = "";

  for (let i = 0; i < imagensPorTela; i++) {
    const index = (indiceAtual + i) % imagens.length;
    const imagemInfo = imagens[index];

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";

    const img = document.createElement("img");
    img.src = imagemInfo.src;
    img.alt = imagemInfo.titulo;
    img.title = imagemInfo.descricao;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", imagemInfo.titulo);
    img.style.cursor = "pointer";
    img.loading = "lazy";
    img.decoding = "async";
    img.tabIndex = 0; // acessível via teclado

    const abrirItem = () => {
      if (imagemInfo.link) {
        window.location.href = imagemInfo.link;
        return;
      }

      const popup = window.open(
        "",
        `popup${index}`,
        "width=850,height=700,resizable=yes,scrollbars=yes"
      );

      if (popup) {
        popup.document.write(`
          <html>
            <head>
              <title>${imagemInfo.titulo}</title>
              <meta charset="UTF-8" />
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                img { width: ${imagemInfo.largura}; height: ${imagemInfo.altura}; border-radius: 8px; display: block; margin-bottom: 15px; }
                h1 { margin-top: 0; }
                .info { margin-bottom: 10px; }
              </style>
            </head>
            <body>
              <h1>${imagemInfo.titulo}</h1>
              <div class="info"><strong>Data de criação:</strong> ${imagemInfo.data}</div>
              <img src="${imagemInfo.src}" alt="${imagemInfo.titulo}">
              <p><strong>Descrição:</strong> ${imagemInfo.descricao}</p>
            </body>
          </html>
        `);
        popup.document.close();
        popup.focus();
      } else {
        alert("Por favor, permita pop-ups para visualizar as informações.");
      }
    };

    // Clique do mouse
    img.onclick = abrirItem;

    // Ativação por teclado (Enter/Espaço)
    img.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        abrirItem();
      }
    });

    const caption = document.createElement("small");
    caption.textContent = imagemInfo.titulo;
    caption.style.display = "block";
    caption.style.textAlign = "center";
    caption.style.marginTop = "6px";

    wrapper.appendChild(img);
    wrapper.appendChild(caption);
    container.appendChild(wrapper);
  }
}

// Avança ou retrocede o carrossel
function mudarImagens(direcao) {
  // Se a página não tiver carrossel, não faz nada
  if (!document.getElementById("carrossel-imagens")) return;

  // Gira páginas inteiras (em blocos de N imagens)
  indiceAtual = (indiceAtual + direcao * imagensPorTela + imagens.length) % imagens.length;
  exibirImagens();
}

/* =============================
   Inicialização segura
   ============================= */

document.addEventListener("DOMContentLoaded", () => {
  // Só tenta montar o carrossel se ele existir nesta página
  if (document.getElementById("carrossel-imagens")) {
    exibirImagens();
  }
});
