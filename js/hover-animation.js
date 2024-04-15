export default function iniciarHoverAnimacao() {
  const skillsMenu = document.querySelectorAll('[data-skills="anima"] li');
  
  const addHoverAnimation = (index) => {
    skillsMenu.forEach((skill, i) => {
      if (i !== index) {
        skill.style.opacity = 0.2;
      }
    });
  };

  skillsMenu.forEach((skill, index) => {
    skill.addEventListener('mouseover', () => {
      addHoverAnimation(index);
    });

    // volta os estilos padrões quando o mouse sair da <li>
    skill.addEventListener('mouseout', () => {
      skillsMenu.forEach((skill) => {
        skill.style.opacity = 1;
      });
    });
  });
}