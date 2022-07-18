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

var num2 = [9,10,11,12,13,14,15];

function big(v,i,array){
    console.log(v);
}

var num3 = num2.every(big);