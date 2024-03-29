// Mobile Menu

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

document.getElementById('openbtn').addEventListener('click', () => {
  openNav();
});

document.getElementById('closebtn').addEventListener('click', () => {
  closeNav();
});

document.querySelectorAll('.nav-bar-link').forEach((n) => n.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
}));

window.addEventListener('resize', () => {
  if (window.innerWidth >= 800) {
    document.getElementById('myNav').style.width = 'fit-content';
  }

  if (window.innerWidth <= 800) {
    document.getElementById('myNav').style.width = '0%';
  }
});

// Project array
const projects = [
  {
    name: 'Break Out Fest',
    company: 'Personal Projects',
    position: 'Front-End Dev',
    year: '2022',
    image: 'Resources/Projects/breakout.png',
    description: 'A website to announce the future concert of a local rock band called Break Out with a recent rebranding.',
    tools: ['html', 'css', 'javascript'],
    live: 'https://jsug9.github.io/Capstone-Project-1',
    source: 'https://github.com/jsug9/Capstone-Project-1',
  },
  {
    name: 'Bee Store',
    company: 'Personal Projects',
    position: 'Full-Stack Dev',
    year: '2022',
    image: 'Resources/Projects/beestore.png',
    description: 'Interactive SPA in which the user can view, add, delete, and reserve bees. Our app allows a user to add a photo of their choosing by using AWS API. Built using React.',
    tools: ['React', 'Redux', 'RoR'],
    live: 'https://beebookcapstone.netlify.app',
    source: 'https://github.com/jsug9/bee-bookings-front-end',
  },
  {
    name: 'PokeAPI',
    company: 'Personal Projects',
    position: 'Front-End Dev',
    year: '2022',
    image: 'Resources/Projects/pokemon.png',
    description: 'This web displays characters from Pokemon through the Pokeapi and allows to post likes, comments and reservations thanks to the Involvement API, which also allow the page to show a counter of these posts. The project was built using SCSS, JS, HTML and Webpack and tested through Jest.',
    tools: ['html', 'css', 'javascript'],
    live: 'https://github.com/jsug9/Capstone-2-PokeAPI',
    source: 'https://fed1k.github.io/PokeApi/',
  },
  {
    name: 'iBudget',
    company: 'Personal Projects',
    position: 'Back-end Dev',
    year: '2022',
    image: 'Resources/Projects/ibudget.png',
    description: 'A website to announce the future concert of a local rock band called Break Out with a recent rebranding.',
    tools: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
    live: 'https://jsug9.github.io/Capstone-Project-1',
    source: 'https://github.com/jsug9/Capstone-Project-1',
  },
];

// Works Section
const worksList = document.getElementById('works-list');

projects.forEach((project, index) => {
  const worksLi = document.createElement('li');
  worksLi.className = 'works-card';

  const worksImg = document.createElement('img');
  worksImg.setAttribute('class', 'works-card-image');
  worksImg.setAttribute('src', project.image);
  worksImg.setAttribute('alt', 'works card image');
  worksLi.appendChild(worksImg);

  const worksTextDiv = document.createElement('div');
  worksTextDiv.setAttribute('class', 'works-card-text');

  const worksTitle = document.createElement('h2');
  worksTitle.setAttribute('class', 'works-card-title');
  worksTitle.innerHTML = project.name;
  worksTextDiv.appendChild(worksTitle);

  const worksSubTitleDiv = document.createElement('div');
  worksSubTitleDiv.setAttribute('class', 'works-card-subtitle');

  const worksCompany = document.createElement('p');
  worksCompany.setAttribute('class', 'canopy-text');
  worksCompany.innerHTML = project.company;
  worksSubTitleDiv.appendChild(worksCompany);

  const worksCardList = document.createElement('ul');
  worksCardList.setAttribute('class', 'works-card-subtitle-list');

  const worksPosition = document.createElement('li');
  worksPosition.innerText = project.position;
  worksPosition.className = 'works-card-subtitle-element';
  worksCardList.appendChild(worksPosition);

  const worksYear = document.createElement('li');
  worksYear.innerText = project.year;
  worksYear.className = 'works-card-subtitle-element';
  worksCardList.appendChild(worksYear);

  worksSubTitleDiv.appendChild(worksCardList);

  worksTextDiv.appendChild(worksSubTitleDiv);

  const worksDescription = document.createElement('p');
  worksDescription.setAttribute('class', 'works-card-description');
  worksDescription.innerHTML = project.description;
  worksTextDiv.appendChild(worksDescription);

  const worksLanguages = document.createElement('ul');
  worksLanguages.setAttribute('class', 'works-card-languages');
  project.tools.forEach((tool) => {
    const li = document.createElement('li');
    li.innerText = tool;
    li.className = 'works-card-languages-element';
    worksLanguages.appendChild(li);
  });
  worksTextDiv.appendChild(worksLanguages);

  const worksButton = document.createElement('button');
  worksButton.setAttribute('type', 'button');
  worksButton.setAttribute('class', 'purple-button card-button');
  worksButton.setAttribute('id', index);
  worksButton.innerHTML = 'See project';
  worksTextDiv.appendChild(worksButton);

  worksLi.appendChild(worksTextDiv);

  worksList.appendChild(worksLi);
});

// Popup Modal
const projectBtns = document.querySelectorAll('.card-button');

const body = document.getElementById('body');

const overlay = document.createElement('div');
overlay.setAttribute('class', 'popup');
overlay.setAttribute('id', 'popup-modal');

const popup = document.createElement('div');
popup.setAttribute('class', 'modal');
overlay.appendChild(popup);

projectBtns.forEach((button, index) => {
  button.addEventListener('click', () => {
    const content = `
    <div class="popup-header">
      <h2 id="project-name">${projects[index].name}</h2>
      <a class="close-icon" id="close-popup">&times;</a>
    </div>
    <div class="works-card-subtitle" id="popup-subtitle">
      <p class="canopy-text" id="company">${projects[index].company}</p>
      <ul class="works-card-subtitle-list">
        <li class="works-card-subtitle-element" id="position">${projects[index].position}</li>
        <li class="works-card-subtitle-element" id="year">${projects[index].year}</li>
      </ul>
    </div>
    <div class="image-div">
      <img class="project-image" src="${projects[index].image}" alt="project-image" id="image">
    </div>
    <div class="bottom">
      <div class="description-div">
        <p class="project-description" id="description">${projects[index].description}</p>
      </div>
      <div class="information-div">
        <ul class="works-card-languages" id="languages">
        ${projects[index].tools.map((language) => `<li class="works-card-languages-element">${language}</li>`).join('')}
        </ul>
        <div class="bottom-btns">
          <a class="popup-purple-button" id="project-live" href="${projects[index].live}" target="_blank" rel="noopener noreferrer">
            <div class="purple-a-div">
              <span>See Live</span>
              <img class="icon-image" src="Resources/Icons/live.svg" alt="source icon">
            </div>
          </a>
          <a class="popup-purple-button" id="project-source" href="${projects[index].source}" target="_blank" rel="noopener noreferrer">
            <div class="purple-a-div">
              <span>See Source</span>
              <img class="icon-image" src="Resources/Icons/source.svg" alt="source icon">
            </div>
          </a>
        </div>
      </div>
    </div>
    `;

    popup.innerHTML = content;
    overlay.style.display = 'block';
    body.appendChild(overlay);

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close-icon')[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function closeOnClick() {
      overlay.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function closeOnEvent(event) {
      if (event.target === overlay) {
        overlay.style.display = 'none';
      }
    };
  });
});

// Contact consts
const form = document.getElementById('contact-form');
const formEmail = document.getElementById('form-email');
const formName = document.getElementById('form-name');
const formMessage = document.getElementById('form-message');
const errorDiv = document.getElementById('error-div');
const errorMessage = document.getElementById('error-message');

// Contact Form Validation
form.addEventListener('submit', (event) => {
  if (formEmail.value.match(/^[a-z@.0-9-_]*$/)) {
    errorDiv.style.display = 'none';
    errorMessage.innerHTML = '';
    formEmail.style.border = '1px solid green';
    localStorage.clear();
  } else {
    event.preventDefault();
    formEmail.style.border = '3px solid #f47174';
    errorDiv.style.display = 'flex';
    errorDiv.setAttribute('class', 'error-div');
    errorMessage.textContent = 'Email should be in lower case';
  }
});

// Local Storage

function storageAvailable(type) {
  let storage;
  const x = '__storage_test__';

  try {
    storage = window[type];
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0
    );
  }
}

function formValues() {
  const formValues = {
    name: formName.value,
    email: formEmail.value,
    message: formMessage.value,
  };

  localStorage.setItem('formValues', JSON.stringify(formValues));
}

function checkLocalStorage() {
  let name = '';
  let email = '';
  let message = '';

  if (JSON.parse(localStorage.getItem('formValues')) === null) {
    name = '';
    email = '';
    message = '';
  } else {
    ({ name, email, message } = JSON.parse(localStorage.getItem('formValues')));
  }

  if (name !== 'empty' || email !== 'empty' || message !== 'empty') {
    formName.value = name;
    formEmail.value = email;
    formMessage.value = message;
  }
}

if (storageAvailable('localStorage')) {
  formName.addEventListener('input', formValues);
  formEmail.addEventListener('input', formValues);
  formMessage.addEventListener('input', formValues);

  document.addEventListener('DOMContentLoaded', () => {
    checkLocalStorage();
  });
}
