const background = document.querySelector('.background');
const modal = document.querySelector('.modal');
const noBtn = document.querySelector('.modal__action--negative');
const hamburgerBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

function openModal() {
  background.style.display = 'block';
  modal.style.display = 'block';
}

function openNav() {
  background.style.display = 'block';
  mobileNav.style.display = 'block';
}

function closeModal() {
  background.style.display = 'none';
  background.style.display = 'none';
  mobileNav.style.display = 'none';
}


noBtn ? noBtn.addEventListener('click', closeModal) : null;
background.addEventListener('click', closeModal);

const plansSections = document.querySelectorAll('.cta-model');
for (const btn of plansSections) {
  btn.addEventListener('click', openModal);
}

hamburgerBtn.addEventListener('click', openNav);