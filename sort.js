//"
//Write a JS Code to Sort the given list using - JS Built in Function 

// let arr = [2, 8, 1, -3, 6, 7, 5, 4,-12, 82, 31, -34, 56, -76, 57, 82]
// arr.sort((a, b) => {return a-b});
// console.log(arr);


 
 var council = [

    { id: 2100, name: 'President Jacqueline', years:10 },
  
    { id: 2114, name: 'Vice-president James', years:10 },
  
    { id: 3016, name: 'House-captain Otis' , years:10},
  
    { id: 4818, name: 'Prefect Finneas' , years:10}
  
  ];

  const councilIds = council.map(counc => counc.name);
  console.log (councilIds)

  const interns = council.filter(council => council.id  === 2100);
console.log(interns)

var totalYears = council.reduce(function (accumulator, employee)
{
  return accumulator + council.years;
}, 0);
//--------------------------------------------------------------------------------
function findLargestNumber(n, numbers) {
  let largestNumber = numbers[0];

  for (let i = 1; i < n; i++) {
      if (numbers[i] > largestNumber) {
          largestNumber = numbers[i];
      }
  }

  console.log(`The largest number is: ${largestNumber}`);
}

// Example usage
const n = 5; // Replace with the actual number of input numbers
const inputNumbers = [10, 5, 20, 8, 12]; // Replace with the actual input numbers

findLargestNumber(n, inputNumbers);
