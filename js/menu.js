const togglebtn = document.querySelector(".btnBurger");
const animacion_de_abrirYcerrar = document.querySelector(".btnBurger i");
const cerraOtroMetodo = togglebtn;
const linksMenuMobil = document.querySelector('.menuMobil');

togglebtn.addEventListener("click", yaestaabierto);

function yaestaabierto() {
  const menuMobil = document.querySelector(".menuMobil");
  const body = document.querySelector('#body');
  const metodoDEcerrar = document.querySelectorAll('.linksMenuMobil')
  menuMobil.classList.toggle("menuMobilaACTIVO");
  body.classList.toggle("noScroll");
  const ESTAabierto = menuMobil.classList.contains('menuMobilaACTIVO');
  animacion_de_abrirYcerrar.classList = ESTAabierto && metodoDEcerrar  ?
  'fa-solid fa-xmark' :
  'fa-solid fa-bars';
  
  
  
  // linksMenuMobil.addEventListener('click', apretoLink);


  // function apretoLink() {

  //   const menuMobil = document.querySelector('.menuMobil');
  //   mirarsitienelaclaseActiva = menuMobil.classList.contains('menuMobilaACTIVO')
  //   const icono = document.querySelector(".btnBurger i");

  //   if (mirarsitienelaclaseActiva == true) {
  //     menuMobil.classList.remove('menuMobilaACTIVO')
  //     // icono.classList.remove('fa-solid fa-xmark');
  //   }
  //   console.log(mirarsitienelaclaseActiva);
  // };
}