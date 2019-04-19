
const callBtns = [document.querySelector('.mainscreen__content-btn'),
                  document.querySelector('.term__consult-btn'),
                  document.querySelector('.contacts__info-btn')],
      overlay = document.querySelector('.total-overlay'),
      callModal = document.querySelector('#call'),
      closeBtn = document.querySelector('.icon-close');

console.log(overlay);

callBtns.forEach((item) => {
  item.addEventListener('click', () => {
    overlay.style.display = 'flex';
    callModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  callModal.style.display = 'none';
  document.body.style.overflow = '';
});

// let month = $('#month').onSlide();

console.log('---', month);
// const month = document.querySelector('#month');

// month.addEventListener('click', () => console.log(month.value));


// console.log(month);