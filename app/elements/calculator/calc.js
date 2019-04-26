

const calc = document.querySelector('.calc__table');
function viewNumbers(number) {
  const string = number.toString();
  const arr = string.split('');
  let sortArr = [];
  let count = 0;
  for (let i = arr.length - 1; i > -1; i-- ) {
    sortArr.unshift(arr[i]);
    count++;
    if (count === 3) {
      count = 0;
      sortArr.unshift(' ');
    }
  }
  if (sortArr[0] === '') sortArr.shift();
  
  const beautyNum = sortArr.join('');

  return beautyNum;
}

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

    if (i != num) {
      cellPos.textContent = i;
      cellSum.textContent = viewNumbers(((parseInt(sum) * 0.38)/12).toFixed());
      cellLoan.textContent = 0;
      cellPercent.textContent = viewNumbers(((parseInt(sum) * 0.38)/12).toFixed());
    }
    else {
      cellPos.textContent = i;
      cellSum.textContent = viewNumbers(((parseInt(sum) * 0.38)/12 + parseInt(sum)).toFixed());
      cellLoan.textContent = viewNumbers(sum);
      cellPercent.textContent = viewNumbers(((parseInt(sum) * 0.38)/12).toFixed());
    }
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
    buildTable(4, 100000);
    document.querySelector('#numSum').textContent = viewNumbers(100000);
  },

  // Callback function
  onSlide: function(position, value) {
  
    deleteAllRows();
    let sum = document.querySelector('#numSum').textContent;
    sum = sum.replace(new RegExp(' ', 'g'), '');

    buildTable(value, parseInt(sum));

    document.querySelector('#numMonth').textContent = value;

  },
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


  onSlide: function(position, value) {
    deleteAllRows();
    const num = parseInt(document.querySelector('#numMonth').textContent);
    buildTable(num, value);
    document.querySelector('#numSum').textContent = viewNumbers(value);

  },

});


// const container = document.querySelector('#scroll');
// Ps.initialize(container, {
//   maxScrollbarLength: 50
// });