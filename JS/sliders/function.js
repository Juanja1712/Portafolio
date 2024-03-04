function changeSlide(containerId, direction) {
  const container = document.getElementById(containerId);
  const currentIndex = parseInt(container.dataset.currentIndex) || 0;
  const totalSlides = container.querySelectorAll('.slide').length;
  const newIndex = (currentIndex + direction + totalSlides) % totalSlides;

  container.dataset.currentIndex = newIndex;
  updateSlider(container);
}

function updateSlider(container) {
  const currentIndex = parseInt(container.dataset.currentIndex) || 0;
  const slider = container.querySelector('.slider');
  const slideWidth = container.querySelector('.slide').offsetWidth;
  const newPosition = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${newPosition}px)`;
}