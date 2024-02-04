const sessaoHeader = document.querySelector('header');
const seta = document.querySelector('.seta');
const menssagebutton = document.querySelector('.whatsapp-button')
const avatar = document.querySelector('.avatar')

let haveScrolled = false;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    sessaoHeader.classList.add('nav-shadow');
    seta.style = "opacity: 0%";
  } else {
    sessaoHeader.classList.remove('nav-shadow');
    seta.style = "opacity: 100%"
  }

  if (scrollPosition > 600) {
    if (!haveScrolled) {
      haveScrolled = true;
      avatar.style = "transform: translate(0, -50%) rotateZ(-70deg) scaleX(-1)"
      setTimeout(function () {
        avatar.style = "opacity: 0%";
        setTimeout(() => {
          avatar.style = "display: none";
          menssagebutton.style = "opacity: 100%";
        }, 800)
      }, 2500)
    }
  }

  document.querySelector(".menu-open").checked = false;
}
);

document.querySelector('.conteudo-principal').addEventListener("click", (e) => {
  if (e.currentTarget.className === 'whatsapp-button') return;
  document.querySelector(".menu-open").checked = false;
})