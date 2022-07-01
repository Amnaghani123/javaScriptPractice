function lifeInWeek(age){

var yearRemaining = 90-age;
var days =yearRemaining*365;
var weeks =yearRemaining*52;
var months =yearRemaining*12
let timeLeft = console.log('you have '+ days + ' days '+ weeks +' weeks '+ months +' months left ')
return timeLeft;
}
var remainingTime=lifeInWeek(78);
console.log(remainingTime)