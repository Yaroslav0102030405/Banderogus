document.querySelector('.burger-animate').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.burger-menu').classList.toggle('open');
});
