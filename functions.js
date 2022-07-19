var num = [1,2,3,4,5,6];

// function add(a,b){  //returning function.
//     let x = a + b;
//     return x;
// }

// function add1(){  //non-returning function because it directly prints the result.
//     console.log(i += 1);
// }

// function add2(a,b){ //parameterized function. To use when working with given input.
//     console.log('1st number is :'+a);
//     console.log('2nd number is :'+b);
//     x = a+b;
//     console.log('Sum of entered numbers is :'+x);
// }
// add2(1,2);

// for(i=0; i<20; i++){    //function for finding odd no.
//     add();
// }

// function add3(a,b=1){   //function with default parameters when values are not passed.
//     x = a+b;
//     console.log(x);
// }
// add3(1);
// add3(1,2);

// function factorial(num) {  //recursive function for finding factorial.
//     if(num <= 0) { 
//        return 1; 
//     } else { 
//        return (num * factorial(num-1)  ) 
//     } 
//  } 
//  console.log(factorial(6))

var x = (a) => 10+a; //lambda/arrow function
console.log(x(10));
