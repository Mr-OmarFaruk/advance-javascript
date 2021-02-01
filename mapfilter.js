const num=[3,4,5,6,6];
// root
// function square(element){
//     return element*element;
// }
// num.map(function square(element){
//     console.log(element);
// })

// const result=num.map(x=>x*x);
// console.log(result);

const bigger=num.filter(x => x<5);
const isthere=num.find(x => x<5); // first ja pay tai dey
console.log(isthere);