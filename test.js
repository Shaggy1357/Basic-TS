const apples = {name: 'Apples', lastname:'asdf'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};
//console.log(apples);
// Create a new Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
// Add new Elements to the Map
/*fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);*/
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits);
//fruits.get(500);
console.log(fruits.get("apples"));
//fruits.get(100);

//console.log(fruits);
//fruits.size();