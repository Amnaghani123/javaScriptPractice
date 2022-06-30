let User={};
console.log(User);

User.name="jhon";
User.surname="Smith";

console.log(User)
User.name ="pete"
console.log(User)
//-------------------//
let schedule ={}
function isEmpty(obj){
  for(let key in obj){
      return false;
  }
return true
    
}
console.log(isEmpty(schedule))

//--------------------------------------//
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum =0
  for(let key in salaries){
    sum +=  salaries[key]
  }
  console.log(sum)
  //-------------------
  function multiplyNumeric(obj){
      
  }