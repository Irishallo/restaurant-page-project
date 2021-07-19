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

    const prefood1 = document.createElement('p');
    prefood1.innerText = 'Carrot Soup';
    const prefood2 = document.createElement('p');
    prefood2.innerText = 'Summer Rolls';
    const prefood3 = document.createElement('p');
    prefood3.innerText = 'Homemade Bread with Aioli';

    const mainHeading = document.createElement('h3');
    mainHeading.innerText = 'Main Course';
    const mainfood1 = document.createElement('p');
    mainfood1.innerText = 'Lasagne with Spinach';
    const mainfood2 = document.createElement('p');
    mainfood2.innerText = 'Pizza with Pesto, Paprika, and Mushrooms';
    const mainfood3 = document.createElement('p');
    mainfood3.innerText = 'Vegetarian Wellington';

    const dessertHeading = document.createElement('h3');
    dessertHeading.innerText = 'Cakes and desserts';
    const dessertfood1 = document.createElement('p');
    dessertfood1.innerText = 'Chocolat Cake';
    const dessertfood2 = document.createElement('p');
    dessertfood2.innerText = 'Raspberry and Mango Ice Cream';
    const dessertfood3 = document.createElement('p');
    dessertfood3.innerText = 'Apple Pie';

    const drinksHeading = document.createElement('h3');
    drinksHeading.innerText = 'Drinks';
    const drinksfood1 = document.createElement('p');
    drinksfood1.innerText = 'Coffee';
    const drinksfood2 = document.createElement('p');
    drinksfood2.innerText = 'Lemonade';
    const drinksfood3 = document.createElement('p');
    drinksfood3.innerText = 'Smoothie';
    

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
    preMenu.appendChild(prefood1);
    preMenu.appendChild(prefood2);
    preMenu.appendChild(prefood3);
    menuPge.appendChild(preMenu);
    mainMenu.appendChild(mainHeading);
    mainMenu.appendChild(mainfood1);
    mainMenu.appendChild(mainfood2);
    mainMenu.appendChild(mainfood3);
    menuPge.appendChild(mainMenu);
    dessertMenu.appendChild(dessertHeading);
    dessertMenu.appendChild(dessertfood1);
    dessertMenu.appendChild(dessertfood2);
    dessertMenu.appendChild(dessertfood3);
    menuPge.appendChild(dessertMenu);
    drinksMenu.appendChild(drinksHeading);
    drinksMenu.appendChild(drinksfood1);
    drinksMenu.appendChild(drinksfood2);
    drinksMenu.appendChild(drinksfood3);
    menuPge.appendChild(drinksMenu);

    contentDiv.appendChild(menuPge);

    console.log('menupage is here?!');
}