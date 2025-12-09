"use strict";

var imagenes = document.querySelectorAll(".carrusel-contenedor img");
var btnPrev = document.querySelector(".carrusel-prev");
var btnNext = document.querySelector(".carrusel-next");
var indice = 0;

function mostrarImagen(n) {
  imagenes.forEach(function (img) {
    return img.classList.remove("activo");
  });
  imagenes[n].classList.add("activo");
}

btnNext.addEventListener("click", function () {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen(indice);
});
btnPrev.addEventListener("click", function () {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indice);
});