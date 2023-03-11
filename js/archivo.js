const rojo = document.querySelector(".rojo");
const verde = document.querySelector(".verde");
verde.addEventListener("click", ccverde);

function ccverde() {
  const holao = document.querySelector(".holaaa");
  const body = document.querySelector("body");
  body.classList.remove("crojo");
  body.classList.toggle("cverde");
}
rojo.addEventListener("click", ccrojo);

function ccrojo() {
  const holao = document.querySelector(".holaaa");
  const body = document.querySelector("body");
  body.classList.remove("cverde");
  body.classList.toggle("crojo");
}
