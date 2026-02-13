(function () {
  // Плавная прокрутка по якорям
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Слайдер фоновых картинок в hero
  var slides = document.querySelectorAll('.hero__slide');
  var dots = document.querySelectorAll('.hero__dot');
  var current = 0;

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;
    slides.forEach(function (s, i) {
      s.classList.toggle('is-active', i === current);
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('is-active', i === current);
    });
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      goToSlide(i);
    });
  });

  // Автопереключение каждые 5 секунд
  setInterval(function () {
    goToSlide(current + 1);
  }, 5000);

  // Обработка формы
  var form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Заявка на тур отправлена. Мы свяжемся с вами в ближайшее время.');
      form.reset();
    });
  }

  // Слайдер достопримечательностей
  var landmarkBlocks = document.querySelectorAll('.landmark-block');
  var landmarkPrevButtons = document.querySelectorAll('.landmark-block__arrow--prev');
  var landmarkNextButtons = document.querySelectorAll('.landmark-block__arrow--next');
  var landmarkCurrent = 0;

  function showLandmark(index) {
    if (!landmarkBlocks.length) return;
    if (index < 0) index = landmarkBlocks.length - 1;
    if (index >= landmarkBlocks.length) index = 0;
    landmarkCurrent = index;

    landmarkBlocks.forEach(function (block, i) {
      if (i === landmarkCurrent) {
        block.classList.remove('is-hidden');
      } else {
        block.classList.add('is-hidden');
      }
    });
  }

  landmarkPrevButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      showLandmark(landmarkCurrent - 1);
    });
  });

  landmarkNextButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      showLandmark(landmarkCurrent + 1);
    });
  });

  showLandmark(0);
})();
