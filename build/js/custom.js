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
      cellPos.textContent = i;
      cellSum.textContent = sum;
      cellLoan.textContent = sum + 60000;
      cellPercent.textContent = sum * 0.38;
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

  var callBtns = [document.querySelector('.mainscreen__content-btn'), document.querySelector('.term__consult-btn'), document.querySelector('.contacts__info-btn')],
      overlay = document.querySelector('.total-overlay'),
      callModal = document.querySelector('#call'),
      closeBtn = document.querySelector('.icon-close');

  console.log(overlay);

  callBtns.forEach(function (item) {
    item.addEventListener('click', function () {
      overlay.style.display = 'flex';
      callModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
    callModal.style.display = 'none';
    document.body.style.overflow = '';
  });

  // let month = $('#month').onSlide();

  console.log('---', month);
  // const month = document.querySelector('#month');

  // month.addEventListener('click', () => console.log(month.value));


  // console.log(month);
});
// window.addEventListener('DOMContentLoaded', () => {

// });