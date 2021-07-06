import { createHomepage } from "./homepage";
import { createMenupage } from "./menu";
import { createContactpage } from "./contact";
import './style.css';

const containerDiv = document.getElementById("container");
const contentDiv = document.getElementById('content');

const nameHeading = document.createElement('h1');
nameHeading.textContent = "The Blue Meal!";

const navBar = document.createElement('div');
navBar.classList.add('nav');

const homeBtn = document.createElement('div');
homeBtn.innerText = "Home";
homeBtn.classList.add('tabs');

const menuBtn = document.createElement('div');
menuBtn.innerText = "Menu";
menuBtn.classList.add('tabs');

const contactBtn = document.createElement('div');
contactBtn.innerText = "Contact";
contactBtn.classList.add('tabs');


navBar.appendChild(homeBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);
containerDiv.insertBefore(nameHeading, contentDiv);
containerDiv.insertBefore(navBar, contentDiv);

createHomepage();

function removeContent () {
    const homeScreen = document.getElementById('homepage');
    const menuScreen = document.getElementById('menupage');
    const contactScreen = document.getElementById('contactpage');

    if(contentDiv.querySelector("#homepage") != null) {
        contentDiv.removeChild(homeScreen);
    } else if(contentDiv.querySelector("#menupage") != null) {
        contentDiv.removeChild(menuScreen);
    } else if(contentDiv.querySelector("#contactpage") != null) {
        contentDiv.removeChild(contactScreen);
    } else {
        return;
    }
}

homeBtn.addEventListener('click', () => {
    removeContent();
    createHomepage(); });
menuBtn.addEventListener('click', () => {
    removeContent();
    createMenupage(); });
contactBtn.addEventListener('click', () => {
    removeContent();
    createContactpage(); });



