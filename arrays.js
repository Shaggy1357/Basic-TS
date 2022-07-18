//Declaring array in single statement

var num = [1,2,3,4,5,6];

//Decalaring array of length 4 by using array object/constructor

var num1 = new Array(4);

//Adding elements to the array

num1 = [7,8,9,10];

// console.log('Logging array elements by using for loop');

// for(var i = 0; i<num.length; i++){
//     console.log(num[i]);
//     console.log(i + ':' + num[i]);  // printing array elements along with indexes
// }

// for(var i = 0; i<num1.length; i++){
//     console.log(num1[i]);
//     console.log(i + ':' + num1[i]);
// }

// console.log('Logging array elements by using for--of loop');

// for(var i = 0; i<num1.length; i++){
//     console.log(num1[i]);
//     console.log(`${num1[i]} is at ${i}`);
// }

// console.log('Logging array elements by using for--each loop');

// function print(v,i){
//     console.log(v);
//     console.log(`${v} is at ${i}`);
// } 

// num.forEach(print);

// console.log('Logging array elements by using for--in loop');

// for(var i in num1){
//     console.log(i);   //Gives index of the element
//     console.log(num1[i]);  //Gives value at that index
//     console.log(`${num1[i]} is at ${i}`);
// }

// console.log('*****Using concat function of array*******');

// var numbers = num.concat(num1);
// console.log(numbers);

//console.log('Logging array elements using every method');

var num2 = [10,21,12,13,14,15,21];

// function big(v,i,array){
//     if(v<20){
//     console.log(v);
//     }
// }

// var num3 = num2.every(big);
// console.log(num3);

//var num3 = num2.every(function big(v,i,array){
    //     //if(v<20){
        //     console.log(v);
        //     //}
        //     return v<20;
// }
// );

// console.log(num3);

//console.log('Logging elements using filter method');

// var num4 = num2.filter(big);
//console.log(num4);

//console.log('Logging elements using foreach method');

//var num5 = num2.forEach(big);

// console.log('Finding the index of an element using indexof method');

// var i = num2.indexOf(21);
// console.log(i);

// console.log('Converting an array to a string using join method');

// var str = num2.join(' ');
// console.log(str);

// console.log('Finding the last index of an element using lastIndexOf method');
// var i = num2.lastIndexOf(21);
// console.log(i);

// console.log('Finding the first index at which an element can be found using indexOf method');
// var i = num2.indexOf(21);
// console.log(i);

//console.log('Iterrating through each element using map method');
// var num4 = num2.map(Math.sqrt);
// console.log(num4);

// console.log('Removing the last element of an array using pop method');

// var elem = num2.pop();
// console.log(elem);

// console.log('Adding an element at the last position in an array using push method');

// num2.push(24);
// console.log(num2);

// console.log('Reducing an array to a single element by using reduce method');

// var elem = num2.reduce(function(a,b){return a+b;});
// console.log(elem);
// var elem1 = num2.reduce(function(a,b){return a-b;});
// console.log(elem1);

// console.log('Reducing an array to a single element using reduceRight method');

// var elem = num2.reduceRight(function(a,b){return a-b});
// console.log(elem);
// var elem1 = num2.reduceRight(function(a,b){return a+b});
// console.log(elem1);

// console.log('Reversing the array elements using reverse method');

// var elem = num2.reverse();
// console.log(elem);

// console.log('Removing the first array element using shift method');

// var elem = num2.shift();
// console.log(elem);
// console.log(num2);

// console.log('Selecting a part of an array by usin slice method');

// var elem = num2.slice(0,5);
// console.log(elem);
// console.log(num2);

// console.log('Testing an array if any element satisfies a condition using some method');

// num2 = [10,21,12,13,14,15,21];

// function big(v,i,array){
//     if(v<20){
//     console.log(v);
//     }
// }

// var elem = num2.some(big);
// console.log(elem);

// console.log('Sorting an array using sort method');
// var elem = num2.sort();
// console.log(num2);
// console.log(num2);

// console.log('Adding and removing elements from array using splice method');
// var elem = num.splice(5,6);
// console.log(elem);
// console.log(num);
// elem = num.splice(3,4,num1);
// console.log(elem);
// console.log(num);

// console.log('Converting an array to string using toString method');
// var str = num.toString();
// console.log(str);

// console.log('Adding an element at the begining of the array');
// var elem = num.unshift(1);
// console.log(elem);
// console.log(num);
