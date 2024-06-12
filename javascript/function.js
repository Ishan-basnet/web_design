// function add(){
//     const a=10
//     const b=20
//     return a+b
// }
// const result=add()
// console.log(result)

// const a=10
// const b=20
// function add1(a,b){
//     const added=a+b        //yo chai user bata input lina ko lagi prompt use garera use garne bela use garne
//     return added
// }
// const result1=add(a,b)
// console.log(result)



// function sub(c,d){
//     const subtracted=d-c
//     return subtracted
// }
// const result2=sub(10,20)
// console.log(result2)


// function mult(e,f){
//     const multiplication=e*f
//     return multiplication
// }
// const result3=mult(3,4)
// console.log(result3)

// function div(g,h){
//     const division=g/h
//     return division
// }
// const result4=div(4,2)
// const result5=div(2,4)
// console.log(result4)
// console.log(result5)



// function greeting(firstname,lastname){
//     const result7=(`hello ${firstname} ${lastname}`)
//     return result7
// }
// const result8=greeting("ishan","basnet")
// console.log(result8)

// function add(num1,num2){
//     const added=num1+num2
//     return added
// }
// const result=add(1,2)
// const result1=add(2,3)
// const result2=add(9,4)
// console.log(result)
// console.log(result1)
// console.log(result2)



// function sub(num,num0){
//     const subtracted=num-num0
//     return subtracted
// }
// const reslt=sub(4,2)
// console.log(reslt)



// let greet=function(name){
//     console.log(`hello ${name}!`)   // function expressions/anonymous function
// }     //yesma chai function lai variable deyera assign garne yesto garda functionname lekhna pardaina
// greet(ishan)


// let add=(a,b)=>{
//     return a+b      // arrow function yesma function keyword ko use 
// }                  //hudaina ani tesko satta => use hunxa
// console.log(add(9,9))

// function person(name,age){
//     this.name=name
//     this.age=age
// }                                 //construction function
// let ram = new person("ram",25)
// let shyam=new person("shyam",34)
// console.log(ram.name,ram.age)
// console.log(shyam.name,shyam.age)


//callback function


// function greet(name,callback){
//     console.log(`hello mr ${name} ${caste}`)
//     callback("basnet")
// }
// function ggreet(caste){
  
// }
// greet("ishan",ggreet)







function add(num1,num2,subtract){
    let added=num1+num2
    console.log(added)
    subtract(4,2)
}
function sub(num1,num2){
let subt=num1-num2
console.log(subt)
}
add(4,3,sub)


function sub(num1,num2){
    let subt=num1-num2
console.log(subt)
}
function multi(num1,num2,subtraction){
    let mult=num1*num2
    console.log(mult)
    subtraction(4,2)
}
multi(4,8,sub)



function greet(name,caste){
    console.log(`hello mr ${name} ${caste} !`)
}
function lastname(firstname,callback){
    callback(firstname,"basnet")
}
lastname("ishan",greet)