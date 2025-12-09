const imagenes = document.querySelectorAll(".carrusel-contenedor img");
const btnPrev = document.querySelector(".carrusel-prev");
const btnNext = document.querySelector(".carrusel-next");

let indice = 0;

function mostrarImagen(n) {
  imagenes.forEach(img => img.classList.remove("activo"));
  imagenes[n].classList.add("activo");
}

btnNext.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen(indice);
});

btnPrev.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indice);
});
