export function createContactpage () {
    const d = new Date();
    const today = new Date().toISOString().split("T")[0];

    const contentDiv = document.getElementById("content");

    const contactPge = document.createElement('div');
    contactPge.classList.add('tab3');
    contactPge.setAttribute('id', 'contactpage');

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = "Contact info!";

    contactPge.appendChild(contactHeading);

    const contactSpecial = document.createElement('div');
    contactSpecial.classList.add('openinghours');

    const openingTimes = document.createElement('h3');
    openingTimes.innerHTML = `Opening hours`;

    const openSpecial = document.createElement('div');
    openSpecial.setAttribute('style', 'text-align: end; width: max-content; margin: auto;');

    const openText1 = document.createElement('p');
    openText1.textContent = 'Monday: 16:00 - 23:00';

    const openText2 = document.createElement('p');
    openText2.textContent = 'Tuesday: 16:00 - 23:00';

    const openText3 = document.createElement('p');
    openText3.textContent = 'Wednesday: 16:00 - 23:00';

    const openText4 = document.createElement('p');
    openText4.textContent = 'Thurday: 16:00 - 23:00';

    const openText5 = document.createElement('p');
    openText5.textContent = 'Friday: 14:00 - 23:00';

    const openText6 = document.createElement('p');
    openText6.textContent = 'Saturday: 12:00 - 23:00';

    const openText7 = document.createElement('p');
    openText7.textContent = 'Sunday: 12:00 - 23:00';

    if(d.getDay() == 1) {
        openText1.style.fontWeight = "bold";
    } else if(d.getDay() == 2) {
        openText2.style.fontWeight = "bold";
    } else if(d.getDay() == 3) {
        openText3.style.fontWeight = "bold";
    } else if(d.getDay() == 4) {
        openText4.style.fontWeight = "bold";
    } else if(d.getDay() == 5) {
        openText5.style.fontWeight = "bold";
    } else if(d.getDay() == 6) {
        openText6.style.fontWeight = "bold";
    } else if(d.getDay() == 0) {
        openText7.style.fontWeight = "bold";
    } else { 
        console.log("cannot find day, contact");
    }

    contactPge.appendChild(contactHeading);
    contactSpecial.appendChild(openingTimes);
    openSpecial.appendChild(openText1);
    openSpecial.appendChild(openText2);
    openSpecial.appendChild(openText3);
    openSpecial.appendChild(openText4);
    openSpecial.appendChild(openText5);
    openSpecial.appendChild(openText6);
    openSpecial.appendChild(openText7);
    contactSpecial.appendChild(openSpecial);
    contactPge.appendChild(contactSpecial);

    const contactForm = document.createElement('form');

    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'choose date';
    const dateSelector = document.createElement('input');
    dateSelector.setAttribute('type', 'date');
    dateSelector.setAttribute('min', `${today}`);
    dateSelector.required = true;

    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'email-adress';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.required = true;

    contactForm.appendChild(dateLabel);
    contactForm.appendChild(dateSelector);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactPge.appendChild(contactForm);

    contentDiv.appendChild(contactPge);

    console.log('contactpage is here?!');
    console.log(today);
}


