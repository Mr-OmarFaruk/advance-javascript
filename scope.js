let bonus=20; // global scope variable  let&const block scope
function sum(first, second){
    let result=first+second+bonus;
    console.log(result);
    return result;
}
const output=sum(3,22);
console.log(bonus);