const paths = document.querySelectorAll('.path');

paths.forEach(path => {
  path.addEventListener('click', function() {
    const href = path.parentElement.getAttribute('href');
    if (href) {
      window.location.href = href;
    }
  });
});
