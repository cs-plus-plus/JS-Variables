# CS++ JavaScript — Lesson 8.1-8.2: Variables and Methods

> **Lesson 8.1-8.2** | 100 Points | 2 Autograded Tests

In this assignment you will write two JavaScript functions that use `prompt()` for input and `alert()` for output. You will practice declaring variables, performing arithmetic, and formatting numbers.

---

## Table of Contents

1. [Concepts You Need](#concepts-you-need)
2. [Project Overview](#project-overview)
3. [What to Build](#what-to-build)
4. [Exact Requirements](#exact-requirements)
5. [File Structure](#file-structure)
6. [Autograding](#autograding)
7. [Try It Yourself — Practice Examples](#try-it-yourself--practice-examples)
8. [Tips for Success](#tips-for-success)
9. [FAQ](#faq)

---

## Concepts You Need

### Variables: `let` vs `const`

Use `let` for values that will change. Use `const` for values that stay the same.

```javascript
let score = 0;        // can be updated later
score = score + 10;   // now score is 10

const TAX_RATE = 0.08; // cannot be changed
```

> Avoid `var` — it is older JavaScript with unexpected scoping behavior. Always use `let` or `const`.

### Arithmetic Operators

| Operator | Meaning        | Example    | Result |
|----------|----------------|------------|--------|
| `+`      | Addition       | `5 + 3`    | `8`    |
| `-`      | Subtraction    | `9 - 2`    | `7`    |
| `*`      | Multiplication | `4 * 2`    | `8`    |
| `/`      | Division       | `9 / 3`    | `3`    |
| `**`     | Exponent       | `2 ** 3`   | `8`    |
| `%`      | Remainder      | `10 % 3`  | `1`    |

### prompt() and alert()

`prompt()` shows a dialog box and returns whatever the user types as a **string**. `alert()` shows a message to the user.

```javascript
let name = prompt("What is your name?");  // returns a string
alert("Hello, " + name + "!");            // shows a popup
```

> `prompt()` always returns a string, even if the user types a number. You must convert it with `parseFloat()` before doing math.

### Converting Strings to Numbers

```javascript
let input = prompt("Enter a number:");  // input is a string like "42"
let num = parseFloat(input);            // num is the number 42
```

### Formatting Decimals with .toFixed()

`.toFixed(n)` rounds a number to `n` decimal places and returns a **string**:

```javascript
let pi = 3.14159;
let formatted = pi.toFixed(2);  // "3.14"
```

### Math.PI

JavaScript provides the constant `Math.PI` for the value of pi (3.14159...).

```javascript
let area = Math.PI * radius * radius;
```

---

## Project Overview

You will build a simple page with two buttons. Each button calls a function in `script.js`:

1. **convertTemp()** — Converts a temperature from Fahrenheit to Celsius
2. **circleArea()** — Calculates the area of a circle given its radius

Both functions use `prompt()` to get input and `alert()` to show the result.

---

## What to Build

### convertTemp()

1. Show a prompt that says exactly: `Enter temperature in Fahrenheit`
2. Convert the input to Celsius using the formula: `(fahrenheit - 32) * 5 / 9`
3. Show an alert with the result formatted to 2 decimal places

### circleArea()

1. Show a prompt that says exactly: `Enter circle radius`
2. Calculate the area using the formula: `Math.PI * radius * radius`
3. Show an alert with the result formatted to 2 decimal places

---

## Exact Requirements

The autograder checks for **exact string matches**. Capitalization, spacing, and punctuation all matter.

| Function | Prompt Text (exact) | Alert Text (exact) |
|----------|--------------------|--------------------|
| `convertTemp()` | `Enter temperature in Fahrenheit` | `Temperature in Celsius: <value>` |
| `circleArea()` | `Enter circle radius` | `Area of the circle: <value>` |

Where `<value>` is the calculated result formatted to exactly 2 decimal places using `.toFixed(2)`.

### Examples

**convertTemp() with input 212:**
```
Prompt: Enter temperature in Fahrenheit
User enters: 212
Alert: Temperature in Celsius: 100.00
```

**circleArea() with input 5:**
```
Prompt: Enter circle radius
User enters: 5
Alert: Area of the circle: 78.54
```

---

## File Structure

```
JS-Variables-and-Methods/
├── index.html              <-- HTML with two buttons (provided)
├── script.js               <-- YOUR CODE GOES HERE
└── .github/
    └── workflows/
        └── classroom.yml   <-- Autograding tests (DO NOT MODIFY)
```

**Edit only `script.js`.** The `index.html` file is provided with two buttons that call your functions.

---

## Autograding

When you push your code, GitHub Actions runs two tests:

| Test | Input | Expected Alert | Points |
|------|-------|---------------|--------|
| convertTemp() | `212` | `Temperature in Celsius: 100.00` | 50 |
| circleArea() | `5` | `Area of the circle: 78.54` | 50 |

**Total: 100 points**

The tests work by mocking `prompt()` to return a specific value, then checking that `alert()` was called with the exact expected string.

---

## Try It Yourself — Practice Examples

Create a file called `practice.js` in your Codespace to experiment without affecting your grade. Run it with `node practice.js` in the terminal.

**Example 1 — Temperature conversion:**
```javascript
// practice.js — try different temperatures
let fahrenheit = 32;
let celsius = (fahrenheit - 32) * 5 / 9;
console.log("Temperature in Celsius: " + celsius.toFixed(2));
// Output: Temperature in Celsius: 0.00

fahrenheit = 98.6;
celsius = (fahrenheit - 32) * 5 / 9;
console.log("Temperature in Celsius: " + celsius.toFixed(2));
// Output: Temperature in Celsius: 37.00
```

**Example 2 — Circle area with different radii:**
```javascript
// practice.js — try different radii
let radius = 1;
let area = Math.PI * radius * radius;
console.log("Area of the circle: " + area.toFixed(2));
// Output: Area of the circle: 3.14

radius = 10;
area = Math.PI * radius * radius;
console.log("Area of the circle: " + area.toFixed(2));
// Output: Area of the circle: 314.16
```

**Example 3 — Understanding parseFloat:**
```javascript
// practice.js — why parseFloat matters
let input = "42";
console.log(input + 10);          // "4210" (string concatenation!)
console.log(parseFloat(input) + 10); // 52 (correct math)
```

---

## Tips for Success

1. Use `parseFloat()` to convert the prompt input to a number before doing math
2. Use `.toFixed(2)` to format your result to exactly 2 decimal places
3. Match the prompt and alert text exactly — even one wrong character will fail the test
4. Do not use `console.log()` for output — this assignment only uses `prompt()` and `alert()`
5. Test your code by opening `index.html` in the browser and clicking each button

---

## FAQ

**Q: My alert shows "NaN" — what does that mean?**
`NaN` stands for "Not a Number." You are probably doing math on a string. Use `parseFloat()` to convert the prompt input to a number first.

**Q: My alert shows the wrong number of decimals.**
Make sure you are using `.toFixed(2)` on your result before putting it in the alert string.

**Q: The test fails but my output looks correct.**
Check for exact spacing and capitalization. `"Temperature in Celsius: 100.00"` is not the same as `"temperature in celsius: 100.00"` or `"Temperature in Celsius:100.00"` (missing space after colon).

**Q: Can I add extra features to my page?**
Yes, but make sure the two required functions still work exactly as specified. Add extra features in separate functions.

**Q: Do I need to handle invalid input (like letters)?**
No. The autograder will always provide valid numeric input. Focus on getting the math and formatting correct.

---

View all assignments and scoring breakdowns at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
