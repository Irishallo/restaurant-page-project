export function createMenupage () {
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const contentDiv = document.getElementById("content");

    const menuPge = document.createElement('div');
    menuPge.classList.add('tab2');
    menuPge.setAttribute('id', 'menupage');

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = "Menu!";

    const menuSpecial = document.createElement('div');
    menuSpecial.classList.add('menuspecial');

    const daySpecialT = document.createElement('h3');
    daySpecialT.innerHTML = `Try Todays Special!`

    const menuSpecialText = document.createElement('p');
    menuSpecialText.textContent = 'try our meal of the day! Each day of the week a different special meal. See our menu for more details';

    const meSpText1 = document.createElement('p');
    meSpText1.textContent = 'Monday: blue soup';

    const meSpText2 = document.createElement('p');
    meSpText2.textContent = 'Tuesday: Veggie burger with blue cheese';

    const meSpText3 = document.createElement('p');
    meSpText3.textContent = 'Wednesday: Blue pancakes';

    const meSpText4 = document.createElement('p');
    meSpText4.textContent = 'Thurday: Blueberry pie';

    const meSpText5 = document.createElement('p');
    meSpText5.textContent = 'Friday: blue potatoes with cauliflower steak';

    const meSpText6 = document.createElement('p');
    meSpText6.textContent = 'Saturday: blue mushroom stew';

    const meSpText7 = document.createElement('p');
    meSpText7.textContent = 'Sunday: pasta with blue sauce';

    if(d.getDay() == 1) {
        meSpText1.style.fontWeight = "bold";
    } else if(d.getDay() == 2) {
        meSpText2.style.fontWeight = "bold";
    } else if(d.getDay() == 3) {
        meSpText3.style.fontWeight = "bold";
    } else if(d.getDay() == 4) {
        meSpText4.style.fontWeight = "bold";
    } else if(d.getDay() == 5) {
        meSpText5.style.fontWeight = "bold";
    } else if(d.getDay() == 6) {
        meSpText6.style.fontWeight = "bold";
    } else if(d.getDay() == 0) {
        meSpText7.style.fontWeight = "bold";
    } else { 
        console.log("cannot find day, menu");
    }

    const preMenu = document.createElement('div');
    const mainMenu = document.createElement('div');
    const dessertMenu = document.createElement('div');
    const drinksMenu = document.createElement('div');
    preMenu.classList.add('menulist');
    mainMenu.classList.add('menulist');
    dessertMenu.classList.add('menulist');
    drinksMenu.classList.add('menulist');

    const preHeading = document.createElement('h3');
    preHeading.innerText = 'Appetizers';
    const mainHeading = document.createElement('h3');
    mainHeading.innerText = 'Main Course';
    const dessertHeading = document.createElement('h3');
    dessertHeading.innerText = 'Cakes and desserts';
    const drinksHeading = document.createElement('h3');
    drinksHeading.innerText = 'Drinks';

    menuPge.appendChild(menuHeading);
    menuSpecial.appendChild(daySpecialT);
    menuSpecial.appendChild(menuSpecialText);
    menuSpecial.appendChild(meSpText1);
    menuSpecial.appendChild(meSpText2);
    menuSpecial.appendChild(meSpText3);
    menuSpecial.appendChild(meSpText4);
    menuSpecial.appendChild(meSpText5);
    menuSpecial.appendChild(meSpText6);
    menuSpecial.appendChild(meSpText7);
    menuPge.appendChild(menuSpecial);
    preMenu.appendChild(preHeading);
    menuPge.appendChild(preMenu);
    mainMenu.appendChild(mainHeading);
    menuPge.appendChild(mainMenu);
    dessertMenu.appendChild(dessertHeading);
    menuPge.appendChild(dessertMenu);
    drinksMenu.appendChild(drinksHeading);
    menuPge.appendChild(drinksMenu);

    contentDiv.appendChild(menuPge);

    console.log('menupage is here?!');
}