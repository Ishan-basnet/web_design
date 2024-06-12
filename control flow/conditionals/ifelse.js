// //bmi calculator

// let weight = 20 prompt("enter the weight of person:");
// weight = Number(weight);
// let height =  1.6prompt("enter the height of person");
// height = Number(height);
// let bmi = weight / (height * height);
// if (bmi >= 30) {
//   console.log("obese");
//   alert("obese");
// } else if (bmi >= 25) {
//   console.log("overweight");
//   alert("overweight");
// } else if (bmi >= 18.5) {
//   console.log("normal");
//   alert("normal");
// } else {
//   console.log("under weight");
//   alert("underweight");
// }

// //positive,negative or zero number

// let num = prompt("enter any number");
// num = Number(num);
// if (num > 0) {
//   console.log("the number is positive");
//   alert("the number is positive");
// } else if (num < 0) {
//   console.log("the number is negative");
//   alert("the number is negative");
// } else {
//   console.log("the number is zero");
//   alert("the number is zero");
// }

// //to check if the person is eligible to vote or not(18+ are only allowedto vote)
// let age = prompt("enter the age of person");
// age = Number(age);
// if (age >= 18) {
//   console.log("the person is eligible to vote");
//   alert("the person is eligible to vote");
// } else {
//   console.log("the person is not eligible to vote");
//   alert("the person is not eligible to vote");
// }

// //to determine the grade of student

// let smarks = prompt("enter the marks of student")
// smarks = Number(smarks)
// if (smarks>=90) {
// console.log("the grade is A")
// alert("the grade is A")
// }
// else if (smarks>=80){
//   console.log("the grade is B")
//   alert("the grade is B")
// }
// else if(smarks>=70){
//   console.log("the grade is c")
//   alert("the grade is C")
// }
// else if (smarks>=60){
//   console.log("the grade is D")
//   alert("the grade is D")
// }
// else if(smarks>=50){
//   console.log("the grade is E")
//   alert("the grade is E")
// }
// else if (smarks>=40){
//   console.log("the grade is F")
//   alert("the grade is F ")
// }
// else {
//   console.log("the student is fail")
//   alert("the student is fail")
// }


// // to find whether the year is leap year or not

// let days = prompt("enter the number of days in the year")
// days = Number(days)
// if(days%4===0 && days%100!==0){
//   console.log("the year is leap year")
//   alert("the year is leap year")
// }
// else{
//   console.log("the year is not leap year")
//   alert("the yearis not leap year")
// }

// grade of student

// let marks = prompt("enter the marks of the student")
// marks=Number(marks)
// if (marks=100)
// if (marks>=80){  
//   console.log("distinction")
//   alert("distinction")
// }
// else if(marks>=60 && marks<80){
//   console.log("first")
//   alert("first")
// }
// else if (marks>=40 && marks<60){
//   console.log("pass")
//   alert("pass")
// }
// else if (marks<40){
//   console.log("fail")
//   alert("fail")
// }
// else if (marks>100){
//   console.log("invalid")
//   alert("invalid")
// }

// // to find whether the string is 10 characters long or not

// let String=prompt("enter the string")
// if(string.length>10){
//   console.log("the string is more than 10 characters")
// }
// else{
//   console.log("the string is less than 10 characters")
// }




// data converssion from string to number
// const dayNumber=parseInt(day)

// const a= prompt("enter any number")
// const aNumber=parseInt(a)
// const b= prompt("enter another number")
// const bNumber=parseInt(b)
// if(a>b){
//   console.log(" a is greater than b")
//   alert("a is greater than b")
// }
// else {
//   console.log("b is greater than a")
//   alert("b is greater than a")
// }


// const age=prompt("enter the age of person")
// const ageNumber=parseInt(age)
// if (age<12){
//   console.log("the price of ticket for you is rs 5")
//   alert("the price of ticket for you is rs 5")
// }
// else if (age<18 && age>=12){
//   console.log("the price of ticket for you is rs 10")
//   alert("the price of ticket for you is rs 10")
// }
// else if (age<60 && age>=18){
//   console.log("the price of ticket for you is rs 20")
//   alert("the price of ticket for you is rs 20")
// }
// else if (age>=60 ){
//   console.log("the price of ticket for you is rs 15")
//   alert("the price of ticket for you is rs 15")
// }


// const num=18
// if(num>18){
//   console.log("your guess is heigher")
// }
// else if(num<18){
//   console.log("your guess is lower")
// }
// else{
//   console.log("your guess is correct")
// }

// const number=12
// if(number%2==0){
//   console.log("the number is even")
// }
// else{
//   console.log("the number is odd")
// }


const sp=10000
const cp=1000
if(sp>cp){
  const profit=sp-cp
  const pp=(profit/cp)*100
  console.log( "the profit is rs " + profit)
  console.log(`the profit is  ${pp}%`)
}
else if(cp>sp){
  const loss=cp-sp
  const lp=(loss/cp)*100
  console.log("the loss is rs " + loss)
  console.log(`the loss is ${lp}%`)
}