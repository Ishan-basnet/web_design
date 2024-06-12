// settimeout euta callback function ho jasma duita parameter hunxa ani suru ko parameter ma chai function 
// halne ani second ko parameter ma time set hunxa milisecond ma

// The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to
//  return a Promise. The await keyword is used inside an async function to pause its execution and wait for
// a Promise to resolve before continuing.

function fetchdata(){
    return new Promise((resolve)=>{
    setTimeout(()=>{
            resolve("data fetched!")
        },1000)
    })
}
async function getdata(){
    const data= await fetchdata()
    console.log(data)       // ans= "data is fetched!" after 1 sectnd
}
getdata()


function fdata(){
    return setTimeout(()=>{
console.log("data fetched!")
        },1000)
    }
function getdata(){
fdata()    // ans= "data is fetched!" after 1 sectnd
}
getdata()     

// promise use nagarda chai async await use garna mildaina natra error aauxa
//console.log use garda chai tala ko get data ma variable banaunu mildaina ettikai call garne


function adddata(){
    return ("data added")
}
async function adddata1(){
    const data= await adddata()
    console.log(data)
}
adddata1()