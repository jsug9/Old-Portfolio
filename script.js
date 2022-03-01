function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
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

//Project array
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

//Popup details
var projectName = document.getElementById('project-name');
var projectCompany = document.getElementById('company');
var projectPosition = document.getElementById('position');
var projectYear = document.getElementById('year');
var projectImage = document.getElementById('image');
var projectDescription = document.getElementById('description');
var projectTools = document.getElementById('tools');
var projectLanguages = document.getElementById('languages');

// Modal Popup
var modal = document.getElementById("popup-modal");

// Get the button that opens the modal
const projectBtns = document.querySelectorAll('.card-button');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-icon")[0];

// When the user clicks the button, open the modal 
projectBtns.forEach((button) => {
  button.addEventListener('click', () => {
    let btnId = button.id;
    projectName.innerHTML = projects[btnId].name;
    projectCompany.innerHTML = projects[btnId].company;
    projectPosition.innerHTML = projects[btnId].position;
    projectYear.innerHTML = projects[btnId].year;
    projectImage.src = projects[btnId].image;
    projectDescription.innerHTML = projects[btnId].description;
  
    projects[btnId].tools.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      li.className = 'works-card-languages-element'
      projectLanguages.appendChild(li);
    })

    modal.style.display = 'block';
  })
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  projectLanguages.innerHTML = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    projectLanguages.innerHTML = "";
  }
}
