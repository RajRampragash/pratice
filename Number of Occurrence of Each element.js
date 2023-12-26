const input = [3, 4, 3, 5, 3, 6];

const output = {};
input.forEach((element) => {
  output[element] = (output[element] || 0) + 1;
});

console.log(output);

//remove the duplicate element

const output2 = []
for(let i of input){
  if(!output2.includes(i)){
    output2.push(i);
  }

}console.log(output2)