document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.fade-in');

  function fadeInImages() {
    images.forEach(function(image) {
      if (isElementInViewport(image) && !image.classList.contains('show')) {
        image.classList.add('show');
      }
    });
  }

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener('scroll', fadeInImages);
  window.addEventListener('resize', fadeInImages);

  // Call it initially to show images that are already in the viewport
  fadeInImages();
});
