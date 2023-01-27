//Q1
// function filterOutFalsy(elem1,elem2){
//     if(elem1 !== true){
//         return false; //instead of returning false - return elem1
//     } else {
//         return elem2
//     }
// }

// function filterOutFalsy(elem1,elem2){
//     return elem1 !== true ? false: elem2;
// } //instead of returning false - return elem1
// //example
// function filterOutFalsy(elem1,elem2){
//     return elem1 !== true ? elem1 : elem2;
// }
// console.log(filterOutFalsy(null,'dog'))

// console.log(filterOutFalsy(true,'Dog'))
// //Daves solution
// function filterOutFalsy(elem1,elem2){ // I figured this out before Dav
//     return !!elem1 ? elem1 : elem2
// }

// console.log(filterOutFalsy(true,'Dog'))

//Q2
function arrLength(arr) {
  return arr.length; // I did arrLength.length before. Remeber that the parameter I am passing in needs to be refrenced not a outside PM
}
// console.log(arrLength([]));

//Q3
function lastElem(arr) {
  // return arr.splice(-1);
  // return arr[arr.length -1]
}
// console.log(lastElem(["dog", "cat", "ball"]));

//Q4
//davs solution MESS AROUND WITH THIS
// function arrSum(arr) {
//     let sum = 0
//   for (let i = 0; i < arr.length; i++) { // if you do -1 at the end of length it won't the last index
//     // this is how you loop through every elem in a array
//     console.log(arr[i]); // <-- loops the element
//     console.log("run this code");
//     sum = sum + arr[i]; // this adds it all together
//   }
//   console.log("for loop broke");
//   return sum;
// }

// console.log(arrSum([1, 2, 300]));

// Q5
function ProgressiveSum(num) { // whenever you hear sum you should be thinking of creating a new variable
    let sum = 0;
     for (let i = 0; i < num; i++){
      console.log(i)
     }
  }

  console.log(ProgressiveSum(3))