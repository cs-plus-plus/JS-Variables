// ============================================
//  Unit 8.1 – Variables & Math
// ============================================
//  Complete each function below by following
//  the STEP comments. Do NOT rename the functions.
// ============================================


// --- WARM-UP: greeting() ---
// This function asks for the user's name and favorite color,
// then displays a personalized message.

function greeting() {
  // STEP 1: Use prompt() to ask "What is your name?"
  //         Store the result in a variable using let.

  // STEP 2: Use prompt() to ask "What is your favorite color?"
  //         Store the result in a variable using let.

  // STEP 3: Use alert() to display a message.
  //         The message should be exactly:
  //         "Hello, [name]! Your favorite color is [color]."
  //         Use string concatenation (+) to build the message.
  //         Example: if name is "Alice" and color is "blue",
  //         the alert should say:
  //         "Hello, Alice! Your favorite color is blue."

}


// --- convertTemp() ---
// This function converts a temperature from Fahrenheit to Celsius.

function convertTemp() {
  // STEP 1: Use prompt() to ask "Enter temperature in Fahrenheit"
  //         Store the result in a variable using let.

  // STEP 2: Use parseFloat() to convert the string to a number.
  //         prompt() always returns a string, so "212" needs
  //         to become the number 212 before you can do math.

  // STEP 3: Calculate Celsius using the formula:
  //         celsius = (fahrenheit - 32) * 5 / 9
  //         Store the result in a variable using let.

  // STEP 4: Use alert() to display the result.
  //         The alert must say exactly:
  //         "Temperature in Celsius: " followed by the number
  //         rounded to 2 decimal places using .toFixed(2)
  //         Example: 212°F → "Temperature in Celsius: 100.00"

}


// --- circleArea() ---
// This function calculates the area of a circle given its radius.

function circleArea() {
  // STEP 1: Use prompt() to ask "Enter circle radius"
  //         Store the result in a variable using let.

  // STEP 2: Use parseFloat() to convert the string to a number.

  // STEP 3: Calculate the area using the formula:
  //         area = Math.PI * radius * radius
  //         Math.PI is a built-in constant that equals 3.14159...
  //         Use const to declare Math.PI if you store it separately.

  // STEP 4: Use alert() to display the result.
  //         The alert must say exactly:
  //         "Area of the circle: " followed by the number
  //         rounded to 2 decimal places using .toFixed(2)
  //         Example: radius 5 → "Area of the circle: 78.54"

}
