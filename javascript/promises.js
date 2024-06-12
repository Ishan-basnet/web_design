  //promise is used tomake program asynchronous in a better way
let promise=new Promise(      // new Promise reserved keyword ho yo change garna mildaina

    (resolve,reject)=>{
        let a=10
        if (a<=10){
            resolve("the value of a is less than or equal to 10")
        }
else{
    reject("the value is rejected because value of a is greater than a")
}
    }
)
promise
.then(        // .then bhitra resolve wala data store hunxa
    (dat)=>{
        console.log(dat)
    }
)
.catch(             // .catch bhitra reject wala data store hunxa
    (err)=>{        
        console.log(err)
    }
)


let resolvemessage=new Promise((resolve,reject)=>{
let data="ishan"
if(data){
    resolve(data)
}
else{
    reject(data)
}
})
resolvemessage
.then(
    (datas)=>{
        console.log(datas)
    }
)
.catch(
    (error)=>{
        console.log(error)
    }
)

