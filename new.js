var obj = {name:'pawan', lastname:'bansari', age:26};

var num = [1,2,3,4,5,6];
num.name = 'pawan';

// for(i=0; i<num.length; i++){
//     console.log(i+':'+num[i]);
//     //console.log(num[i]);
// }

// for(i of num){
//     //console.log(i+':'+num[i]);
//     //console.log(num[i]);
//     console.log(i);
// }

// for(const [i, x] of num.entries()){
//     console.log(`${x} is at ${i}`);
// }

const ratings = [
    {user: 'John',score: 3, age:20},
    {user: 'Jane',score: 4, age:25},
    {user: 'David',score: 5, age:30},
    {user: 'Peter',score: 2, age:35},
];

//let sum = 0;
for (const {user,score,age} of ratings) {
    //sum += score;
    console.log(`${user} scored ${score} in age ${age}`)
}

//console.log(`Total scores: ${sum}`); // 14


// for(i in num){   //only takes the key as a parameter
//     //console.log(i+':'+num[i]);
//     //console.log(num[i]);
//     // if(i==2) break;
//     // else{
//         console.log(i);
//         console.log(num[i]);
//     //}
// }

// for(i in obj){
//     console.log(`${i}:${obj[i]}`);
//     console.log(i);
//     console.log(obj[i]);
// }

// let sum = 0;
// num.forEach(myFunction);
// console.log(sum);
// function myFunction(item) {
//   sum += item;
// }

// num.forEach(func);
// function func(item,index){
//     console.log(index);
// }
