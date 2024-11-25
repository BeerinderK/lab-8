// feedback.js
// Array that stores all of the user ratings
const ratings = [];

// Function that adds a rating
export const addRating = (rating) => {
    if (rating < 1 || rating > 5) {
        console.log("Your rating must be between 1 and 5 please :)");
        return;
    }
    ratings.push(rating);
    console.log(`Your rating of ${rating} star(s) confirmed`);
};

// Function that calculates the average rating
export const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return total / ratings.length;
};

// Function that display all the ratings
export const displayRatings = () => {
    console.log("User Ratings: ");
    ratings.forEach((rating, index) => {
        console.log(`Rating ${index + 1}: ${rating}`);
    });
    const avgRating = calculateAverageRating();
    console.log(`Average Rating: ${avgRating.toFixed(2)}`);
};
