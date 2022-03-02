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

// Project details
const projectName = document.getElementById('project-name');
const projectCompany = document.getElementById('company');
const projectPosition = document.getElementById('position');
const projectYear = document.getElementById('year');
const projectImage = document.getElementById('image');
const projectDescription = document.getElementById('description');
const projectLanguages = document.getElementById('languages');
const projectLive = document.getElementById('project-live');
const projectSource = document.getElementById('project-source');

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

// Modal Popup
const modal = document.getElementById('popup-modal');

// Get the button that opens the modal
const projectBtns = document.querySelectorAll('.card-button');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close-icon')[0];

// When the user clicks the button, open the modal
projectBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const btnId = button.id;
    projectName.innerHTML = projects[btnId].name;
    projectCompany.innerHTML = projects[btnId].company;
    projectPosition.innerHTML = projects[btnId].position;
    projectYear.innerHTML = projects[btnId].year;
    projectImage.src = projects[btnId].image;
    projectDescription.innerHTML = projects[btnId].description;
    projectLive.setAttribute('href', projects[btnId].live);
    projectSource.setAttribute('href', projects[btnId].source);

    projects[btnId].tools.forEach((project) => {
      const li = document.createElement('li');
      li.innerText = project;
      li.className = 'works-card-languages-element';
      projectLanguages.appendChild(li);
    });

    modal.style.display = 'block';
  });
});

// When the user clicks on <span> (x), close the modal

span.onclick = function closeOnClick() {
  modal.style.display = 'none';
  projectLanguages.innerHTML = '';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function closeOnEvent(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    projectLanguages.innerHTML = '';
  }
};
