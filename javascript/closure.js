function outerfunction(){
    let outervariable=10
    function innerfunction(){
        console.log(`your lottery number is ${outervariable}`)
    }
    return innerfunction()
}
outerfunction()



function counter(){
    let count=0
    function ccounter(){
        count++
       return count
    }
    return ccounter
}
const increment=counter()
console.log(increment())
console.log(increment())
console.log(increment())
