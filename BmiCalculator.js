/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
function CalculateBMI(height, weight) {
    let bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "you are underweight!";
    } else if (bmi >= 25 && bmi <= 24.9) {
        return "You are Normal!";
    }else if (bmi >= 25 && bmi <= 29.9){
        return "You Are overweight!"
    }else{
        return "You are obese!"
    }
}
let weight = 71; // weight in kg
let height = 2.667; // height in meters
console.log(CalculateBMI(height, weight));
