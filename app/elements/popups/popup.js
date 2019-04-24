
new Kmodal( '#callback', {});
new Kmodal( '#article', {});

const menuBtn = document.querySelector('.menu-btn'),
      menuCloseBtn = document.querySelector('.popup-close'),
      menu = document.querySelector('.popup-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.add('show');
});

menuCloseBtn.addEventListener('click', () => {
  menu.classList.remove('show');
});


const linkAdv = document.querySelector('#menuAdv'),
      linkCalc = document.querySelector('#menuCalc'),
      linkTerm = document.querySelector('#menuTerm'),
      linkPrtn = document.querySelector('#menuPrtn'),
      linkNews = document.querySelector('#menuNews'),
      linkCont = document.querySelector('#menuCont'),

      sectionAdv = document.querySelector('#advantages'),
      sectionCalc = document.querySelector('#calc'),
      sectionTerm = document.querySelector('#term'),
      sectionPrtn = document.querySelector('#parners'),
      sectionNews = document.querySelector('#news'),
      sectionCont = document.querySelector('#contact');

linkAdv.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show');
  sectionAdv.scrollIntoView({block: "start", behavior: "smooth"});
});
linkCalc.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show');
  sectionCalc.scrollIntoView({block: "start", behavior: "smooth"});
});
linkTerm.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show');
  sectionTerm.scrollIntoView({block: "start", behavior: "smooth"});
});
linkPrtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show');
  sectionPrtn.scrollIntoView({block: "start", behavior: "smooth"});
});
linkNews.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show');
  sectionNews.scrollIntoView({block: "start", behavior: "smooth"});
});
linkCont.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('show');
  sectionCont.scrollIntoView({block: "start", behavior: "smooth"});
});

const newsBtns = document.querySelectorAll('.news__card-btn'),
      newsBtnsClose = document.querySelectorAll('.article__close'),
      article = document.querySelector('.article__wrapper');

// newsBtns.forEach((item) => {
//   item.addEventListener('click', () => {
//     article.classList.add('article__wrapper_show');
//   });
// });
// newsBtnsClose.forEach((item) => {
//   item.addEventListener('click', () => {
//     article.classList.remove('article__wrapper_show');
//   });
// }); 