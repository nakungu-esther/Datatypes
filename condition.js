//if
//if else
// if else if else
//switch
//ternary operator

// if(condition){
// //functions
// }
let number = 5
if (number > 0) {
    console.log(`${number} Number is positive`)
}
let isShinning = true
if (isShinning)
    console.log('remember to carry your sun glasses')


//if(condition){
//runs when the condition is true
//}else{
// runs when the condition is false}

let number2 = -5
if (number > 0) {
    console.log(`${number} Number is positive`)
}
else { console.log(`${number} Number is negative`) }

let isShinning2 = false
if (isShinning) {
    console.log('remember to carry your sun glasses')
}
else {
    console.log('no need to carry your sun glasses')
}

//if(condition){
//runs when the condition is true
//}else if{
// runs when the condition is false}

let number3 = 0
if (number > 0) {
    console.log(`${number} Number is positive`)
} else if (number < 0) {
    console.log(`${number} Number is positive`)
}
else if (number == 0) {
    console.log(`${number} is zero`)
}
else {
    console.log(`${number} is not a number`)
}

let weather = 'sunny'
if (weather === 'rainy') {
    console.log('you need a rainy coat')
}
else if (weather === 'cloudy') {
    console.log('ypu need a jacket')
}
else if (weather === 'sunny') {
    console.log('you only need a shirt')
}
else {
    console.log('you dont need a rainy coat')
}

//SWITCH
let newWeather = 'cloudy'
switch (newWeather) {
    case 'rainy':
        console.log('you need a rainy coat')
        break
    case 'cloudy':
        console.log('you need a jacket')
        break
    case 'sunny':
        console.log('you need a shirt')
        break
    default:
        console.log('you dont need a rainy coat')
}



let dayOfTheWeekByUser = prompt('what is the day today')
let day = dayOfTheWeekByUser.toLowerCase()
switch (day) {
    case 'monday':
        console.log('today is monday')
        break
    case 'tuesday':
        console.log('today is tuesday')
        break
    case 'wednesday':
        console.log('today is tuesday')
        break
    
    case 'thursday':
        console.log('today is thursday')
        break
    case 'friday':
        console.log('today is friday')
        break
    case 'saturday':
        console.log('today is saturday')
        break
    case 'sunday':
        console.log('today is sunday')
        break
        default:
        console.log('remember the days of the week')
}




let isRaining = true
 isRaining
   ? console.log('remember to carry your raincoat')
    : console.log('no need to carry your raincoat today')





