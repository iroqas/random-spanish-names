
# Random Spanish Names

**Version: 1.0.3**

## Description

Random Spanish Names is a generator that creates random Spanish names, including first names, last names, emails, phone numbers, and identification numbers (DNI/NIE). 

This package is ideal for:
- Testing
- Mock data generation
- Applications that require placeholder personal information.

The generator produces:
- Full names with realistic details.
- Unique emails with alphanumeric identifiers.
- Phone numbers formatted with the Spanish prefix (+34).
- Valid DNI and NIE numbers.

## Installation

Install the package via npm:

```bash
npm install random-spanish-names
```

## Usage

### ES6 Modules

Import the package into your project using `import`:

```javascript
import { generateRandomName } from 'random-spanish-names';

const name = generateRandomName();
console.log(name);
```

### CommonJS

If you are using **CommonJS**, use `require`:

```javascript
const { generateRandomName } = require('random-spanish-names');

const name = generateRandomName();
console.log(name);
```

## Functions

### `generateRandomName(gender = "random")`

Generates a full random name (first name, two last names, email, phone number, DNI, and NIE).

Parameters:
- `gender` (optional): Can be `"male"`, `"female"`, or `"random"` to select a gender randomly.

Returns an object with:
- `firstName`: First name.
- `secondName`: First last name.
- `thirdName`: Second last name.
- `email`: Email generated based on the full name.
- `phoneNumber`: Phone number with the Spanish prefix (+34).
- `dni`: Valid Spanish DNI.
- `nie`: Valid Spanish NIE.

### `generateRandomDNI()`

Generates a valid Spanish DNI number.

### `generateRandomNIE()`

Generates a valid Spanish NIE number.

## Data

Names are sourced from the lists of male names, female names, and surnames stored in the file `./data/spanish-names.js`.

## Exports

The package is compatible with both **CommonJS** and **ES6 Modules**, thanks to the configuration of the `"exports"` field in `package.json`.

## License

This project is licensed under the ISC License.
