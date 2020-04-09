const age = [5, 5, 6, 28, 5, 6];
const age1 = [10, 52, 65, 58]
const totalage = age.concat(age1).concat([5])
const totalage1 = [...age,...age1, 5]
console.log(totalage);
console.log(totalage1);


const business = 6500;
const minister = 8546;
const sochib = 2586;
const takapoisha = [6500, 8546, 2586]
const maximum = Math.max(...takapoisha);
concat.log(maximum);