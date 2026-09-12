const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18

const day1TempC = (day1TempF - 32) * (5 / 9);
const day2TempF = (day2TempC * 9 / 5) + 32;
const day3TempC = (day3TempF - 32) * (5 / 9);
const day4TempF = (day4TempC * 9 / 5) + 32;

const tot_temperature_in_fahrenheit = day1TempF + day2TempF + day3TempF + day4TempF;
const tot_temperature_in_celsius = day1TempC + day2TempC + day3TempC + day4TempC;

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 4;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 4;

console.log('Average temperature in Fahrenheit:', avg_temperature_in_fahrenheit);
console.log('Average temperature in Celsius:', avg_temperature_in_celsius);