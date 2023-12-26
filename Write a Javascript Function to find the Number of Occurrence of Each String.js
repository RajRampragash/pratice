const input = ["jack", "And", "jack", "jill", "jack", "jill"];

const output = {};
input.forEach((element) => {
  output[element] = (output[element] || 0) + 1;
});
console.log(output)
const result = {};

