// interface IPerson { 
//     firstName:string, 
//     lastName:string, 
//     sayHi: ()=>string 
//  } 
var Iobj = { v1: 12, v2: 23 };
//  console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
