//console.log('Declaring a string using string constructor');

//var str = new String("Hello World!");
// console.log(str);
// console.log(str.length);

// console.log('Declaring a string directly');

var str1 = "Hello World! world.";
// console.log(str1);

// console.log('Prototype');

// function employee(id, name) {
//     this.id = id;
//     this.name = name;
//     }
//     var emp = new employee(123, "Smith");
//     employee.prototype.email = "smith@abc.com";
//     console.log("Employee 's Id: " + emp.id);
//     console.log("Employee's name: " + emp.name);
//     console.log("Employee's Email ID: " + emp.email);
//     console.log(emp);

// for(i in str1){
//     // console.log(i);
//     // console.log(str1.charAt(i));
//     console.log(`${str1[i]} is at ${i}`)
// }

// console.log('Concatinating two strings');

// var str2 = ' This is my first concat test';
// str3 = str1.concat( str2 );
// console.log(str3);

// console.log('Finding the index of a string to find');

// str2 = str1.indexOf('World');
// console.log(str2);

// str2 = str1.lastIndexOf('World');
// console.log(str2);

// console.log('Comparing if a string matches another string using localeCompare');

// str2 = str1.localeCompare('Hello World! World.');
// console.log(str2);

// console.log('Finding a regular exp in a string using match method');
// str2 = str1.match(/World/gi);
// console.log(str2);

console.log('Finding matching strings using exec function.');

var str2 = 'This is second string. This is first string.';
var re = /this/gi;
do{
    var result = re.exec(str2);
    console.log(result);
}while(result!=null);