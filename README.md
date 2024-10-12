
# Random Spanish Names

**Random Spanish Names** is a package that generates random Spanish names, including first names, last names, emails, phone numbers, and identification numbers (DNI/NIE). It is perfect for testing, mock data generation, or any application that needs placeholder personal information with realistic details.

## Features

- Generate random Spanish names (first and last names).
- Create full names with customizable gender (male, female, or random).
- Generate unique emails with realistic name-based structure.
- Produce phone numbers formatted with the Spanish country code (+34).
- Generate valid Spanish DNI and NIE numbers.
- Flexibility to pass custom arrays for names and surnames.


## Installation

You can install this package using npm:



```bash
npm install random-spanish-names
```

## Usage

Here is an example of how to use the package:


```javascript
import { generateRandomName } from "random-spanish-names";

// Generate a random name with gender as "random"
const randomPerson = generateRandomName();
console.log(randomPerson);

// Generate a male name
const malePerson = generateRandomName('male');
console.log(malePerson);

// Generate a female name
const femalePerson = generateRandomName('female');
console.log(femalePerson);
```

The generated object includes:

- **firstName**: Random first name / Nombre aleatorio.
- **secondName**: First surname / Primer apellido.
- **thirdName**: Second surname / Segundo apellido.
- **email**: Random email / Correo electrónico aleatorio.
- **phoneNumber**: Spanish phone number / Número de teléfono español.
- **dni**: Random DNI / DNI aleatorio.
- **nie**: Random NIE / NIE aleatorio.

### Customizing Names

You can pass custom arrays of names and surnames if you prefer:

```javascript
const customMaleNames = ['Juan', 'Pedro', 'Carlos'];
const customSurnames = ['González', 'Pérez', 'Martínez'];

const customPerson = generateRandomName('male', customMaleNames, [], customSurnames);
console.log(customPerson);
```

## License / Licencia

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for more details.
