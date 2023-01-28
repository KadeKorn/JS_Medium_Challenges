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
// function ProgressiveSum(num) { // whenever you hear sum you should be thinking of creating a new variable
//     let sum = 0;
//      for (let i = 1 ; i <= num; i++){ // to get I to start at 1 --> i = 1 and or you can say I <= num
//       // console.log(i)
//       sum = sum + i
//     }
//     return sum 
//   }

//   console.log(ProgressiveSum(3))

  //Q 6

  // function calcTime(seconds){
  //   //inital thoughts. Use Modulo % 60 to get the number of minutes and then the remainder to the seconds
  //   let timerMinutes = Math.floor(seconds / 60);
  //   let timerSeconds = seconds % 60;
    
  //   if (timerMinutes.toString().length === 1){
  //     timerMinutes = "0" + timerMinutes
  //   }

  //   return  timerMinutes + ':' + timerSeconds
  // }

  // console.log(calcTime(600))

  //Q7
  // function getMax(arr){
  //   console.log(arr)
  //   const max = Math.max(...arr)
  //   return max
  // }
  // console.log(getMax([-300,-100,-200]))

// // daves solution he wants a for loop 
// function getMax(arr){
//   let largest = arr[0]
//   for(let i =0; i< arr.length; i++){
//     console.log(arr[i])
//     if(arr[i] > largest){
//       largest = arr[i]
//       }
//     }
//     return largest;
// }
// console.log(getMax([-500,-200,-300]))
// //Q8 
// function reverseString(string){
//   return string.split('').reverse().join('')
// }
// console.log(reverseString('This is Cool'))
// Need to use a loop below is davs solution.
// function reverseString(string){
//   let reverseStr  = '';
//   for(let i = 0; i < string.length; i++){
//     // this is how you loop though every character in a string
//     reverseStr = string[i] + reverseStr
//   }
//   return reverseStr
// }
// console.log(reverseString('abc'))
//Q9 for loop, array 'fill', array 'map'
function convertToZeros1(arr){
  return arr.fill(0);
}
function convertToZeros2(arr){
  return arr.map(x => x * 0) // I can make this also a multiple mapping by chaning the 0 to a 2
}

function convertToZeros3(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    // this is where I am stuck. I can turn the element into a 0 but I dont know how to return the entire array filled with zeros
  }
}

console.log(convertToZeros3([1,2,3]))
// Davs solutions
function convertToZerosD1(arr){
  let newArr = [];
  for(let i = 0; i< arr.length; i++){
     newArr[i] = 0                      // arr[i] = 0
  }
           // return arr;
}

function convertToZerosD2(arr){
  return new Array(arr.length).fill(0); // makes a new array and fills it with zeros
}

function convertToZerosD3(arr){

}

console.log(convertToZerosD2([1,2,3,4,5,6]))

