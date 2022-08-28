//* Query Selectors
const header = document.querySelectorAll('.header');
const sections = document.querySelectorAll('section');
const navigation = document.querySelectorAll('.nav ');

//* Global Variables

//* Functions
function createNavigation() {
  return `
  <ul id="nav" class="nav__items">
    <li>
      <a  class="nav-item" href="#team">The Team</a>
    </li>
    <li>
      <a class="nav-item" href="#sites">Sites Played</a>
    </li>
    <li>
      <a   class="nav-item" href="#equipment">Equipment</a>
    </li>
    <li>
      <a class="nav-item" href="#peoplesay">What People Say</a>
    </li>
    <button><a class="button" href="#contact">Contact Us</a></button>
  </ul>`;
}

//* Event Listeners
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  navigation.forEach((item) => {
    item.insertAdjacentHTML('beforeend', createNavigation());
  });
  console.log('DOM Loaded...');
});

for (i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    const navItem = e.target;
    navItem.classList.add('active');
    document
      .querySelector(navItem.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
}
