// // // let student = ["raj" , "ram" , "boy 3", "boy 4"]
// // // let student1 = [55, "ram" ]

// // // console.log(student)
// // // console.log(student1)

// // // // for loop

// // // // for (let ind = 0; ind < student.length;ind++){
// // // //     console.log(student[ind])
// // // // }

// // // // for of 

// // //  for(let name of student){
// // //     console.log(name);
// // //  }



// //  // practice average of class

// //  let marks = [85, 97, 44, 37, 76, 60]
// //  let sum = 0
// //  //let sum =marks[0] +  marks[1] + marks[2] +  marks[3] +marks[4] +  marks[5]
// // //  for(let i=0; i<marks.length;i++){
// // //        sum = marks[i] + sum ;
// //  //}

// //  for (let valu of marks ){
// //     sum = valu + sum ;
// //  }
// //  let average = sum / marks.length;
// //  console.log(average)


// let items = [250, 645, 300, 900, 50 ]
// console.log(items)
// let newItems = []
// // for (let dis of items){
// //     newItems =[(dis - (dis*(10/100)))]
// // }
// // console.log(newItems)

// for(let i=0; i<items.length; i++){
//    // items[i] = (items [i] - (items[i]/10));
//     newItems[i] = (items [i] - (items[i]/10))
// }
// console.log(items)
// console.log(newItems)




// arrays mathods
// push() = add to end 
// push()= delete from end 
// toString() = convert array to string
// 
// concat = add arrays  >>> arrays1.concat(arrays2)
// unshift() = add to start 
// shift() = delited from start
// slice() = arrays1.slice (1,3) <<< 1 ans 2 , 3 is not included 
// splice() = add , delete , replace



// practice
let companies = [ "bloomberg", "microsoft", "uber", "google", "IBM", "Netflix"]
//remove first 
//companies.shift();
//console.log(companies) ;
//ramove uber and add ola in its place
//companies.splice(2,1, "Ola")
//console.log(companies) ;
// add amazon in last
// companies.push("Amazon");
// console.log(companies) ;
// console.log(companies[2])