# CS++ JavaScript — Variables & Math

> **Unit 8.1** | 100 Points | 10 Automated Tests

This is your first JavaScript assignment. You will learn how to create variables, do math, get input from the user, and display output — all using `prompt()` and `alert()`.

---

## Table of Contents

1. [Variables: let vs const](#variables-let-vs-const)
2. [Math Operators](#math-operators)
3. [Order of Operations](#order-of-operations)
4. [String Concatenation](#string-concatenation)
5. [prompt() and alert()](#prompt-and-alert)
6. [Converting Strings to Numbers](#converting-strings-to-numbers)
7. [Formatting Decimals with .toFixed()](#formatting-decimals-with-tofixed)
8. [Assignment](#assignment)
9. [Scoring Rubric](#scoring-rubric)
10. [Tips for Success](#tips-for-success)
11. [FAQ](#faq)

---

## Variables: let vs const

A **variable** is a named container that stores a value. In JavaScript, you declare variables with `let`:

```javascript
let score = 95;
let playerName = "Alice";
```

Use `const` for values that **never change**:

```javascript
const TAX_RATE = 0.08;
const MAX_LIVES = 3;
```

You cannot reassign a `const`:

```javascript
const x = 10;
x = 20;  // ERROR — cannot reassign a constant
```

### Why not var?

Older JavaScript code uses `var` instead of `let`. We avoid `var` in this course because it has confusing scoping rules. Always use `let` for variables and `const` for constants. **The autograder checks that you do not use `var`.**

---

## Math Operators

JavaScript supports these math operators:

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `6 * 7` | `42` |
| `/` | Division | `15 / 4` | `3.75` |
| `%` | Modulus (remainder) | `10 % 3` | `1` |
| `**` | Exponent (power) | `2 ** 3` | `8` |

Division in JavaScript always gives you a decimal result, unlike some other languages:

```javascript
let result = 15 / 4;  // 3.75, not 3
```

---

## Order of Operations

JavaScript follows **PEMDAS** (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction):

```javascript
let result = 2 + 3 * 4;      // 14, not 20
let result2 = (2 + 3) * 4;   // 20 — parentheses first
```

When in doubt, use parentheses to make your intent clear.

---

## String Concatenation

The `+` operator also joins (concatenates) strings:

```javascript
let first = "Hello";
let second = "World";
let message = first + " " + second;  // "Hello World"
```

When you mix a string with a number, JavaScript converts the number to a string:

```javascript
let age = 16;
let message = "I am " + age + " years old";  // "I am 16 years old"
```

---

## prompt() and alert()

`prompt()` shows a popup asking the user to type something. It **always returns a string**:

```javascript
let name = prompt("What is your name?");
// If the user types "Alice", name is the string "Alice"
```

`alert()` shows a popup with a message:

```javascript
alert("Hello, World!");
```

---

## Converting Strings to Numbers

Since `prompt()` always returns a **string**, you must convert it to a number before doing math:

```javascript
let input = prompt("Enter a number");  // returns "42" (a string)
let num = parseFloat(input);           // converts to 42 (a number)
```

- `parseFloat("3.14")` → `3.14` (keeps decimals)
- `parseInt("42")` → `42` (whole numbers only)

**Without conversion**, the `+` operator concatenates instead of adding:

```javascript
let a = "5";
let b = "3";
let wrong = a + b;    // "53" — string concatenation!

let right = parseFloat(a) + parseFloat(b);  // 8 — math addition
```

---

## Formatting Decimals with .toFixed()

`.toFixed(n)` rounds a number to `n` decimal places and returns a **string**:

```javascript
let pi = 3.14159;
let rounded = pi.toFixed(2);  // "3.14"

let whole = 100;
let formatted = whole.toFixed(2);  // "100.00"
```

---

## Assignment

Complete the four functions in `script.js`. Each function is triggered by a button in `index.html`.

### Warm-Up: greeting() — 15 points

Write a function that:
1. Prompts for the user's name
2. Prompts for their favorite color
3. Alerts a message in this exact format: `Hello, [name]! Your favorite color is [color].`

For example, if the user enters "Alice" and "blue", the alert should say:
`Hello, Alice! Your favorite color is blue.`

### convertTemp() — 40 points

Write a function that:
1. Prompts for a temperature in Fahrenheit
2. Converts it to Celsius using the formula: `(F - 32) * 5 / 9`
3. Alerts the result in this exact format: `Temperature in Celsius: X.XX`

The result must be rounded to **2 decimal places** using `.toFixed(2)`.

### circleArea() — 25 points

Write a function that:
1. Prompts for a circle's radius
2. Calculates the area using the formula: `Math.PI * r * r`
3. Alerts the result in this exact format: `Area of the circle: X.XX`

The result must be rounded to **2 decimal places** using `.toFixed(2)`.

### numberInfo() — 25 points

Write a function that:
1. Prompts for a whole number
2. Converts it using `parseInt()` (not `parseFloat` — we want a whole number)
3. Calculates the **square** using the `**` operator: `num ** 2`
4. Calculates the **remainder** when divided by 3 using the `%` operator: `num % 3`
5. Alerts the result in this exact format: `Square: [x], Remainder: [y]`

For example, if the user enters "7":
- Square: 7 ** 2 = 49
- Remainder: 7 % 3 = 1
- Alert: `Square: 49, Remainder: 1`

This function exercises the `**` (exponent), `%` (modulus), and `parseInt()` concepts from the textbook sections above.

### Code Quality — 15 points

The autograder also checks your code style:
- **Do not use `var`** — use `let` and `const` instead (5 points)
- **Use `const` at least once** — for any value that doesn't change (5 points)
- **Use `parseInt()`** — for converting the prompt string to a whole number (5 points)

---

## Scoring Rubric

| # | Test | Points | What the autograder checks |
|---|------|--------|---------------------------|
| 1 | greeting() output | 10 | Alerts contain the name and color entered |
| 2 | No `var` keyword | 5 | Script does not declare variables with `var` |
| 3 | Uses `const` | 5 | Script contains at least one `const` declaration |
| 4 | Uses `parseInt()` | 5 | Script contains `parseInt(` |
| 5 | convertTemp() — 212°F | 20 | Alerts exactly `Temperature in Celsius: 100.00` |
| 6 | convertTemp() — 32°F | 10 | Alerts exactly `Temperature in Celsius: 0.00` |
| 7 | circleArea() — r=5 | 10 | Alerts exactly `Area of the circle: 78.54` |
| 8 | circleArea() — r=1 | 10 | Alerts exactly `Area of the circle: 3.14` |
| 9 | numberInfo() — 7 | 15 | Alerts exactly `Square: 49, Remainder: 1` |
| 10 | numberInfo() — 5 | 10 | Alerts exactly `Square: 25, Remainder: 2` |
| | **Total** | **100** | |

---

## Tips for Success

1. **Start with greeting()** — it's the simplest function and will help you get comfortable with `prompt()` and `alert()`
2. **Watch your string formatting** — the autograder checks the exact text. Spelling, capitalization, and spacing matter
3. **Remember to convert** — `prompt()` returns a string. Use `parseFloat()` before doing math
4. **Use `.toFixed(2)`** — this formats your number to exactly 2 decimal places
5. **Use `let` and `const`** — never use `var`. Use `const` for anything that won't change (like `Math.PI`)
6. **Test in the browser** — open `index.html`, click the buttons, and check that your alerts match the expected format

---

## FAQ

**Q: What is `parseFloat()` and why do I need it?**
`prompt()` always returns a string. If the user types "212", you get the string `"212"`, not the number `212`. You need `parseFloat("212")` to get `212` so you can do math with it.

**Q: What does `.toFixed(2)` do?**
It rounds a number to 2 decimal places and returns a string. `(100).toFixed(2)` gives `"100.00"`.

**Q: Can I use `var` instead of `let`?**
No. The autograder checks that you do not use `var`. Use `let` for variables and `const` for constants.

**Q: Where should I use `const`?**
Use `const` for any value that does not change. For example, if you store `Math.PI` in a variable, that should be `const`.

**Q: My greeting works but the test fails. Why?**
Check your exact string format. The alert must say `Hello, [name]! Your favorite color is [color].` — with the period at the end, the comma after "Hello", and the exclamation mark.

---

View all assignments at [csplusplus.com/js-tests](https://csplusplus.com/js-tests)

*CS++ — AP Computer Science Principles — [csplusplus.com](https://csplusplus.com)*
