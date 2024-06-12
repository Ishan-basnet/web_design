// // before spread

// const num=[1,2,3]
// const newnum=[4,5,6,num[0],num[1],num[2]]
// console.log(newnum)

// // after spread

// const arr=[1,2,3]
// const newarr=[...arr,4,5,6,]
// console.log("new array =",newarr)

// //before rest operator

// const arr1=[1,2,3,4,5]
// const first=arr1[0]
// const rest1=arr1.slice(1)// yesma slice le index 1 ma bhako value dekhi last samma print garxa tara 
// //index 1 bhanda agadi bhako value print gardaina
// console.log(first)
// console.log(rest1)

// // ... yo bhaneko chai rest ra spread ho

// // after rest

// const arr2=[1,2,3,4,5]
// const [a,b,...ishan]=arr2     
// console.log(a)
// console.log(b)
// console.log(ishan)



// reduce

 function add(...numbers){

   const add1= numbers.reduce((sum,num)=>{
    return sum+num
    },0)           // ,0 initialization ho ani yo sum ma store hunxa yo nagarda ni hunxa

    return add1
 }                                         
console.log( add(1,2,3,4,5))



function mult(...numb){
    const mult= numb.reduce((multiplied,num2)=>{
        return multiplied*num2
    },1)
    return mult
}
console.log(mult(1,2,3,4,5))