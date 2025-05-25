const menu = document.getElementById("menu");
const alink = document.getElementById("alink");

menu.addEventListener("click", function () {
  alink.classList.toggle("expanded");
});

const progressBar = document.getElementById("progressBar");
const loaderContainer = document.getElementById("loaderContainer");
const content = document.getElementById("content");
let progress = 0;
const interval = setInterval(() => {
  progress += Math.random() * 10;
  if (progress > 100) progress = 100;

  progressBar.style.width = progress + "%";

  if (progress === 100) {
    clearInterval(interval);

    // Espera um pouco antes de ocultar a tela de carregamento
    setTimeout(() => {
      loaderContainer.style.opacity = "0";
      content.style.opacity = "1";

      // Remove completamente a tela de carregamento após a animação
      // Isso garante que os elementos abaixo possam receber cliques
      setTimeout(() => {
        loaderContainer.style.display = "none";
        loaderContainer.remove(); // Remove o elemento completamente do DOM
      }, 500);
    }, 500);
  }
}, 150);
