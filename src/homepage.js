import resImage from './restaurant.jpg';

export function createHomepage () {
    const contentDiv = document.getElementById("content");

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = "The Blue Meal!";

    contentDiv.appendChild(nameHeading);

    const homeImage = document.createElement('img');
    homeImage.src = resImage;

    contentDiv.appendChild(homeImage);

    const homeText = document.createElement('p');
    homeText.textContent = "Where we create a food experience around our favorite color: Blue! So sit down and relax and enjoy our delicious food!";

    contentDiv.appendChild(homeText);
}


