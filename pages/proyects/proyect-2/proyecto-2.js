var btnToggle1 = document.querySelector(".menu1");
var btnToggle2 = document.querySelector(".menu2");
var btn1 = document.querySelector(".menu1 i");
var btn2 = document.querySelector(".menu2 i");

btnToggle1.addEventListener("click", btnClikeado1);

function btnClikeado1() {
  const BurguerMenu1 = document.querySelector(".BurguerMenu-1");
  const BurguerMenu2 = document.querySelector(".BurguerMenu-2");
  BurguerMenu1.classList.toggle('ACTIVO');
  BurguerMenu2.classList.toggle('ACTIVO');
  const isOpen1 = BurguerMenu1.classList.contains('ACTIVO');
    btn1.classList = isOpen1
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars';

    btn2.classList = isOpen1
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars';
}
btnToggle2.addEventListener("click", btnClikeado2);
function btnClikeado2() {
  const BurguerMenu2 = document.querySelector(".BurguerMenu-2");
  const BurguerMenu1 = document.querySelector(".BurguerMenu-1");
  BurguerMenu2.classList.toggle('ACTIVO');
  BurguerMenu1.classList.toggle('ACTIVO');
  const isOpen1 = BurguerMenu1.classList.contains('ACTIVO');
    btn1.classList = isOpen1
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars';

    btn2.classList = isOpen1
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars';
}


const botonSalir = document.querySelector('#btnSalir')

botonSalir.addEventListener('click', salir);
function salir() {
    window.location.href = '../../codigos.html'
}











