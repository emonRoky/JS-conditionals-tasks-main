/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

function getDrinkOffer(burgerPrice) {
    if (burgerPrice > 500) {
        return "Congratulations! You get a free Coke with your burger!";
    } else if (burgerPrice > 0) {
        return "Add a Coke to your meal for only 30 TK!";
    } else {
        return "Enter a valid price!";
    }
}
let burgerPrice = 400;
    console.log(getDrinkOffer(burgerPrice)); 

