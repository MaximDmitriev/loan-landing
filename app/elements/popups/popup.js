
const callbackModal = new Kmodal( '#callback', {}); // модалка обратного звонка
const articleModal = new Kmodal( '#article', {}); // модалка со статьями
const thanksModal = new Kmodal( '#thanks', {}); // модалка спасибо

// callbackModal.open();  // открыть модалку
// callbackModal.close(); //закрыть модалку

const div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
div.style.visibility = 'hidden';

document.body.appendChild(div);
const scrollWidth = div.offsetWidth - div.clientWidth;
document.body.removeChild(div);

const menuBtn = document.querySelector('.menu-btn'),
      menuCloseBtn = document.querySelector('.popup-close'),
      menu = document.querySelector('.popup-menu'),
      header = document.querySelector('header'),
      btnAnimate = document.querySelector('#btnAnimate');

menuBtn.addEventListener('click', () => {
  if (pageYOffset > 70) {
    header.style.transition = "0s";
    setTimeout(() => {
      header.classList.add('transparent');
      menu.classList.add('show');
      btnAnimate.style.display = "none";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
      header.style.left = `${-scrollWidth/2}px`;
      header.style.height = "100vh";
      header.style.overflowX = "hidden";
      header.style.overflowY = "auto";
      
    }, 10);
  }
  else {
    header.style.transition = "0s";
    setTimeout(() => {
      menu.classList.add('show');
      btnAnimate.style.display = "none";
      document.body.style.overflow = "hidden";
      header.style.left = `${-scrollWidth/2}px`;
      document.body.style.paddingRight = `${scrollWidth}px`;
      header.style.height = "100vh";
      header.style.overflowX = "hidden";
      header.style.overflowY = "auto";
    }, 10);
  }
});

menuCloseBtn.addEventListener('click', () => {
  
  menu.classList.remove('show');
  header.style.transition = "0";
  header.style.left = "0";
  document.body.style.paddingRight = "0";
  document.body.style.overflow = "";
  header.style.width = "100%";
  header.style.height = "initial";
  header.style.overflow = "initial";
  header.classList.remove('transparent');

  if (document.body.clientWidth < 768) {
    btnAnimate.style.display = "flex";
  }

  setTimeout(() => header.style.transition = "0.4s", 600);
});

window.addEventListener('scroll', () => {
  pageYOffset > 70 ? header.classList.add('bg-white') : header.classList.remove('bg-white');

  header.style.height = "initial";
  header.style.overflow = "initial";
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
    header.style.transition = "0";
    header.style.left = "0";
    document.body.style.paddingRight = "0";
    document.body.style.overflow = "";
    header.style.width = "100%";
    header.style.height = "initial";
    header.style.overflow = "initial";
    header.classList.remove('transparent');
    if (document.body.clientWidth < 768) {
      btnAnimate.style.display = "flex";
    }
  
    setTimeout(() => header.style.transition = "0.4s", 600);

    const id = event.target.getAttribute('data-target');

    document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"});
  });
});


const modalInputs = document.querySelectorAll('input[data-name="tel"]'),
      modalBtns = document.querySelectorAll('button[data-name="tel"]');

let check = false,
    prevValue = '';
modalBtns.forEach(item => item.disabled = true);

modalInputs.forEach((item) => {
  item.addEventListener('input', (event) => {

    let phone = event.target.value;
    event.target.value = phone.replace(/\D/g, '');

    if (phone.length > 11) {
      event.target.value = phone.slice(0, 11);
      check = true;
      modalBtns.forEach(item => item.disabled = false);
    }
    else {
      if (phone.length === 6 || phone.length === 11) {
        check = true;
        modalBtns.forEach(item => item.disabled = false);
      }
      else {
        check = false;
        modalBtns.forEach(item => item.disabled = true);
      }
    }
  });
});

modalInputs.forEach((item) => {
  item.addEventListener('mouseleave', () => {
    if (item.value !== '' && !check && item.value !== prevValue) {
      item.blur();
      item.parentElement.querySelector('.warning').style.opacity = 1;
      prevValue = item.value;
      setTimeout(() => item.parentElement.querySelector('.warning').style.opacity = 0, 1500);
    }
  });
});
