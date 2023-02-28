slider('.slider-1');
slider('.slider-2');
slider('.slider-3');
slider('.front-panel-option');

function slider(slider) {
  const images = document.querySelectorAll(slider + ' .slider .slider-line img');
  const sliderLine = document.querySelector(slider + ' .slider .slider-line');
  let count = 0;
  let width;

  function init() {
    console.log('resize');
    width = document.querySelector(slider + ' .slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
    });
    rollSlider();
  }
  function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
  }


  init();
  window.addEventListener('resize', init);

  document.querySelector(slider + ' .slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
      count = 0;
    }
    rollSlider();
  });

  document.querySelector(slider + ' .slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
      count = images.length - 1;
    }
    rollSlider();
  });

}
