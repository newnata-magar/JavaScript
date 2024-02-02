const calculateDays = (date1, date2) => Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

const absolute = x => Math.abs(x);

// Function composition using higher-order functions
const daysDifference = (date1, date2) => absolute(calculateDays(date1, date2));

const startDate = new Date(2080, 0, 30);
const endDate = new Date(2080, 1, 10);

const result = daysDifference(startDate, endDate);

console.log(`Number of days between ${startDate.toLocaleDateString()} and ${endDate.toLocaleDateString()}: ${result} days`);
