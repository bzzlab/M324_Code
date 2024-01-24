module.exports.specialDiscount = function (price, code) {
    let message;
    let discount;
    //if price is not defined
    if (price === undefined) {
        //message Price is not defined! Try again.
        message = `Price is not defined! Try again.`;
        //else if customer has a code ...
    } else if (code===1) {
        //set discount to 30%
        discount = .3;
        message =
            `With your valid code you get ${(discount * 100)}% discount!` +
            ` Pay CHF ${(price * (1 - discount)).toFixed(2)}.`;
        //else as senior or student  ...
    } else if (code===2 || code===3) {
        //set discount to 40%
        discount = .4;
        message =
            `With as senior or student you receive ${(discount * 100)}% discount!` +
            ` Pay CHF ${(price * (1 - discount)).toFixed(2)}.`;
    } else {
        //else no discount
        discount = 1;
        //show message
        message = `You've neither a discount code nor you are senior or student!` +
            ` Pay full price CHF ${(price*discount).toFixed(2)}.`;
    }

    //Output what the customer has to pay
    return message;
}
