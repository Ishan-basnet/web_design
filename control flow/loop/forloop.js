// for(i=1;i<=20;i++){
//    if(i%2!=0){
//     console.log(i)
//    }
// }

// for(let i=20;i>=1;i--){
//    console.log(i)
// }

// let n=6
// for(let j=1;j<=n;j++){
//    let str="* "
//    console.log(str.repeat(6))
// }

// for(k=5;k>=1;k--){
//    abc="* "
//    console.log(abc.repeat(k))
// }

// let o=5
// for(let m=1;m<=o;m++){
//    let str="* "
//    let space=" "
//    console.log(str.repeat(m)+space.repeat(o-m))
// }

// let n=5
// for(let i=1;i<=n;i++){
//    let space=" "
//    let str="* "
//    console.log(space.repeat(n-i)+str.repeat(i)+space.repeat(n-i))
// }

// let rows=5
// for(let i=1;i<=rows;i++){
//  let pattern=''
//    for(let j=1;j<=i;j++){
//       pattern+="* "}
//       console.log(pattern)
// }

// const n=5
// let str=""
// for(let i=1;i<=n;i++){
//    for(let j=1;j<=n;j++){
//       console.log("*")
//    }
//    console.log(\n)
//    }

// const n=5
// for(let i=1;i<=n;i++){
//    let str=""
//    for(let j=1;j<=n;j++){
//       str+="* "
//    }
//    console.log(str)
// }

// let o = 5;
// let str = "";

// for (let a = 1; a <= o; a++) {
//   for (let b = 1; b <= o; b++) {
//     if (b <= o - a) {
//       str += " ";
//     } else {
//       str += "* ";
//     }
//   }
//   str += "\n";
// }
// console.log(str);

// for(let i=0;i<5;i++){
//   if(i===3){
//     continue
//   }
//   else{
//     console.log(i)
//   }
// }


// for(let i=1;i<=5;i++){
//   let j=i*i
//   console.log(j)
// }


// const names=['ishan','basnet','jhfkej','efjgeuf']
// for(let a=0;a<=names.length-1;a++){
//   console.log(names[a])            //yesma name print garauna console.log paxi names lekhexi [] bhitra
// }                                    //index lekhne for eg basnet print garna xa bhane 1 lekhne
//purai print garauna index lai j le assign gareko xa tyo lekhne array ma index 0 dekhi suru hunxa
//array lai [] bhitra lekhinxa


// const number1=[10,20,30,40,50]
// sum=0
// for(let b=0;b<=number1.length-1;b++){
//   sum+=number1[b]
// }
// console.log(sum)

// const num=[1,2,3,4,5]
// multi=1
// for(let c=0;c<=num.length-1;c++){
//   multi*=num[c]
// }
// console.log(multi)


for(let y=1;y<=50;y++){
  let strin=""
  for(let z=1;z<=y;z++){
    strin+=":)"

  }
  console.log(strin)
}




let string=""
for(let i=50;i>=1;i--){
  for(let j=i;j>=i;j--){
    string+=":)"

  }
  console.log(string)
}
