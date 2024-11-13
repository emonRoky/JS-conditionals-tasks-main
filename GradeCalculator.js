/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const readline = require('readline')

// Set up readline to read from terminal
const readFromTerminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readFromTerminal.question("Enter the student's score (0-100): ", (input) => {
    const score = Number(input);


    function gradeCalculator(score) {
        if (score >= 90 && score <= 100) {
            return "A";
        } else if (score >= 80 && score <= 89) {
            return "B";
        } else if (score >= 70 && score <= 79 ){
            return "C";
        } else if (score >= 60 && score <= 69){
            return "D";
        }else if (score >= 0 && score <= 59){
            return "F";
        }else{
            return "Please Enter a valid number between 0 to 100."
        }
    }
    let grade = gradeCalculator(score);
    console.log("The student's grade is:", grade);

    readFromTerminal.close(); // Close the input stream
});


