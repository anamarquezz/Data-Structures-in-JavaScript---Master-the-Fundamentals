const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday']
const weekly_weather = [70, 72, 68, 65, 74, 74, 73]

//user for loop to iterate through every value in an array
for (let i = 0; i < weekdays.length; i++){
    let weekday = weekdays[i];
    let temp = weekly_weather[i]
    console.log('The temperature on', weekday ,' wass:', temp)
}

//FIND THE AVERAGE TEMPERATURE
    //Total_temp exists outside the for loop because it needs to have
    // a value that persists and does not change while the loop loops
console.log("\n**** FIND THE AVERAGE TEMPERATURE****")
let total_temp = 0
//we use a for loop to visit every value and add it to the total
for (let i = 0; i < weekdays.length; i++){
    let temp = weekly_weather[i]
    total_temp += temp;
}
//finally we can divide the total temp by the number of days to cacl the average
let average = total_temp / weekly_weather.length
console.log('The average temperature for this week was:', average)


//GET THE SMALLEST TEMPERATURE
console.log("\n**** GET THE SMALLEST TEMPERATURE ****")
let smallest = weekly_weather[0];
for (let i = 0; i < weekly_weather.length ; i++){
    let temp = weekly_weather[i];
    if (temp < smallest) {
        smallest = temp;
    }
}
console.log("The lowest temp was:", smallest)


//GET THE LARGEST TEMPERATURE
console.log("\n**** GET THE LARGEST TEMPERATURE ****")
const winter_weather = [-12, -14, -14, -16, -16, -20, 6]
let largest = winter_weather[0];
for( let i = 0; i < winter_weather.length; i++){
    let temp = winter_weather[i];
    if (temp > largest){
        largest = temp;
    }
    if (temp < smallest) {
        smallest = temp;
    }
}
console.log("The smallest temp was:", smallest)
console.log("The largest temp was:", largest)