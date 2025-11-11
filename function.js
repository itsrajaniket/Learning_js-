// // // creating a function 


// // function cool(){
// //    let input = prompt("enter a number : ")
// //     console.log("You enter a number :" , input)
    
// // }

// // cool();

// // function countVowes(str){ 
// //     let cont = 0;
// //     for (const char of str ){
// //         if ( char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u" )}
// //          console.log(cont)

        
// //     }
// // } 

// function countVowels(str) {
//     let count = 0;
//     for (const char of str.toLowerCase()) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// calculat marks more then 90 using filter

// let arr = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 91 , 95 , 97
// ]
// let topper = arr.filter ((val) =>{
//     return val > 90;
// })

// console.log(topper)


let n = prompt("enter a number :")
let arr =[]

for ( let i = 1 ;i<=n ; i++ ){
   arr[i-1] =i ;

}
console.log(arr)

let sum = arr.reduce((a , b) => {
    return (a+b)
})
console.log("sum =", sum)

let mul = arr.reduce ((a,b) => {
return (a*b)
})
console.log("mul =", mul)