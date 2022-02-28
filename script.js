function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

function openModal() {
  document.getElementById('popup-modal').style.width = '100%';
}

function closeModal() {
  document.getElementById('popup-modal').style.width = '0%';
}

// Mobile Menu

document.getElementById('openbtn').addEventListener('click', () => {
  openNav();
});

document.getElementById('closebtn').addEventListener('click', () => {
  closeNav();
});

document.querySelectorAll('.nav-bar-item').forEach((n) => n.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
}));

if (window.innerWidth >= 800) {
  document.getElementById('myNav').style.width = 'test';
}

// Modal Popup
document.getElementsByClassName('card-button').addEventListener('click', () => {
  openModal();
});

document.getElementById('close-popup').addEventListener('click', () => {
  closeModal();
});