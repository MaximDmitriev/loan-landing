'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

$('document').ready(function () {
  var k = 0.38; // процентная ставка

  var inputArray = [document.querySelector('#numSum'), document.querySelector('#numMonth')],
      inputRangeArray = [document.querySelector('#sum'), document.querySelector('#month')];

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
        cellSum.textContent = viewNumbers((parseInt(sum) * k / 12).toFixed());
        cellLoan.textContent = 0;
        cellPercent.textContent = viewNumbers((parseInt(sum) * k / 12).toFixed());
      } else {
        cellPos.textContent = i;
        cellSum.textContent = viewNumbers((parseInt(sum) * k / 12 + parseInt(sum)).toFixed());
        cellLoan.textContent = viewNumbers(sum);
        cellPercent.textContent = viewNumbers((parseInt(sum) * k / 12).toFixed());
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
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    onInit: function onInit() {
      buildTable(4, 100000);
      document.querySelector('#numSum').value = viewNumbers(100000);
    },

    onSlide: function onSlide(position, value) {

      deleteAllRows();

      var sum = document.querySelector('#numSum').value;
      sum = sum.replace(new RegExp(' ', 'g'), '');

      buildTable(value, parseInt(sum));

      document.querySelector('#numMonth').value = value;
    }
  });

  $('#sum').rangeslider({
    polyfill: false,
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    onSlide: function onSlide(position, value) {
      deleteAllRows();

      var num = parseInt(document.querySelector('#numMonth').value);
      buildTable(num, value);

      document.querySelector('#numSum').value = viewNumbers(value);
    }
  });

  inputArray.forEach(function (item, i) {

    item.addEventListener('input', function (event) {

      var newValue = event.target.value;

      if (newValue < 1 || newValue === '') {
        newValue = '0';
      }

      if (newValue > 10000000) {
        newValue = '10000000';
      }

      newValue = newValue.replace(new RegExp(' ', 'g'), '');

      if (parseInt(newValue) > 10000000) {
        inputRangeArray[i].setAttribute('value', '10000000');
      }

      inputRangeArray[i].setAttribute('value', newValue.toString());
      $(inputRangeArray[i]).val(newValue).change();
    });
  });

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

  var callbackModal = new Kmodal('#callback', {}); // модалка обратного звонка
  var articleModal = new Kmodal('#article', {}); // модалка со статьями
  var thanksModal = new Kmodal('#thanks', {}); // модалка спасибо

  // callbackModal.open();  // открыть модалку
  // callbackModal.close(); //закрыть модалку

  var div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  var menuBtn = document.querySelector('.menu-btn'),
      menuCloseBtn = document.querySelector('.popup-close'),
      menu = document.querySelector('.popup-menu'),
      header = document.querySelector('header'),
      btnAnimate = document.querySelector('#btnAnimate');

  menuBtn.addEventListener('click', function () {
    if (pageYOffset > 70) {
      header.style.transition = "0s";
      setTimeout(function () {
        header.classList.add('transparent');
        menu.classList.add('show');
        btnAnimate.style.display = "none";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = scrollWidth + 'px';
        header.style.left = -scrollWidth / 2 + 'px';
        header.style.height = "100vh";
        header.style.overflowX = "hidden";
        header.style.overflowY = "auto";
      }, 10);
    } else {
      header.style.transition = "0s";
      setTimeout(function () {
        menu.classList.add('show');
        btnAnimate.style.display = "none";
        document.body.style.overflow = "hidden";
        header.style.left = -scrollWidth / 2 + 'px';
        document.body.style.paddingRight = scrollWidth + 'px';
        header.style.height = "100vh";
        header.style.overflowX = "hidden";
        header.style.overflowY = "auto";
      }, 10);
    }
  });

  menuCloseBtn.addEventListener('click', function () {

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

    setTimeout(function () {
      return header.style.transition = "0.4s";
    }, 600);
  });

  window.addEventListener('scroll', function () {
    pageYOffset > 70 ? header.classList.add('bg-white') : header.classList.remove('bg-white');

    header.style.height = "initial";
    header.style.overflow = "initial";
  });

  var links = [document.querySelector('#menuAdv'), document.querySelector('#menuCalc'), document.querySelector('#menuTerm'), document.querySelector('#menuPrtn'), document.querySelector('#menuNews'), document.querySelector('#menuCont')];

  links.forEach(function (item) {
    item.addEventListener('click', function (event) {
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

      setTimeout(function () {
        return header.style.transition = "0.4s";
      }, 600);

      var id = event.target.getAttribute('data-target');

      document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });

  var modalInputs = document.querySelectorAll('input[data-name="tel"]'),
      modalBtns = document.querySelectorAll('button[data-name="tel"]');

  var check = false,
      prevValue = '';
  modalBtns.forEach(function (item) {
    return item.disabled = true;
  });

  modalInputs.forEach(function (item) {
    item.addEventListener('input', function (event) {

      var phone = event.target.value;
      event.target.value = phone.replace(/\D/g, '');

      if (phone.length > 11) {
        event.target.value = phone.slice(0, 11);
        check = true;
        modalBtns.forEach(function (item) {
          return item.disabled = false;
        });
      } else {
        if (phone.length === 6 || phone.length === 11) {
          check = true;
          modalBtns.forEach(function (item) {
            return item.disabled = false;
          });
        } else {
          check = false;
          modalBtns.forEach(function (item) {
            return item.disabled = true;
          });
        }
      }
    });
  });

  modalInputs.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
      if (item.value !== '' && !check && item.value !== prevValue) {
        item.blur();
        item.parentElement.querySelector('.warning').style.opacity = 1;
        prevValue = item.value;
        setTimeout(function () {
          return item.parentElement.querySelector('.warning').style.opacity = 0;
        }, 1500);
      }
    });
  });
});