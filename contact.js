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
    const timeInput1 = document.createElement('select');
    timeInput1.setAttribute('id', 'timechoice');
    timeInput1.setAttribute('name', 'timechoice');
    timeInput1.required = true;
    const timeoption1 = document.createElement('option');
    timeoption1.innerText = '12';
    timeoption1.setAttribute('value', '12');
    const timeoption2 = document.createElement('option');
    timeoption2.innerText = '13';
    timeoption2.setAttribute('value', '13');
    const timeoption3 = document.createElement('option');
    timeoption3.innerText = '14';
    timeoption3.setAttribute('value', '14');
    const timeoption4 = document.createElement('option');
    timeoption4.innerText = '15';
    timeoption4.setAttribute('value', '15');
    const timeoption5 = document.createElement('option');
    timeoption5.innerText = '16';
    timeoption5.setAttribute('value', '16');
    const timeoption6 = document.createElement('option');
    timeoption6.innerText = '17';
    timeoption6.setAttribute('value', '17');
    const timeoption7 = document.createElement('option');
    timeoption7.innerText = '18';
    timeoption7.setAttribute('value', '18');
    const timeoption8 = document.createElement('option');
    timeoption8.innerText = '19';
    timeoption8.setAttribute('value', '19');
    const timeoption9 = document.createElement('option');
    timeoption9.innerText = '20';
    timeoption9.setAttribute('value', '20');
    const timeoption10 = document.createElement('option');
    timeoption10.innerText = '21';
    timeoption10.setAttribute('value', '21');
    
    timeInput1.appendChild(timeoption1);
    timeInput1.appendChild(timeoption2);
    timeInput1.appendChild(timeoption3);
    timeInput1.appendChild(timeoption4);
    timeInput1.appendChild(timeoption5);
    timeInput1.appendChild(timeoption6);
    timeInput1.appendChild(timeoption7);
    timeInput1.appendChild(timeoption8);
    timeInput1.appendChild(timeoption9);
    timeInput1.appendChild(timeoption10);

    const timeDev = document.createElement('p');
    timeDev.classList.add('timeform');
    timeDev.innerText = ':';

    const timeInput2 = document.createElement('select');
    timeInput2.setAttribute('name', 'timechoice');
    timeInput2.required = true;
    const timeoption11 = document.createElement('option');
    timeoption11.innerText = '00';
    timeoption11.setAttribute('value', '00');
    const timeoption12 = document.createElement('option');
    timeoption12.innerText = '15';
    timeoption12.setAttribute('value', '15');
    const timeoption13 = document.createElement('option');
    timeoption13.innerText = '30';
    timeoption13.setAttribute('value', '30');
    const timeoption14 = document.createElement('option');
    timeoption14.innerText = '45';
    timeoption14.setAttribute('value', '45');

    timeInput2.appendChild(timeoption11);
    timeInput2.appendChild(timeoption12);
    timeInput2.appendChild(timeoption13);
    timeInput2.appendChild(timeoption14);

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
    timeTd2.appendChild(timeInput1);
    timeTd2.appendChild(timeDev);
    timeTd2.appendChild(timeInput2);
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


