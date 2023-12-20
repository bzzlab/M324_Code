function price(price,age, isStudent) {
    //message variable
    let message;
    //if age and price is undefined ...
    if (age === undefined || price === undefined) {
        //show message
        message = `Price or age are not defined! Try again.`;
    //else
    } else {
        let discount;
        // If 6 under print message free entrance
        if (age < 6) {
            //show message
            message = `With age ${age} years: Free entrance!`;
        }
        //else if age between 6 and 16 then set discount to 50%
        else if ((6 <= age) && (age <= 16)) {
            //set discount
            discount = .5;
            //show message
            message =
                `With age ${age} years you get ${(discount * 100)}% discount!` +
                ` Pay CHF ${(price * discount).toFixed(2)}.`;
        }
        //else if 65 or older or student then set discount to 33%
        else if (age >= 65 || isStudent) {
            //set discount
            discount = .3;
            //show message
            message =
                `With age ${age} years you get ${(discount * 100)}% discount!` +
                ` Pay CHF ${(price * (1-discount)).toFixed(2)}.`;
            //else
        } else {
            //else no discount
            discount = 1;
            //show message
            message = `With age ${age} years you get NO discount! Pay CHF ${(price * discount).toFixed(2)}.`;
        }
    }
    //Output what the customer has to pay
    return message;
}

module.exports = {
    price
}
