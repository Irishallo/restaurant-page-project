import resImage from './restaurant.jpg';

export function createHomepage () {
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const contentDiv = document.getElementById("content");

    const homePge = document.createElement('div');
    homePge.classList.add('tab1');
    homePge.setAttribute('id', 'homepage');

    const homeHeading = document.createElement('h2');
    homeHeading.textContent = "Welcome to: The Blue Forest!";

    const homeText = document.createElement('p');
    homeText.textContent = "Where we create a food experience around our favorite color: Blue! So sit down and relax and enjoy our delicious food!";

    const homeImage = document.createElement('img');
    homeImage.src = resImage;
    
    const homeTextcon = document.createElement('div');
    homeTextcon.classList.add('menuspecial');

    const daySpecialT = document.createElement('h2');
    daySpecialT.innerHTML = `Try ${days[d.getDay()]}'s Special`

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

    homePge.appendChild(homeHeading);
    homePge.appendChild(homeText);
    homePge.appendChild(homeImage);
    homeTextcon.appendChild(daySpecialT);
    homeTextcon.appendChild(homeText2);
    
    if(days[d.getDay()] == "Monday") {
        homeText3.style.fontWeight = "bold";
        homeTextcon.appendChild(homeText3);
    } else if(days[d.getDay()] == "Tuesday") {
        homeText4.style.fontWeight = "bold";
        homeTextcon.appendChild(homeText4);
    } else if(days[d.getDay()] == "Wednesday") {
        homeText5.style.fontWeight = "bold";
        homeTextcon.appendChild(homeText5);
    } else if(days[d.getDay()] == "Thurday") {
        homeText6.style.fontWeight = "bold";
        homeTextcon.appendChild(homeText6);
    } else if(days[d.getDay()] == "Friday") {
        homeText7.style.fontWeight = "bold";
        homeTextcon.appendChild(homeText7);
    } else if(days[d.getDay()] == "Saturday") {
        homeText8.style.fontWeight = "bold";
        homeTextcon.appendChild(homeText8);
    } else if(days[d.getDay()] == "Sunday") {
        homeText9.style.fontWeight = "bold";
        homeTextcon.appendChild(homeText9);
    } else {
        return
    }
    
    homePge.appendChild(homeTextcon);

    contentDiv.appendChild(homePge);
}


