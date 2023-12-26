//Write a JS Code to merge this list and avoiding the duplicates using built in functions 
let A1= [1, 2, 3, 4, 1, 2, 3, 4 ] 
let A2= [5, 6, 7, 8] 

Output : [1, 2, 3, 4, 5, 6, 7, 8]

let mergedArray = [...new Set([...A1, ...A2])];

console.log(mergedArray);

// const activationKey = Math.random().toString(36).substring(2, 9);
// console.log("Activation Key: " + activationKey)