// input  = [4, 6, 2, 8, 9, 2, 6, 7, 6], output = { 6: 3,2: 2}

const input = [4, 6, 2, 8, 9, 2, 6, 7, 6];

const output = {};
input.forEach((element) => {
  output[element] = (output[element] || 0) + 1;
});

// Filter elements with counts greater than 1
const result = {};
for (const key in output) {
  if (output[key] > 1) {
    result[key] = output[key];
  }
}

console.log(result);

//Write a program to find product of array using reduce function. Input : [1,2,3,4,5,6]
function multiplyArrayElementsUsingReduceFunction(arr){
  return arr.reduce((accumulator, currentValue)=> accumulator * currentValue , 1 );
}
let inputArr = [1,2,3,4,5,6];
let resultProduct = multiplyArrayElementsUsingReduceFunction(inputArr);
console.log("The product is "+resultProduct);

// write a program to delet 3 using map function input :[1,2,3,4,5]
let deleteThreeFromInput=[1,2,3,4,5];
let newArr=deleteThreeFromInput.map((val)=>{return val===3?undefined:val})

console.log(newArr)
