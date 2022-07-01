function BMICalculator(weight,height){
    var bmi = Math.round(weight/(Math.pow(2,height)))
    return bmi
}
console.log(BMICalculator(65,1.8))