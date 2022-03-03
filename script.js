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

if (window.innerWidth >= 800) {
  document.getElementById('myNav').style.width = 'test';
}

// Project array
const projects = [
  {
    name: 'Tonic',
    company: 'CANOPY',
    position: 'Back End Dev',
    year: '2015',
    image: 'Resources/Snapshoot-Portfolio/snapshoot-portfolio1.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['html', 'css', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    name: 'Multi-Post Stories',
    company: 'FACEBOOK',
    position: 'Full Stack Dev',
    year: '2015',
    image: 'Resources/Snapshoot-Portfolio/snapshoot-portfolio2.svg',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tools: ['html', 'css', 'javascript', 'Ruby on rails'],
    live: '#',
    source: '#',
  },
  {
    name: 'Facebook 360',
    company: 'FACEBOOK',
    position: 'Full Stack Dev',
    year: '2015',
    image: 'Resources/Snapshoot-Portfolio/snapshoot-portfolio3.svg',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    tools: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    name: 'Uber Navigation',
    company: 'UBER',
    position: 'Lead Developer',
    year: '2018',
    image: 'Resources/Snapshoot-Portfolio/snapshoot-portfolio4.svg',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tools: ['html', 'Ruby on rails', 'css', 'javascript'],
    live: '#',
    source: '#',
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

projectBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const btnId = button.id;

    const content = `
    <div class="popup-header">
      <h2 id="project-name">${projects[btnId].name}</h2>
      <a class="close-icon" id="close-popup">&times;</a>
    </div>
    <div class="works-card-subtitle" id="popup-subtitle">
      <p class="canopy-text" id="company">${projects[btnId].company}</p>
      <ul class="works-card-subtitle-list">
        <li class="works-card-subtitle-element" id="position">${projects[btnId].position}</li>
        <li class="works-card-subtitle-element" id="year">${projects[btnId].year}</li>
      </ul>
    </div>
    <div class="image-div">
      <img class="project-image" src="${projects[btnId].image}" alt="project-image" id="image">
    </div>
    <div class="bottom">
      <div class="description-div">
        <p class="project-description" id="description">${projects[btnId].description}</p>
      </div>
      <div class="information-div">
        <ul class="works-card-languages" id="languages">
        ${projects[btnId].tools.map((language) => `<li class="works-card-languages-element">${language}</li>`).join('')}
        </ul>
        <div class="bottom-btns">
          <a class="popup-purple-button" id="project-live" href="${projects[btnId].live}">
            <div class="purple-a-div">
              <span>See Live</span>
              <img class="icon-image" src="Resources/Icons/live.svg" alt="source icon">
            </div>
          </a>
          <a class="popup-purple-button" id="project-source" href="${projects[btnId].source}">
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

// Contact Form Validation
const form = document.getElementById('contact-form');
const email = document.getElementById('form-email');
const errorDiv = document.getElementById('error-div');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  if (email.value.match(/^[a-z@.0-9-_]*$/)) {
    errorDiv.style.display = 'none';
    errorMessage.innerHTML = '';
    formEmail.style.border = '1px solid green';
  } else {
    event.preventDefault();
    formEmail.style.border = '3px solid #f47174';
    errorDiv.style.display = 'flex';
    errorDiv.setAttribute('class', 'error-div');
    errorMessage.textContent = 'Email should be in lower case';
  }
});
