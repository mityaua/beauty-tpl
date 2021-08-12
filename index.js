// Refs
const upRef = document.getElementById('up');

window.onscroll = () => scroll();

// Смена стиля при смене размеров вьбюпорта
const scroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upRef.style.display = 'block';
  } else {
    upRef.style.display = 'none';
  }
};

// Наверх
const toTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

upRef.addEventListener('click', toTop);
