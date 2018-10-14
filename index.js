const sum = (...arg) => arg.reduce((init, item) => init + item, 0);

const r = sum(12,33,44);
console.log(r);