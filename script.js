const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function switchMode(mode) {
  nav.style.backgroundColor = mode === 'dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = mode === 'dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  document.documentElement.setAttribute('dark-theme', mode);
  toggleIcon.children[0].textContent = mode === 'dark' ? 'Dark Mode':'Light Mode';
  if (mode === 'dark') {
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  } else {
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  }
  image1.src = `./assets/undraw_cooking_p7m1_${mode}.svg`;
  image2.src = `./assets/undraw_flying_drone_u3r2_${mode}.svg`;
  image3.src = `./assets/undraw_traveling_yhxq_${mode}.svg`;
}

// switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    switchMode('dark');
  } else {
    switchMode('light');
  }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);