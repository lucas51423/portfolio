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
    descricao: "digite o nome do usuário",
    imagem: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg",
    link: "projetos/busca_github/index.html"
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

