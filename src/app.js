const yummyButton = document.getElementById('yummy');
const navList = document.getElementById('nav-list');


function toggleButton() {
  navList.classList.toggle('show')
};

yummyButton.addEventListener('click', toggleButton);