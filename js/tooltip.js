const paths = document.querySelectorAll('.path');

paths.forEach(path => {
  const text = document.createElement('div');
  text.classList.add('tooltip');
  text.style.display = 'none';
  text.style.position = 'absolute';
  text.style.backgroundColor = '#FFE5B4';
  text.style.borderRadius= '8px';
  text.style.padding = '5px';
  text.style.border = '1px solid black';
  text.style.fontSize='12pt';
  document.body.appendChild(text);

  path.addEventListener('mouseenter', function(event) {
    text.textContent = path.getAttribute('data-tooltip-text');
    text.style.left = event.pageX + 'px';
    text.style.top = event.pageY + 'px';
    text.style.display = 'block';
  });

  path.addEventListener('mouseleave', function() {
    text.style.display = 'none';
  });
});


