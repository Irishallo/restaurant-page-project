import { createHomepage } from "./homepage";
import './style.css';

const containerDiv = document.getElementById("container");
const contentDiv = document.getElementById('content');

const nameHeading = document.createElement('h1');
nameHeading.textContent = "The Blue Meal!";

const navBar = document.createElement('div');
navBar.classList.add('nav');

const homeBtn = document.createElement('div');
homeBtn.innerText = "Home";

const menuBtn = document.createElement('div');
menuBtn.innerText = "Menu";

const contactBtn = document.createElement('div');
contactBtn.innerText = "Contact";


navBar.appendChild(homeBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);
containerDiv.insertBefore(nameHeading, contentDiv);
containerDiv.insertBefore(navBar, contentDiv);

function removeContent () {
    const homeScreen = document.getElementById('homepage');
    contentDiv.removeChild(homeScreen);
}

homeBtn.addEventListener('click', createHomepage);
menuBtn.addEventListener('click', removeContent);
contactBtn.addEventListener('click', removeContent);



