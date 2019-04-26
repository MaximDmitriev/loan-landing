
new Kmodal( '#callback', {});
new Kmodal( '#article', {});

const menuBtn = document.querySelector('.menu-btn'),
      menuCloseBtn = document.querySelector('.popup-close'),
      menu = document.querySelector('.popup-menu'),
      header = document.querySelector('header');

menuBtn.addEventListener('click', () => {
  menu.classList.add('show');
  document.body.style.overflow = "hidden";
  header.style.height = "100vh";
  header.style.overflow = "scroll";
});

menuCloseBtn.addEventListener('click', () => {
  pageYOffset > 250 ? header.classList.add('scroll') : null;
  menu.classList.remove('show');
  document.body.style.overflow = "";
  header.style.height = "initial";
  header.style.overflow = "initial";
});

let prevOffset = 0;
window.addEventListener('scroll', () => {
  pageYOffset > 250 ? header.classList.add('bg-white') : header.classList.remove('bg-white');
  

  header.style.height = "initial";
  header.style.overflow = "initial";
  if (pageYOffset > prevOffset) {
    header.classList.add('scroll'); 
    prevOffset = pageYOffset;
  } 
  else {
    header.classList.remove('scroll');
    prevOffset = pageYOffset;
  }
    
});



const links = [
  document.querySelector('#menuAdv'),
  document.querySelector('#menuCalc'),
  document.querySelector('#menuTerm'),
  document.querySelector('#menuPrtn'),
  document.querySelector('#menuNews'),
  document.querySelector('#menuCont')];

links.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    menu.classList.remove('show');
    menu.style.overflowY = 'auto';
    header.classList.add('scroll');
    document.body.style.overflow = "";

    const id = event.target.getAttribute('data-target');

    document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"});
  });
});

