function calculator(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

calculator(1, 3, add);
calculator(1, 3, sub);