var guestList =['amna','raza','noor']
var guestName = prompt('your Name');

var isTrue = guestList.includes(guestName)
if(isTrue){
    alert('welcome')
}
else{
    alert('Not in guest List')
}