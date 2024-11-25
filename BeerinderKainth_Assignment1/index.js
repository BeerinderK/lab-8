// User Feedback System


// I created a simple rating system that calculates the avergae of all ratings.
// Three fucntions, first to collect ratings, second to calculate the avergae, 
// and third the display the data. I have imported the functions from the feedback
// file using the import/export function. 
// This can be useful for online storefronts where products and services are provided
// and the user needs to make an informed purchase.


// Import the functions from feedback.js
import { addRating, displayRatings } from './feedback.js';

// Simulate user feedback
const simulateRatings = () => {
    const inputRatings = [2, 4, 5, 1, 1]; // Simulated user input

    inputRatings.forEach(rating => {
        addRating(rating);  // Add each rating
    });

    // Display the final ratings
    displayRatings();
};

// Run the simulation 
simulateRatings();
