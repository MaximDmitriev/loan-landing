'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

$('document').ready(function () {

  var calc = document.querySelector('.calc__table');
  function viewNumbers(number) {
    var string = number.toString();
    var arr = string.split('');
    var sortArr = [];
    var count = 0;
    for (var i = arr.length - 1; i > -1; i--) {
      sortArr.unshift(arr[i]);
      count++;
      if (count === 3) {
        count = 0;
        sortArr.unshift(' ');
      }
    }
    if (sortArr[0] === '') sortArr.shift();

    var beautyNum = sortArr.join('');

    return beautyNum;
  }

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
        cellSum.textContent = viewNumbers((parseInt(sum) * 0.38 / 12).toFixed());
        cellLoan.textContent = 0;
        cellPercent.textContent = viewNumbers((parseInt(sum) * 0.38 / 12).toFixed());
      } else {
        cellPos.textContent = i;
        cellSum.textContent = viewNumbers((parseInt(sum) * 0.38 / 12 + parseInt(sum)).toFixed());
        cellLoan.textContent = viewNumbers(sum);
        cellPercent.textContent = viewNumbers((parseInt(sum) * 0.38 / 12).toFixed());
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
      buildTable(4, 100000);
      document.querySelector('#numSum').textContent = viewNumbers(100000);
    },

    // Callback function
    onSlide: function onSlide(position, value) {

      deleteAllRows();
      var sum = document.querySelector('#numSum').textContent;
      sum = sum.replace(new RegExp(' ', 'g'), '');

      buildTable(value, parseInt(sum));

      document.querySelector('#numMonth').textContent = value;
    }
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

    onSlide: function onSlide(position, value) {
      deleteAllRows();
      var num = parseInt(document.querySelector('#numMonth').textContent);
      buildTable(num, value);
      document.querySelector('#numSum').textContent = viewNumbers(value);
    }

  });

  // const container = document.querySelector('#scroll');
  // Ps.initialize(container, {
  //   maxScrollbarLength: 50
  // });
  ymaps.ready(function () {
    var map = new ymaps.Map('map', {
      center: [54.727968, 20.466335],
      zoom: 13,
      controls: ['smallMapDefaultSet']
    });
    var MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div class="map-div">\n                <img src="./img/icons/placeholder.png"></img>\n                \u0433. \u041A\u0430\u043B\u0438\u043D\u0438\u043D\u0433\u0440\u0430\u0434, <br>\u0443\u043B. \u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0430\u044F, 12, \u043E\u0444. 5\n            </div>');

    var myPlacemarkWithContent = new ymaps.Placemark([54.727968, 20.466335], {}, {
      iconLayout: 'default#imageWithContent',
      iconImageSize: [0, 0],
      iconImageOffset: [0, 0],
      iconContentOffset: [-95, -40],
      iconContentLayout: MyIconContentLayout
    });

    map.geoObjects.add(myPlacemarkWithContent);
    map.behaviors.disable('scrollZoom');
  });

  // const header = document.querySelector('header');

  // window.addEventListener('wheel', (e) => {
  //   pageYOffset != 0 ? header.classList.add('bg-white') : header.classList.remove('bg-white');
  //   e.deltaY > 0 ? header.classList.add('scroll') : header.classList.remove('scroll');
  // });
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
      menu = document.querySelector('.popup-menu'),
      header = document.querySelector('header');

  menuBtn.addEventListener('click', function () {
    menu.classList.add('show');
    document.body.style.overflow = "hidden";
    header.style.height = "100vh";
    header.style.overflow = "scroll";
  });

  menuCloseBtn.addEventListener('click', function () {
    pageYOffset > 250 ? header.classList.add('scroll') : null;
    menu.classList.remove('show');
    document.body.style.overflow = "";
    header.style.height = "initial";
    header.style.overflow = "initial";
  });

  var prevOffset = 0;
  window.addEventListener('scroll', function () {
    pageYOffset > 250 ? header.classList.add('bg-white') : header.classList.remove('bg-white');

    header.style.height = "initial";
    header.style.overflow = "initial";
    if (pageYOffset > prevOffset) {
      header.classList.add('scroll');
      prevOffset = pageYOffset;
    } else {
      header.classList.remove('scroll');
      prevOffset = pageYOffset;
    }
  });

  var links = [document.querySelector('#menuAdv'), document.querySelector('#menuCalc'), document.querySelector('#menuTerm'), document.querySelector('#menuPrtn'), document.querySelector('#menuNews'), document.querySelector('#menuCont')];

  links.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      menu.classList.remove('show');
      menu.style.overflowY = 'auto';
      header.classList.add('scroll');
      document.body.style.overflow = "";

      var id = event.target.getAttribute('data-target');

      document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });
});