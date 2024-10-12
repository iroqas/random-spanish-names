
# Random Spanish Names

**Random Spanish Names** is a package that generates random Spanish names, including first names, last names, emails, phone numbers, and identification numbers (DNI/NIE). It is perfect for testing, mock data generation, or any application that needs placeholder personal information with realistic details.

**Random Spanish Names** es un paquete que genera nombres aleatorios en español, incluyendo nombres, apellidos, correos electrónicos, números de teléfono y números de identificación (DNI/NIE). Es ideal para pruebas, generación de datos ficticios o cualquier aplicación que necesite información personal de relleno con detalles realistas.

## Features / Características

- Generate random Spanish names (first and last names).
- Create full names with customizable gender (male, female, or random).
- Generate unique emails with realistic name-based structure.
- Produce phone numbers formatted with the Spanish country code (+34).
- Generate valid Spanish DNI and NIE numbers.
- Flexibility to pass custom arrays for names and surnames.

- Genera nombres aleatorios en español (nombres y apellidos).
- Crea nombres completos con género personalizable (masculino, femenino o aleatorio).
- Genera correos electrónicos únicos con estructura basada en nombres reales.
- Produce números de teléfono con el prefijo de España (+34).
- Genera números de DNI y NIE válidos en España.
- Flexibilidad para pasar arrays personalizados de nombres y apellidos.

## Installation / Instalación

You can install this package using npm:

Puedes instalar este paquete usando npm:

```bash
npm install random-spanish-names
```

## Usage / Uso

Here is an example of how to use the package:

Aquí tienes un ejemplo de cómo usar el paquete:

```javascript
const { generateRandomName } = require('random-spanish-names');

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

El objeto generado incluye:

- **firstName**: Random first name / Nombre aleatorio.
- **secondName**: First surname / Primer apellido.
- **thirdName**: Second surname / Segundo apellido.
- **email**: Random email / Correo electrónico aleatorio.
- **phoneNumber**: Spanish phone number / Número de teléfono español.
- **dni**: Random DNI / DNI aleatorio.
- **nie**: Random NIE / NIE aleatorio.

### Customizing Names / Personalización de Nombres

You can pass custom arrays of names and surnames if you prefer:

Puedes pasar arrays personalizados de nombres y apellidos si lo prefieres:

```javascript
const customMaleNames = ['Juan', 'Pedro', 'Carlos'];
const customSurnames = ['González', 'Pérez', 'Martínez'];

const customPerson = generateRandomName('male', customMaleNames, [], customSurnames);
console.log(customPerson);
```

## Testing / Pruebas

To run tests, use:

Para ejecutar pruebas, usa:

```bash
npm test
```

## License / Licencia

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for more details.

Este proyecto está bajo la Licencia ISC. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
