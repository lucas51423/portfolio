const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const projetos = [
  {
    titulo: "Projeto cep",
    descricao: "Buscador de CEP com informações completas de endereços utilizando API ViaCEP, desenvolvido com JavaScript moderno.",
    imagem: "https://localizarcep.com/assets/images/blog/sobre-cep.jpg",
    link: "projetos/projetoCEP/index.html",
  },

  {
    titulo: "Buscar Perfil no GitHub",
    descricao: "Um site que busca a imagem de perfil do GitHub com base no nome de usuário informado, desenvolvido com JavaScript moderno.",
    imagem: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg",
    link: "projetos/busca_github/index.html"
},
  {
    titulo: "Projeto Cão e Gato",
    descricao: "Este foi o primeiro projeto que desenvolvi como parte dos meus estudos, utilizando HTML e CSS. Um site simples sobre cudados profissionais com Cães e gatos.",
    imagem: "https://thumbs.dreamstime.com/b/gato-e-cachorro-bonitos-em-fundo-amarelo-c%C3%A3o-bonitinho-250093296.jpg",
    link: "projetos/cao_e_gato/index.html"
}
]

const galeriaProjetos = document.getElementById("galeriaProjetos")

projetos.forEach(projeto => {

  galeriaProjetos.innerHTML += `<article class="project-card">
  <div
    class="project-image"
    style="
      background-image: url('${projeto.imagem}');
    "
  ></div>
  <div class="project-info">
    <h3>${projeto.titulo}</h3>
    <p>
     ${projeto.descricao}
    </p>
    <a href="${projeto.link}" class="project-link" target="_blank">Ver Detalhes</a>
  </div>
</article>`

})

