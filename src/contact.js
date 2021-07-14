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

    const lineBr = document.createElement('br');

    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'choose date: ';
    const dateSelector = document.createElement('input');
    dateSelector.setAttribute('type', 'date');
    dateSelector.setAttribute('min', `${today}`);
    dateSelector.required = true;

    const timeLabel = document.createElement('label');
    timeLabel.innerText = 'choose Time: ';
    timeLabel.setAttribute('for', 'timechoice');
    const timeInput = document.createElement('select');
    timeInput.setAttribute('id', 'timechoice');
    timeInput.setAttribute('name', 'timechoice');
    timeInput.required = true;
    const timeoption1 = document.createElement('option');
    timeoption1.innerText = '20:00';
    timeoption1.setAttribute('value', '20:00');
    const timeoption2 = document.createElement('option');
    timeoption2.innerText = '20:30';
    timeoption2.setAttribute('value', '20:30');
    const timeoption3 = document.createElement('option');
    timeoption3.innerText = '21:00';
    timeoption3.setAttribute('value', '21:00');
    const timeoption4 = document.createElement('option');
    timeoption4.innerText = '21:30';
    timeoption4.setAttribute('value', '21:30');

    timeInput.appendChild(timeoption1);
    timeInput.appendChild(timeoption2);
    timeInput.appendChild(timeoption3);
    timeInput.appendChild(timeoption4);

    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'email-adress: ';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.required = true;

    const telLabel = document.createElement('label');
    telLabel.innerText = 'phone number: ';
    const telInput = document.createElement('input');
    telInput.setAttribute('type', 'tel');
    telInput.setAttribute('pattern', '[0-9]{10}');
    telInput.required = true;

    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.innerText = 'Submit';

    contactForm.appendChild(dateLabel);
    contactForm.appendChild(dateSelector);
    contactForm.appendChild(lineBr);
    contactForm.appendChild(timeLabel);
    contactForm.appendChild(timeInput);
    contactForm.appendChild(lineBr.cloneNode());
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(lineBr.cloneNode());
    contactForm.appendChild(telLabel);
    contactForm.appendChild(telInput);
    contactForm.appendChild(lineBr.cloneNode());
    contactForm.appendChild(submitInput);
    contactForm.appendChild(lineBr.cloneNode());
    contactPge.appendChild(contactForm);

    contentDiv.appendChild(contactPge);

    console.log('contactpage is here?!');
    console.log(today);
}


