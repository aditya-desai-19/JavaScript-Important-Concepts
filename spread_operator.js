//Spread operator
arr = [1,7, 90, 2,4,5];

function avg(a, b, c) {
    return (a + b + c)/3;
}

//It stores average of first three values
let res = avg(...arr);
console.log(res);

//concatenate values of arr
let newarr = [1, 5, 6, ...arr];
console.log(newarr);

let obj1 = {
    name: "John",
    age: 20,
    country: "USA"
};

//Spread operator in object
let obj2 = {...obj1, country: "India"};
console.log(obj2);