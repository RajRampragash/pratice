//Input ={jack:"Three", jill: "Two",And:"one"};
//Expected Output= {JACK: "Three",JILL: "Two",AND: "one"}

const input = { jack: "Three", jill: "Two", And: "one" };

const output = {};
for (const key in input) {
  output[key.toUpperCase()] = input[key];
}

console.log(output);

