import resImage from './restaurant.jpg';

export function createHomepage () {
    const contentDiv = document.getElementById("content");

    const homePge = document.createElement('div');
    homePge.classList.add('tab1');

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = "The Blue Meal!";

    homePge.appendChild(nameHeading);

    const homeImage = document.createElement('img');
    homeImage.src = resImage;

    homePge.appendChild(homeImage);

    const homeText = document.createElement('p');
    homeText.textContent = "Where we create a food experience around our favorite color: Blue! So sit down and relax and enjoy our delicious food!";

    const homeTextcon = document.createElement('div');
    homeTextcon.classList.add('menuspecial');
    const homeText2 = document.createElement('p');
    homeText2.textContent = 'try our meal of the day! Each day of the week a different special meal. See our menu for more details';

    const homeText3 = document.createElement('p');
    homeText3.textContent = 'Monday: blue soup';

    const homeText4 = document.createElement('p');
    homeText4.textContent = 'Tuesday: Veggie burger with blue cheese';

    const homeText5 = document.createElement('p');
    homeText5.textContent = 'Wednesday: Blue pancakes';

    const homeText6 = document.createElement('p');
    homeText6.textContent = 'Thurday: Blueberry pie';

    const homeText7 = document.createElement('p');
    homeText7.textContent = 'Friday: blue potatoes with cauliflower steak';

    const homeText8 = document.createElement('p');
    homeText8.textContent = 'Saturday: blue mushroom stew';

    const homeText9 = document.createElement('p');
    homeText9.textContent = 'Sunday: pasta with blue sauce';

    

    homePge.appendChild(homeText);
    homeTextcon.appendChild(homeText2);
    homeTextcon.appendChild(homeText3);
    homeTextcon.appendChild(homeText4);
    homeTextcon.appendChild(homeText5);
    homeTextcon.appendChild(homeText6);
    homeTextcon.appendChild(homeText7);
    homeTextcon.appendChild(homeText8);
    homeTextcon.appendChild(homeText9);
    homePge.appendChild(homeTextcon);

    contentDiv.appendChild(homePge);
}


