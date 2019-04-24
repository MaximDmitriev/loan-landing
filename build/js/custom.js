'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

$('document').ready(function () {

  var calc = document.querySelector('.calc__table');

  function buildTable(num, sum) {
    for (var i = 1; i < num + 1; i++) {
      var row = document.createElement('div');
      row.classList.add('calc__table-row');
      var cellPos = document.createElement('div');
      cellPos.classList.add('calc__table-value');
      var cellSum = document.createElement('div');
      cellSum.classList.add('calc__table-value');
      var cellLoan = document.createElement('div');
      cellLoan.classList.add('calc__table-value');
      var cellPercent = document.createElement('div');
      cellPercent.classList.add('calc__table-value');

      if (i != num) {
        cellPos.textContent = i;
        cellSum.textContent = (parseInt(sum) * 0.38 / 12).toFixed();
        cellLoan.textContent = 0;
        cellPercent.textContent = (parseInt(sum) * 0.38 / 12).toFixed();
      } else {
        cellPos.textContent = i;
        cellSum.textContent = (parseInt(sum) * 0.38 / 12 + parseInt(sum)).toFixed();
        cellLoan.textContent = sum;
        cellPercent.textContent = (parseInt(sum) * 0.38 / 12).toFixed();
      }
      row.appendChild(cellPos);
      row.appendChild(cellSum);
      row.appendChild(cellLoan);
      row.appendChild(cellPercent);
      calc.appendChild(row);
    }
  }

  function deleteAllRows() {
    var rows = [].concat(_toConsumableArray(document.getElementsByClassName('calc__table-row')));
    for (var i = 0; i < rows.length; i++) {
      calc.removeChild(rows[i]);
    }
  }

  $('#month').rangeslider({

    polyfill: false,

    // Default CSS classes
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    // // Callback function
    onInit: function onInit() {
      buildTable(4, 30000);
    },

    // Callback function
    onSlide: function onSlide(position, value) {
      var data = [],
          dataRow = {
        pos: null,
        sum: null,
        loan: null,
        percent: null
      },
          month = value,
          total = document.querySelector('#numSum').textContent;

      deleteAllRows();
      var sum = parseInt(document.querySelector('#numSum').textContent);
      buildTable(value, sum);

      document.querySelector('#numMonth').textContent = value;
    }

    // // Callback function
    // onSlideEnd: function(position, value) {
    // }
  });

  $('#sum').rangeslider({

    polyfill: false,

    // Default CSS classes
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    // // Callback function
    // onInit: function() {},

    // Callback function
    onSlide: function onSlide(position, value) {
      document.querySelector('#numSum').textContent = value;
      deleteAllRows();
      var num = parseInt(document.querySelector('#numMonth').textContent);
      buildTable(num, value);
    }

    // // Callback function
    // onSlideEnd: function(position, value) {}
  });

  ymaps.ready(function () {
    var map = new ymaps.Map('map', {
      center: [54.731597, 20.487724],
      zoom: 13,
      controls: ['smallMapDefaultSet']
    });
    var MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div class="map-div">\n                <img src="./img/icons/placeholder.png"></img>\n                \u0433. \u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434, <br>\u0421\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0439 \u043F\u0440-\u043A\u0442, \u0434.59\n            </div>');

    var myPlacemarkWithContent = new ymaps.Placemark([54.731597, 20.487724], {}, {
      iconLayout: 'default#imageWithContent',
      iconImageSize: [0, 0],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [0, 0],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [-95, -40],
      iconContentLayout: MyIconContentLayout
    });

    map.geoObjects.add(myPlacemarkWithContent);
    map.behaviors.disable('scrollZoom');
  });

  new Swiper($('#news-slider'), {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 3,
    simulateTouch: false,
    loop: true,
    navigation: {
      nextEl: '.news-next',
      prevEl: '.news-prev'
    },
    breakpoints: {
      // when window width is <= 320px
      768: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 2,
        spaceBetween: 15,
        simulateTouch: true
      }
    }
  });

  new Swiper($('#partners'), {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 4,
    simulateTouch: false,
    navigation: {
      nextEl: '.partners-next',
      prevEl: '.partners-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      950: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3,
        simulateTouch: true
      }
    }
  });

  new Kmodal('#callback', {});
  new Kmodal('#article', {});

  var menuBtn = document.querySelector('.menu-btn'),
      menuCloseBtn = document.querySelector('.popup-close'),
      menu = document.querySelector('.popup-menu');

  menuBtn.addEventListener('click', function () {
    menu.classList.add('show');
  });

  menuCloseBtn.addEventListener('click', function () {
    menu.classList.remove('show');
  });

  var linkAdv = document.querySelector('#menuAdv'),
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

  linkAdv.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('show');
    sectionAdv.scrollIntoView({ block: "start", behavior: "smooth" });
  });
  linkCalc.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('show');
    sectionCalc.scrollIntoView({ block: "start", behavior: "smooth" });
  });
  linkTerm.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('show');
    sectionTerm.scrollIntoView({ block: "start", behavior: "smooth" });
  });
  linkPrtn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('show');
    sectionPrtn.scrollIntoView({ block: "start", behavior: "smooth" });
  });
  linkNews.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('show');
    sectionNews.scrollIntoView({ block: "start", behavior: "smooth" });
  });
  linkCont.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('show');
    sectionCont.scrollIntoView({ block: "start", behavior: "smooth" });
  });

  var newsBtns = document.querySelectorAll('.news__card-btn'),
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
});