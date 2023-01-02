// Open and Close PopUp on the page single-episode.php with the File Informations

const openCloseBtn = document.querySelector('.file-informations-button');
const popupDiv = document.querySelector('.file-informations-popup');
const closeBtn = document.querySelector('.close');

openCloseBtn.addEventListener('click', function() {
  popupDiv.style.visibility = 'visible';
});

closeBtn.addEventListener('click', function() {
  popupDiv.style.visibility = 'hidden';
});
