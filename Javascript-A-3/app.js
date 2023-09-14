// // Chapter : ARRAYS
// // Q1
let sudentNames = [];
// // Q2
let studentNames = [];


// // Q3
let fruits = ["apple", "banana", "cherry", "date"];
// // Q4
let numbers = [1, 2, 3, 4, 5];
// // Q5
let booleanArray = [true, false, true, true, false];
// // Q6
let mixedArray = ["apple", 42, true, "banana", false, 3.14];
// // Q7
let qualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD"
  ];
  
  // Access the HTML element where you want to display the qualifications.
  let qualificationsList = document.getElementById("qualificationsList");
  
  // Create an unordered list to display the qualifications.
  let ul = document.createElement("ul");
  
  // Iterate through the qualifications array and create list items for each qualification.
  for (let i = 0; i < qualifications.length; i++) {
    let li = document.createElement("li");
    li.textContent = qualifications[i];
    ul.appendChild(li);
  }
  
//   Append the unordered list to the HTML element.
//   qualificationsList.appendChild(ul);
//   Q8
// Array to store student names
let studentnames = ["John", "Alice", "Bob"];

// Array to store scores of the three students
let studentScores = [420, 380, 450];

// Calculate total marks (assuming it's 500 for each student)
let totalMarks = 500;

// Calculate percentages and store them in a new array
let percentages = [];

for (let i = 0; i < studentScores.length; i++) {
  let percentage = (studentScores[i] / totalMarks) * 100;
  percentages.push(percentage.toFixed(2) + "%"); // Round to 2 decimal places and add a "%" symbol
}

// Display the scores and percentages
for (let i = 0; i < studentNames.length; i++) {
  console.log(
    studentNames[i] + "'s score is " + studentScores[i] + " out of " + totalMarks + ", and the percentage is " + percentages[i]
  );
}

// Q9
// Initialize an array with color names
let colors = ["red", "blue", "green"];

// Display the array elements in the browser
console.log("Colors array:", colors);

// Ask the user what color to add to the beginning
let colorToAddAtStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtStart);

// Display the updated array
console.log("Updated colors array (added to the beginning):", colors);

// Ask the user what color to add to the end
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);

// Display the updated array
console.log("Updated colors array (added to the end):", colors);

// Add two more colors to the beginning
colors.unshift("purple", "orange");

// Display the updated array
console.log("Updated colors array (added two more to the beginning):", colors);

// Delete the first color in the array
colors.shift();

// Display the updated array
console.log("Updated colors array (deleted the first color):", colors);

// Delete the last color in the array
colors.pop();

// Display the updated array
console.log("Updated colors array (deleted the last color):", colors);

// Ask the user at which index to add a color and the color name
let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
let colorToAddAtIndex = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);

// Display the updated array
console.log("Updated colors array (added at a specific index):", colors);

// Ask the user at which index to delete colors and how many to delete
let indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array
console.log("Updated colors array (deleted from a specific index):", colors);
// Q10
// Array to store student scores
let studentscores = [320, 230, 480, 120];

// Sort the array in ascending order
studentScores.sort(function(a, b) {
  return a - b;
});

// Display the sorted array
console.log("Sorted student scores (ascending order):", studentScores);
// Q11
// Initialize an array with city names
let cities = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Create a new array 'selectedCities' and copy 3 elements into it
let selectedCities = cities.slice(0, 3);

// Display the 'selectedCities' array


SelectedCities: [ 'Islamabad', 'Quetta',]
// Q12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

console.log(singleString);
// Q13
// Create an empty array to represent the FIFO queue
let fifoQueue = [];

// Add values to the end of the queue (enqueue)
fifoQueue.push("Value 1");
fifoQueue.push("Value 2");
fifoQueue.push("Value 3");

// Access and remove values from the front of the queue (dequeue)
let firstValue = fifoQueue.shift();
let secondValue = fifoQueue.shift();
let thirdValue = fifoQueue.shift();

console.log("First Value:", firstValue);
console.log("Second Value:", secondValue);
console.log("Third Value:", thirdValue);
// Q14
// Create an empty array to represent the LIFO stack
let lifoStack = [];

// Add values to the end of the stack (push)
lifoStack.push("Value 1");
lifoStack.push("Value 2");
lifoStack.push("Value 3");

// Access and remove values from the end of the stack (pop)
let lastValue = lifoStack.pop();
let secondLastValue = lifoStack.pop();
let thirdLastValue = lifoStack.pop();

console.log("Last Value:", lastValue);
console.log("Second Last Value:", secondLastValue);
console.log("Third Last Value:", thirdLastValue);
// Q15
// Array containing phone manufacturers
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Create the HTML for the dropdown/select menu
let dropdownHTML = '<select id="manufacturerSelect">';

for (let i = 0; i < manufacturers.length; i++) {
  dropdownHTML += `<option value="${i}">${manufacturers[i]}</option>`;
}

dropdownHTML += '</select>';

// Use document.write() to display the dropdown/select menu
document.write(dropdownHTML);

// THE END















