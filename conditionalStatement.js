function bmiCalculator (weight, height) {
    bmi = Math.round(weight/Math.pow(2,height))
    console.log(bmi)
    if(bmi <18.5){
        alert('your are underweight')
    }
}
bmiCalculator(57,5.2)