// expected output
//How many pounds of newspaper do you hope to bring in?
//> 100
//How many days do you have to bring in newspaper?
//> 6
//You will need to bring in 16.666666666666668 papers each day in order to reach your goal of 100 in 6 days

console.log("Type a number, then press enter. ");
console.log(" ");

let lbs = prompt("How many pounds of newspaper do you hope to bring in?");
lbs = parseInt(lbs);

console.log(" ");

let days = prompt("How many days do you have to bring in newspaper?");
days = parseInt(days);

console.log(" ");

let amount = lbs / days;
console.log("You will need to bring in " + amount + " papers each day in order to reach     your goal of " + lbs + " pounds of paper in " + days + " days.")