document.getElementById('reveal').addEventListener('click', function() {
  document.querySelector('.main-page').style.transform = 'translateY(-100%)';
  document.querySelector('.secondary-page').style.transform = 'translateY(0)';
  loadSecondaryPage();
});
function loadSecondaryPage() {
    fetch('home.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('.secondary-page').innerHTML = html;
        document.querySelector('.secondary-page').style.transform = 'translateY(0)';
      })
      .catch(error => console.log('Error loading secondary page:', error));
  }