var obj = {name:'pawan', lastname:'bansari', age:26};

var num = [1,2,3,4,5,6];

for(i=0; i<num.length; i++){
    console.log(i);
    console.log(num[i]);
}

for(i of num){
    console.log(i);
    console.log(num[i]);
}

for(i in num){
    console.log(i);
    console.log(num[i]);
}
