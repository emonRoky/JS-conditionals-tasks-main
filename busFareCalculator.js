/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

function ticketFair(age) {
    const regularFare = 800;
    let fare;
    if (age < 10) {
        fare = 0;
    } else if (age >= 60) {
        fare = regularFare * 0.85;
    } else if (age >= 10 && age <= 25) {
        fare = regularFare * 0.5;
    }else{
        fare = regularFare;
    }
    return `The ticket fare is ${fare} Tk.`;
}
let age = 50;
console.log(ticketFair(age));
