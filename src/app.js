const yummyButton = document.getElementById('yummy');
const navList = document.getElementById('nav-list');
const $resume = $(
  '<a id= "resumeLink" href="https://docs.google.com/document/d/16RkqOFF5wDfEYcwhF3x5qyaMs2EKjouI/edit"style="color:black"><button style= "padding: 10px">Download Resume</button></a>'
)
$("#section").append($resume)

function toggleButton() {
  navList.classList.toggle('show')
};

yummyButton.addEventListener('click', toggleButton);