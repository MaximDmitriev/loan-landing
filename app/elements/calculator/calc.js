
const calc = document.querySelector('.calc__table');

function buildTable(num, sum) {
  for (let i = 1; i < num + 1; i++) {
    const row = document.createElement('div');
    row.classList.add('calc__table-row');
    const cellPos = document.createElement('div');
    cellPos.classList.add('calc__table-value');
    const cellSum = document.createElement('div');
    cellSum.classList.add('calc__table-value');
    const cellLoan = document.createElement('div');
    cellLoan.classList.add('calc__table-value');
    const cellPercent = document.createElement('div');
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
  const rows = [...document.getElementsByClassName('calc__table-row')];
  for (let i = 0; i < rows.length; i++) {
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
  onInit: function() {
    buildTable(4, 30000);
  },

  // Callback function
  onSlide: function(position, value) {
    let data = [],
        dataRow = {
          pos: null,
          sum: null,
          loan: null,
          percent: null
        },

        month = value,
        total = document.querySelector('#numSum').textContent;
    
    
    deleteAllRows();
    const sum = parseInt(document.querySelector('#numSum').textContent);
    buildTable(value, sum);

    document.querySelector('#numMonth').textContent = value;

  },

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
  onSlide: function(position, value) {
    document.querySelector('#numSum').textContent = value;
    deleteAllRows();
    const num = parseInt(document.querySelector('#numMonth').textContent);
    buildTable(num, value);

  },

  // // Callback function
  // onSlideEnd: function(position, value) {}
});


