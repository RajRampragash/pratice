//sum of array of objects
// const arr = [{id: 1, salary:10},{id: 2, salary:20},{id: 3, salary:30} ]
// const sum = arr.reduce((acc,Object)=>{
//     return acc + Object.salary;
// },0)
// console.log(sum);
//-------------------------------------------------------------
//balance pranthaes
// const balance = "{}[](){"
// const isBalance = (array)=>{
//     //create one empty array
//     const stack = []
//     const p = {
//         "}":"{","]":"[",")":"("
//     };
//     for(let i of array){
//         //object.value(p)
//         if(["{","(","["].indexOf(i)>=0){
//             stack.push(i);
//         }else{
//             if(p[i]!= stack[stack.length-1]){
//             return false
//         }else{
//             stack.pop()
//         }

//         }
//     }
    
//      if(stack.length>0){
//         return false
//     }
//     return true
// }

// console.log(isBalance(balance))
//-------------------------------------------------------------
//rotate the array to given number

const arr = [1,2,3,4,5,6,7]
const times = 4
//without inbuit function
  let ans =[];
  const x = arr.length-times;
  for (let i = x; i < arr.length; i++) {
    ans [ans.length]=arr[i]
    
  }for(let i=0;i<=times;i++){
    ans[ans.length]=arr[i]
  }console.log(ans)
//with inbuit function
for (let i=0; i<times;i++){
    arr.unshift(arr.pop())
}
console.log(arr)
//work on actul array
function rotateArray(arr,n){
    n %= arr.length
    while(n-- > 0){
        var temp = arr.shift();
        arr.push(temp);
        }
        return arr;
        }
        console.log(rotateArray(arr,times));
 //-------------------------------------------------------------
//change the array order 
//input 
const array =[3,1,0,2]
//output
const output=[2,1,3,0]

const arr1 =[]

for(let i=0;i<array.length;i++){
 arr1[i]=array[array[i]];
}

console.log(arr1) 

function isAlternating(array) {
    if (array.length <= 2) {
      // If the array has 0 or 1 elements, or all elements are equal, it's considered alternating.
      return true;
    }
  
    for (let i = 1; i < array.length - 1; i++) {
      if (!((array[i - 1] < array[i] && array[i] > array[i + 1]) || (array[i - 1] > array[i] && array[i] < array[i + 1]))) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const inputArray = [12, 14, 3, 7, 4];
  const result = isAlternating(inputArray) ? 'yes' : 'no';
  console.log(result);
  

  