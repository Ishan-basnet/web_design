const number=[10,20,30,40,50]
const foundnumber=number.find((num)=>num>30)    // 40
console.log(foundnumber)
// 2nd line ma chai (num)=> euta arrow function ho ani num>30 chai condition ho ani tyo chai eutai
//line ma lekheko le garda {} use nagareko 
//this works just like loop

const filternumber=number.filter((num)=>num>30)
console.log(filternumber)         // [40,50]

const squarednumbers=number.map((num)=>num*num)
console.log(squarednumbers)      //[100,400,900,1600,2500]