export default function iniciarScrollPagina() {
  const animaScroll = document.querySelectorAll('[data-scroll="anima"]');
  const porcentagemTela = window.innerHeight * 0.6;

  if(animaScroll.length){
      function ativarScroll() {
          animaScroll.forEach((scroll) => {
              const scrollTop = scroll.getBoundingClientRect().top - porcentagemTela;
              if(scrollTop < 0) {
                  scroll.classList.add('ativo');
              }
          })
      }
      ativarScroll();
      window.addEventListener('scroll', ativarScroll);   
  }
}