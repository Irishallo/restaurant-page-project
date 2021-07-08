export function createContactpage () {
    const contentDiv = document.getElementById("content");

    const contactPge = document.createElement('div');
    contactPge.classList.add('tab3');
    contactPge.setAttribute('id', 'contactpage');

    const homeHeading = document.createElement('h2');
    homeHeading.textContent = "Contact info!";

    contactPge.appendChild(homeHeading);

    contentDiv.appendChild(contactPge);

    console.log('contactpage is here?!');
}


