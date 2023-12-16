/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n)
{
    // Create a new Date object with the current date and time
    const currentDate = new Date();

    // Display the current date and time
    console.log(currentDate);

    // Format the date and time as a string
    const formattedDateTime = currentDate.toLocaleString();

    // Display the formatted date and time
    console.log(formattedDateTime);
}