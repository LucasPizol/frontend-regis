AOS.init()


const sessaoHeader = document.querySelector('header');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        sessaoHeader.classList.add('nav-shadow');
      } else {
        sessaoHeader.classList.remove('nav-shadow');
      }
    }
);