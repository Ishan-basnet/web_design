// //using switch to check the month by entering number
// let num = prompt("enter the number of month to get the month");
// num = Number(num);
// switch (num) {
//   case 1:
//     console.log("the month is january");
//     alert("the month is january");
//     break;
//   case 2:
//     console.log("the month is february");
//     alert("the month is february");
//     break;
//   case 3:
//     console.log("the month is march");
//     alert("the month is march");
//     break;
//   case 4:
//     console.log("the month is april");
//     alert("the month is april");
//     break;
//   case 5:
//     console.log("the month is may");
//     alert("the month is may");
//     break;
//   case 6:
//     console.log("the month is june");
//     alert("the month is june");
//     break;
//   case 7:
//     console.log("the month is july");
//     alert("the month is july");
//     break;
//   case 8:
//     console.log("the month is august");
//     alert("the month is august");
//     break;
//   case 9:
//     console.log("the month is september");
//     alert("the month is september");
//     break;
//   case 10:
//     console.log("the month is october");
//     alert("the month is october");
//     break;
//   case 11:
//     console.log("the month is november");
//     alert("the month is november");
//     break;
//   case 12:
//     console.log("the month is december");
//     alert("the month is december");
//     break;
//   default:
//     console.log("invalid month");
//     alert("invalid month");
//     break;
// }

// //using switch to enter number to find the day
// let day = prompt("write the number of day to get the day");
// day = Number(day);
// switch (day) {
//   case 1:
//     console.log("the day is sunday");
//     alert("the day is sunday");
//     break;
//   case 2:
//     console.log("the day is monday");
//     alert("the day is monday");
//     break;
//   case 3:
//     console.log("the day is tueaday");
//     alert("the day is tuesday");
//     break;
//   case 4:
//     console.log("the day is wednesday");
//     alert("the day is wednesday");
//     break;
//   case 5:
//     console.log("the day is thursday");
//     alert("the day is thursday");
//     break;
//   case 6:
//     console.log("the day is friday");
//     alert("the day is friday");
//     break;
//   case 7:
//     console.log("the day is saturday");
//     alert("the day is saturday");
//     break;
//   case 8:
//     console.log("invalid day");
//     alert("invalid day");
//     break;
// }

// yesto conditionals dine bela ma switch ko bhitra true lekhne
// const age = prompt("enter your age");
// const ageNumber = parseInt(age);
// switch (true) {
//   case ageNumber < 12:
//     console.log("the price of ticket for you is rs 5");
//     alert("the price of ticket for you is rs 5");
//     break;
//   case ageNumber < 18 && ageNumber > 12:
//     console.log("the price of ticket for you is rs 10");
//     alert("the price of ticket for you is rs 10");
//     break;
//   case ageNumber < 60 && ageNumber > 18:
//     console.log("the price of ticket for you is rs 20");
//     alert("the price of ticket for you is rs 20");
//     break;
//   case ageNumber >= 60:
//     console.log("the price of ticket for you is rs 15");
//     alert("the price of ticket for you is rs");
//     break;
// }

const cp = 1000;
const sp = 1500;
switch (true) {
  case sp > cp:
    const profit = sp - cp;
    const profitpercent = (profit / cp) * 100;
    console.log(`the profit is ${profit}`);
    console.log(`the profit percentage is ${profitpercent}`);
    break;
  case sp < cp:
    const loss = cp - sp;
    const losspercent = (loss / cp) * 100;
    console.log(`the loss is ${loss}`);
    console.log(`the loss percentage is ${losspercent}`);
    break;
}
