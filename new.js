var obj = {name:'pawan', lastname:'bansari', age:26};

var num = [1,2,3,4,5,6];

// for(i=0; i<num.length; i++){
//     console.log(i+':'+num[i]);
//     //console.log(num[i]);
// }

// for(i of num){
//     //console.log(i+':'+num[i]);
//     console.log(i);
// }

// for(i in num){   //only takes the key as a parameter
//     console.log(i+':'+num[i]);
//     console.log(num[i]);
// }

for(i in obj){
    console.log(`${i}:${obj[i]}`);
    console.log(i);
    console.log(obj[i]);
}

