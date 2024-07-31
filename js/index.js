/*
    - Retrieve the interested of element on DOM
    - Save the price for 1 km
    - Save the discounts in decimal numbers
    - Save in decimal precision number the price for 1km of -18 with (20% discount) 
    - Save in decimal precision number the price for 1km of +65 with (40% discount) 
    - Ask uer the distance of his/her trip
    - Ask user the age
    - Cacolate final Price
    - Cacolate final minor Price (-18)
    - Cacolate final sinior Price (+65)
    - Print the final (minor/senior) price in consol in decimal precision max 2 dec places.
    BONU
    - Print in page
*/

//--- Preparation phase
// Price per kilometer
const kmPrice = 0.21;
// Minor discout (20%)
const minorDiscount = 0.2;
//Senior discount (40%)
const seniorDiscount = 0.4;

//Minor price per kilometer
const minorPrice = (kmPrice - minorDiscount * kmPrice).toFixed(3);
console.log("Minor price/kilometer:", minorPrice, "$");
//Senior price per kilometer
const seniorPrice = (kmPrice - seniorDiscount * kmPrice).toFixed(3);
console.log("Senior price/kilometer:", seniorPrice, "$");
