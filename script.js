let detailsForm = document.getElementById('details-form');
detailsForm.addEventListener('keyup', printFirstName);
detailsForm.addEventListener('keyup', printSecondName);
detailsForm.addEventListener('keyup', printLastName);
detailsForm.addEventListener('keyup', printDate);
detailsForm.addEventListener('change', printDate);
detailsForm.addEventListener('keyup', printLocation);

function printFirstName() {
    let firstNameInput = document.getElementById('first-name');
    let firstNameOutput = document.getElementById('first-name-output');
    firstNameOutput.innerHTML = firstNameInput.value
}

function printSecondName() {
    let secondNameInput = document.getElementById('second-name');
    let secondNameOutput = document.getElementById('second-name-output');
    secondNameOutput.innerHTML = ' & ' + secondNameInput.value
}

function printLastName() {
    let lastNameInput = document.getElementById('last-name');
    let lastNameOutput = document.getElementById('last-name-output');
    lastNameOutput.innerHTML = lastNameInput.value;
}

function printDate() {
    let dateInput = document.getElementById('date');
    let dateOutput = document.getElementById('date-output');
    dateOutput.innerHTML = dateInput.value;
}

function printLocation() {
    let locationInput = document.getElementById('wedding-location');
    let locationOutput = document.getElementById('wedding-location-output');
    locationOutput.innerHTML = locationInput.value;
}

function changeTemplate(newClassName) {
    let template = document.getElementById('template');
    template.className = newClassName
}









