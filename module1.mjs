// import ui, {a, b, c} from "./module2.mjs";

// console.log(ui);
// console.log(a);
// console.log(b);
// console.log(c);

function calculate(a, b){
    let add = a + b;
    let sub = a - b;
    let divide = a / b;
    let multi = a * b;

    return [add, sub, divide, multi]
}

let [add, sub, divide, multi] = calculate(8, 2);

console.log(add, sub, divide, multi);

