// Prompt the user to enter a list of comma-separated froyo flavors upon entering the website
const userInput = prompt("Welcome to our froyo website! Enter a list of comma-separated froyo flavors :)");

// Split the input string into an array of flavors
const flavors = userInput.split(",");

// Function to count the occurrences of each flavor and return an object
function countFlavors(flavors) {
    const flavorCount = {};
    flavors.forEach(flavor => {
        // Trim and convert to lowercase for case-insensitive counting
        const trimmedFlavor = flavor.trim().toLowerCase();
        // Increment the count for the current flavor
        flavorCount[trimmedFlavor] = (flavorCount[trimmedFlavor] || 0) + 1;
    });
    return flavorCount;
}

// Get the flavor count using the countFlavors function
const flavorCount = countFlavors(flavors);

// Display the results in the console
console.table(flavorCount);