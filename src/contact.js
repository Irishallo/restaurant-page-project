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
    const timeInput = document.createElement('input');
    timeInput.setAttribute('type', 'time');
    timeInput.setAttribute('min', '12:00');
    timeInput.setAttribute('max', '21:00');
    timeInput.setAttribute('step', '900');
    timeInput.required = true;
    // const timeoption1 = document.createElement('option');
    // timeoption1.innerText = '12:00';
    // timeoption1.setAttribute('value', '12:00');
    // const timeoption2 = document.createElement('option');
    // timeoption2.innerText = '12:30';
    // timeoption2.setAttribute('value', '12:30');
    // const timeoption3 = document.createElement('option');
    // timeoption3.innerText = '13:00';
    // timeoption3.setAttribute('value', '13:00');
    // const timeoption4 = document.createElement('option');
    // timeoption4.innerText = '13:30';
    // timeoption4.setAttribute('value', '13:30');

    // timeInput.appendChild(timeoption1);
    // timeInput.appendChild(timeoption2);
    // timeInput.appendChild(timeoption3);
    // timeInput.appendChild(timeoption4);

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

    const messageLabel = document.createElement('label');
    messageLabel.innerText = 'additional information: ';
    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('rows', '5');
    messageInput.setAttribute('cols', '60');
    messageInput.setAttribute('style', 'resize: none;');

    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Submit');

    const formTable = document.createElement('table');
    const dateRow = document.createElement('tr');
    const timeRow = document.createElement('tr');
    const emailRow = document.createElement('tr');
    const telRow = document.createElement('tr');
    const messageRow = document.createElement('tr');
    const dateTd1 = document.createElement('td');
    const dateTd2 = document.createElement('td');
    const timeTd1 = document.createElement('td');
    const timeTd2 = document.createElement('td');
    const emailTd1 = document.createElement('td');
    const emailTd2 = document.createElement('td');
    const telTd1 = document.createElement('td');
    const telTd2 = document.createElement('td');
    const messageTd1 = document.createElement('td');

    dateTd1.appendChild(dateLabel);
    dateTd2.appendChild(dateSelector);
    dateRow.appendChild(dateTd1);
    dateRow.appendChild(dateTd2);
    timeTd1.appendChild(timeLabel);
    timeTd2.appendChild(timeInput);
    timeRow.appendChild(timeTd1);
    timeRow.appendChild(timeTd2);
    emailTd1.appendChild(emailLabel);
    emailTd2.appendChild(emailInput);
    emailRow.appendChild(emailTd1);
    emailRow.appendChild(emailTd2);
    telTd1.appendChild(telLabel);
    telTd2.appendChild(telInput);
    telRow.appendChild(telTd1);
    telRow.appendChild(telTd2);
    messageTd1.appendChild(messageLabel);
    messageRow.appendChild(messageTd1);

    contactForm.appendChild(dateRow);
    contactForm.appendChild(timeRow);
    contactForm.appendChild(emailRow);
    contactForm.appendChild(telRow);
    contactForm.appendChild(messageRow);
    contactForm.appendChild(messageInput);
    contactForm.appendChild(lineBr);
    contactForm.appendChild(submitInput);
    contactPge.appendChild(contactForm);

    contentDiv.appendChild(contactPge);

    console.log('contactpage is here?!');
    console.log(today);
}


