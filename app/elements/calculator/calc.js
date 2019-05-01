const k = 0.38; // процентная ставка

const inputArray = [
  document.querySelector('#numSum'),
  document.querySelector('#numMonth')
],
inputRangeArray = [
  document.querySelector('#sum'),
  document.querySelector('#month')
];

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
      cellSum.textContent = viewNumbers(((parseInt(sum) * k)/12).toFixed());
      cellLoan.textContent = 0;
      cellPercent.textContent = viewNumbers(((parseInt(sum) * k)/12).toFixed());
    }
    else {
      cellPos.textContent = i;
      cellSum.textContent = viewNumbers(((parseInt(sum) * k)/12 + parseInt(sum)).toFixed());
      cellLoan.textContent = viewNumbers(sum);
      cellPercent.textContent = viewNumbers(((parseInt(sum) * k)/12).toFixed());
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
  rangeClass: 'rangeslider',
  disabledClass: 'rangeslider--disabled',
  horizontalClass: 'rangeslider--horizontal',
  verticalClass: 'rangeslider--vertical',
  fillClass: 'rangeslider__fill',
  handleClass: 'rangeslider__handle',


  onInit: function() {
    buildTable(4, 100000);
    document.querySelector('#numSum').value = viewNumbers(100000);
  },

  onSlide: function(position, value) {
  
    deleteAllRows();

    let sum = document.querySelector('#numSum').value;
    sum = sum.replace(new RegExp(' ', 'g'), '');

    buildTable(value, parseInt(sum));

    document.querySelector('#numMonth').value = value;
  },
});


$('#sum').rangeslider({
  polyfill: false,
  rangeClass: 'rangeslider',
  disabledClass: 'rangeslider--disabled',
  horizontalClass: 'rangeslider--horizontal',
  verticalClass: 'rangeslider--vertical',
  fillClass: 'rangeslider__fill',
  handleClass: 'rangeslider__handle',


  onSlide: function(position, value) {
    deleteAllRows();

    const num = parseInt(document.querySelector('#numMonth').value);
    buildTable(num, value);

    document.querySelector('#numSum').value = viewNumbers(value);
  },
});

inputArray.forEach((item, i) => {

  item.addEventListener('input', (event) => {

    let newValue = event.target.value;

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
