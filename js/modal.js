const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => {
  document.body.classList.toggle('modal-open');
  modal.classList.toggle('is-hidden');
};

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

// function toggleModal() {
//   document.body.classList.toggle('modal-open');
//   modal.classList.toggle('is-hidden');
// }
