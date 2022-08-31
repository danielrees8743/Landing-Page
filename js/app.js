//? Query Selectors
//? Global Variables
const header = document.getElementById('header');
const sections = document.querySelectorAll('section'); //? Get all sections
const navigation = document.querySelectorAll('.nav'); //? Get the navigation menu
const headings = document.querySelectorAll('.heading-secondary');

let navMenu;
const panels = document.querySelectorAll('.panel');

//? Functions
function removeActiveClasses(nodeList) {
  nodeList.forEach((panel) => {
    panel.classList.remove('active');
  });
}
function createNavigation() {
  return `
  <ul id="nav__items" class="nav__items">
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
  </ul>`;
}

//? Event Listeners
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  console.log('DOM Loaded...');
  navigation.forEach((item) => {
    item.insertAdjacentHTML('beforeend', createNavigation());
  });
  const navUl = document.querySelector('.nav__items');
  navMenu = document.querySelectorAll('.nav-item');
  const liItem = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.href = '#contact';
  anchor.classList.add('nav-item');
  anchor.innerHTML = 'Subscribe';
  liItem.append(anchor);
  navUl.appendChild(liItem);
});

//? Smooth Scrolling into sections
for (i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener('click', (e) => {
    e.preventDefault();
    const navItem = e.target;
    removeActiveClasses(navMenu);
    navItem.classList.add('active');
    document
      .querySelector(navItem.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
}

//? Sticky Navigation
window.onscroll = () => {
  if (window.pageYOffset >= header.offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
//? Adds active class to the panels to the hero section
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses(panels);
    panel.classList.add('active');
  });
});

//? Mark current section
function makeActive(e) {
  sections.forEach((section) => {
    const position = section.getBoundingClientRect();
    // console.log(position, section);
    const sectionId = section.getAttribute('id');
    if (position.top <= 150 && position.bottom >= 150) {
      document.querySelector(`[href='#${sectionId}']`).classList.add('active');
      console.log(section);
    } else {
      document
        .querySelector(`[href='#${sectionId}']`)
        .classList.remove('active');
      // document
      //   .querySelectorAll('.header-secondary')
      //   .classList.remove('selected');
    }
  });
}
document.addEventListener('scroll', (e) => {
  makeActive(e);
});
