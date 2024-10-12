import { maleNames, femaleNames, surnames } from './data/spanish-names.js';

// Definir las funciones
function generateRandomName(
    gender = "random",
    maleNameArray = maleNames,
    femaleNameArray = femaleNames,
    surnamesArray = surnames
) {
    let firstNameCandidates;

    // Determinar la lista de nombres según el género
    if (gender === 'male') {
        firstNameCandidates = maleNameArray;
    } else if (gender === 'female') {
        firstNameCandidates = femaleNameArray;
    } else {
        firstNameCandidates = maleNameArray.concat(femaleNameArray);
    }

    const firstName = firstNameCandidates[Math.floor(Math.random() * firstNameCandidates.length)];
    const secondName = surnamesArray[Math.floor(Math.random() * surnamesArray.length)];
    const thirdName = surnamesArray[Math.floor(Math.random() * surnamesArray.length)];

    const email = generateRandomEmail({ firstName, secondName, thirdName });
    const phoneNumber = generateRandomPhoneNumber();
    const dni = generateRandomDNI();
    const nie = generateRandomNIE();

    return {
        firstName,
        secondName,
        thirdName,
        email,
        phoneNumber,
        dni,
        nie
    };
}

function generateRandomEmail(name) {
    const domains = ["example.com", "mail.com", "randommail.com"];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const randomChars = Math.random().toString(36).substring(2, 7);
    const email = `${name.firstName.toLowerCase()}.${name.secondName.toLowerCase()}.${randomChars}@${domain}`;
    return email;
}

function generateRandomPhoneNumber() {
    const phoneNumber = `+34${Math.floor(100000000 + Math.random() * 900000000)}`;
    return phoneNumber;
}

function generateRandomDNI() {
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const number = Math.floor(10000000 + Math.random() * 90000000);
    const letter = letters[number % 23];
    return `${number}${letter}`;
}

function generateRandomNIE() {
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const prefix = ['X', 'Y', 'Z'][Math.floor(Math.random() * 3)];
    const number = Math.floor(1000000 + Math.random() * 9000000);
    const letter = letters[number % 23];
    return `${prefix}${number}${letter}`;
}

export {
    generateRandomName,
    generateRandomDNI,
    generateRandomNIE
};