export default function iniciarSwitchPage() {
  const menuButton = document.querySelectorAll("[data-menu='nav'] button");
  const menuContent = document.querySelectorAll("[data-menu='content']");
  const hideTitle = document.querySelector('.hide')

  const active = 'active';

  if(menuButton.length && menuContent.length) {
    menuButton[0].classList.add(active)
    menuContent[0].classList.add(active)
  
    const activeTab = (index) => {
  
      menuButton.forEach((btn) => {
        btn.classList.remove(active);
  
        menuContent.forEach((item) => {
          item.classList.remove(active);
        });
        
        menuButton[index].classList.add(active);
      });
      menuContent[index].classList.add(active);
      if(menuContent[1].classList.contains(active)) {
        hideTitle.classList.add(active);
      } else {
        hideTitle.classList.remove(active);
      }
    };
  
    menuButton.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}