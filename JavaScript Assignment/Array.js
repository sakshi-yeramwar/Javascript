let table12 = [12, 24, 36, 48, 60];

table12.push(72);
table12.push(84);

let elementRemoved = table12.splice(4, 2); 


let elementExist = table12.includes(72);

console.log("Array: ", table12);
console.log("Removed Element: ", elementRemoved);
console.log("Does 40 exist in the array?", elementExist);