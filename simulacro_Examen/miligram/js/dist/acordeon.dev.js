"use strict";

document.querySelectorAll('.acordeon-titulo').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.parentElement;
    item.classList.toggle('open');
  });
});