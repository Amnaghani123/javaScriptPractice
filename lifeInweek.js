function lifeInWeek(age){

var yearRemaining = 90-age;
var days =yearRemaining*365;
var weeks =yearRemaining*52;
var months =yearRemaining*12

    console.log('you have '+ days + ' days '+ weeks +' weeks '+ months +' months left ')
 
}
lifeInWeek(78);