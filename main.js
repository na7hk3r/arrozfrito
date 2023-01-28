// Obtener los botones prev y next
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');

// Obtener los slides
const slides = document.querySelectorAll('.carousel-item');

// Agregar un listener al botón prev
prevBtn.addEventListener('click', () => {
  // Obtener el slide activo
  const current = document.querySelector('.carousel-item.active');

  // Remover la clase active del slide activo
  current.classList.remove('active');

  // Verificar si el slide activo es el primer slide
  if (current.previousElementSibling) {
    // Agregar la clase active al slide anterior
    current.previousElementSibling.classList.add('active');
  } else {
    // Si no, agregar la clase active al último slide
    slides[slides.length - 1].classList.add('active');
  }
});

// Agregar un listener al botón next
nextBtn.addEventListener('click', () => {
  // Obtener el slide activo
  const current = document.querySelector('.carousel-item.active');

  // Remover la clase active del slide activo
  current.classList.remove('active');

  // Verificar si el slide activo es el último slide
  if (current.nextElementSibling) {
    // Agregar la clase active al slide siguiente
    current.nextElementSibling.classList.add('active');
  } else {
    // Si no, agregar la clase active al primer slide
    slides[0].classList.add('active');
  }
});
