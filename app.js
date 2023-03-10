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
// function arrLength(arr) {
//   return arr.length; // I did arrLength.length before. Remeber that the parameter I am passing in needs to be refrenced not a outside PM
// }
// console.log(arrLength([]));

//Q3
// function lastElem(arr) {
// return arr.splice(-1);
// return arr[arr.length -1]
// }
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
//   let timerSeconds = seconds % 60;
//   let timerMinutes = Math.floor(seconds / 60);

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
function convertToZeros1(arr) {
  return arr.fill(0);
}
function convertToZeros2(arr) {
  return arr.map((elem) => elem * 0); // I can make this also a multiple mapping by chaning the 0 to a 2
}

function convertToZeros3(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    // this is where I am stuck. I can turn the element into a 0 but I dont know how to return the entire array filled with zeros
  }
}

// console.log(convertToZeros3([1, 2, 3]));
// Davs solutions
function convertToZerosD1(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = 0; // arr[i] = 0
  }
  // return arr;
}

function convertToZerosD2(arr) {
  // will be used in a future project
  return new Array(arr.length).fill(0); // makes a new array and fills it with zeros
}

function convertToZerosD3(arr) {
  // Array.map is !!!Important need to know
}

// console.log(convertToZerosD2([1, 2, 3, 4, 5, 6]));

//Q10
function removeApples1(arr) {
  let filtered = arr.filter(
    (elem) => typeof elem === "string" && elem.length >= 6
  );
  return filtered;
}

function removeApples3(arr) {
  // this one is better practice than removeApples1
  return arr.filter((elem) => elem !== "Apple");
}

function removeApples2(arr) {
  // create new arr and if its a apple dont add it
  let noApples = [];
  for (let i = 0; i < arr.length; i++) {
    // If I wanted to make this more foolproof I would add some code to make all values lowercase (add test to make sure its a string), so that there wouldn't be any lowercase apples in here
    if (arr[i] !== "Apple") {
      noApples.push(arr[i]);
    }
  }
  return noApples; // things I messed up on here: 1. how to set up push, 2 keeping noApples array outside of the for loop and returning the array outside of the for loop
}

// console.log(removeApples3(["Banana", "Orange", "Apple", "Tomato"]));

//Q11

function filterOutFalsy2_1(arr) {
  // how to find out truthy/falsy !! <-- use in console
  let trueArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (!!arr[i] === true) {
      trueArr.push(arr[i]);
    }
  }
  return trueArry;
}

function filterOutFalsy2_2(arr) {
  // return arr.filter(Boolean) clever stackoverflow shortcut
  return arr.filter((elem) => !!elem); // (elem => !!elem === true)
}

// console.log(
//   filterOutFalsy2_2([null, "Banana", "Orange", "Apple", "Tomato", [], "", null])
// );

//Q12

//first attempt - Whenever you think of convert think of Map
function convertToBoolean1(arr) {
  let boolArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (!!arr[i] === true) {
      boolArr.push(arr[i]);
    }
  }
  return boolArr;
}

// I was able to do this, but needed Dav to tell me Map. Again when you hear Convert think Map
function convertToBoolean2(arr) {
  return arr.map((elem) => !!elem);
}

// console.log(convertToBoolean2([null, "Banana", "Orange", "Apple", "Tomato", [], "", null]))

// Going through all JS challenges. Just finished Easy now on to here 2/3/23
//Q1
function filterOutFalsy(elem1, elem2) {
  return !!elem1 === false ? elem1 : elem2;
}
// console.log(filterOutFalsy(false,100))
//Q2
function arrLength(arr) {
  return arr.length;
}
// console.log(arrLength([]))
//Q3
function lastElem(arr) {
  return arr[arr.length - 1]; // arr --> length --> last element
}
// console.log(lastElem([1,2,'ball']))
//Q4
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // let this loop through
  }
  return sum; // then return
}
//  return arr.reduce((a,b) => a + b) // takes two elems of the arr then adds them together. repeat
// console.log(arrSum([2,3,4]))
//Q5
// function ProgressiveSum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//     sum += i;
//   }
//   return sum;
// }
// console.log(ProgressiveSum(12));

// // doing Q5 again

// function ProgressiveSum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//    sum += i;
//   }
//   return sum
// }
// console.log(ProgressiveSum(600))

//Q6
function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;
  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }
  return timerMinutes + ":" + timerSeconds;
}

// console.log(calcTime(1267))

//Q7
function getMax(arr) {
  // Easy return Math.max(...arr)
  let n = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] > n) {
      n = arr[i];
    }
  }
  return n;
}
// console.log(getMax([5,100,0]))
//Q8
function reverseString1(string) {
  // decrementing for loop
  let newStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    // console.log(string[i])
    newStr += string[i];
  }
  return newStr;
}

function reverseString2(str) {
  // incrementing for loop
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr = str[i] + newStr; // by putting the str[i] infront it reversed it
  }
  return newStr;
}

function reverseString3(str) {
  // reverse property
  return str.split("").reverse().join("");
}
// console.log(reverseString3('apple'))

//Q9
function convertToZerosA(arr) {
  // this was all me
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (typeof arr[i] == "number") {
      newArr = newArr + arr[i] * 0;
    }
  }
  const newArr2 = Array.from(String(newArr), Number);
  return newArr2;
}

//daves solution
function convertToZerosAA(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = 0;
  }
  return newArr;
}

function convertToZerosB(arr) {
  return new Array(arr.length).fill(0); // this is to make a new array and no matter how long it is it will fill, same length, with zeros. --> my solution // return arr.fill(0);
}

function convertToZerosC(arr) {
  return arr.map((elem) => elem * 0); // <-- cleaner would be (elem => 0); "=>" is basically a return
}
// console.log(convertToZerosAA([1, 2, 3, 4, 5]));

//Q10
function removeApplesA(arr) {
  let noApples = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] !== "Apple") {
      noApples.push(arr[i]);
    }
  }
  return noApples;
}

function removeApplesB(arr) {
  return arr.filter((elem) => elem !== "Apple");
}
// console.log(removeApplesB(['Banana','Apple', 'Orange', 'Apple','Kiwi','Mango']))
//Q11 I did both problems first attempt. I am very happy with how things are grooving

function filterOutFalsyA(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (!!arr[i] === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function filterOutFalsyB(arr) {
  return arr.filter((elem) => !!elem === true);
}
// console.log(filterOutFalsyB(['Banana',"",null, 'Apple', [], undefined, 'Orange', false]))

//Q12
function convertToBooleanA(arr){
  return arr.map(elem => !!elem === true)
}

console.log(
  convertToBooleanA([
    "Banana",
    "",
    null,
    "Apple",
    [],
    undefined,
    "Orange",
    false,
  ])
);
