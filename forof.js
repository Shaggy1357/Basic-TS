//looping over arrays using forof loop

let num = [1,2,3,4,5];
num.push('Pawan');

let list = ['Pawan', 'Parth']
list.name = 'Pawan';

for(let i of num){
    console.log(i);
}

for(let i of list){
    console.log(i);
}

for(i in list){
    console.log(i);
}

for(i in list){
    console.log(list[i]);
}

/*for off is dependent of system generated indexes while forin can work with 
custom generated index.(Best for working with objects)*/