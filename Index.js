const day1TempF = 32;
const day2TempC = 15;
const day3TempF = 48;
const day4TempC = 20;

const day1TempC = (day1TempF - 32) * 5 / 9;
const day2TempF = (day2TempC * 9 / 5) + 32;
const day3TempC = (day3TempF - 32) * 5 / 9;
const day4TempF = (day4TempC * 9 / 5) + 32;

const tot_temp_in_F = day1TempF + day2TempF + day3TempF + day4TempF
const tot_temp_in_C = day1TempC + day2TempC + day3TempC + day4TempC

console.log("The total temp in F =", tot_temp_in_F)
console.log("The total temp in C =", tot_temp_in_C)