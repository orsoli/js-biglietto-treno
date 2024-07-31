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
//Retrieve the interested of elements on DOM
const resultPrice = document.getElementById("price");
const resultDiscount = document.getElementById("discount");
const resultInfo = document.getElementById("info");
// Price per kilometer
const kmPrice = 0.21;
console.log(`Price per kilometer ${kmPrice} $/km`);
// Minor discout (20%)
const minorDiscount = 0.2;
//Senior discount (40%)
const seniorDiscount = 0.4;

//Prices messages
const messagePrice = "Your ticket price is:";
const messageMinorPrice = `You have received a ${
  minorDiscount * 100
}% discount from the MinorPrice package.`;
const messageSeniorPrice = `You have received a ${
  seniorDiscount * 100
}% discount from the SeniorPrice package.`;

//Minor price per kilometer
const minorPrice = (kmPrice - minorDiscount * kmPrice).toFixed(3);
console.log(`Minor price/kilometer: ${minorPrice}$`);
//Senior price per kilometer
const seniorPrice = (kmPrice - seniorDiscount * kmPrice).toFixed(3);
console.log(`Senior price/kilometer: ${minorPrice}$`);

//--- Collection phase
//Ask the user trip distance
const distance = parseInt(
  prompt("How far in KILOMETERS is your destination?", 130)
);
//Ask the user age
const age = parseInt(prompt("Insert your age", 16));

//! Validation
// Flag for user inputs is NAN or not
const validNumber =
  isNaN(distance) || distance === 0 || isNaN(age) || age === 0;
// If one of users inputs is NAN
if (validNumber) {
  // Alert
  alert("Please insert only numbers and > 0 in input forms");
  // And reload the page
  location.reload(true);
}
console.log(`Your destination is ${distance}KM from here.`);
console.log(`I see that you are ${age} years old`);

//--- Processing phase
//Calcolate final prices
const finalPrice = (kmPrice * distance).toFixed(2);
const finalMinorPrice = (minorPrice * distance).toFixed(2);
const finalSeniorPrice = (seniorPrice * distance).toFixed(2);
// Added inner text in element of DOM
resultInfo.innerText = `
Price per kilometer ${kmPrice}$/km
Minor price/kilometer: ${minorPrice}$
Senior price/kilometer: ${minorPrice}$
Your destination is ${distance} KM from here.
You are ${age} years old
`;
// Final message
let message;
// If is not minor also senior
if (age >= 18 && age < 65) {
  message = `${messagePrice} ${finalPrice}$`;
  // Added text in element of DOM
  resultPrice.innerHTML = `${messagePrice} <strong>${finalPrice}$ </strong>`;
}
// If is minor or senior
else if (age < 18) {
  message = `${messageMinorPrice} ${messagePrice} ${finalMinorPrice}$`;
  // Added text in elements of DOM
  resultPrice.innerHTML = `${messagePrice} <strong>${finalMinorPrice}$ </strong>`;
  resultDiscount.innerText = messageMinorPrice;
} else {
  message = `${messageSeniorPrice} ${messagePrice} ${finalSeniorPrice}$`;
  // Added text in elements of DOM
  resultPrice.innerHTML = `${messagePrice} <strong>${finalSeniorPrice}$</strong>`;
  resultDiscount.innerText = messageSeniorPrice;
}

console.log(message);
