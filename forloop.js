let pets = ['dog', 'cat', 'lizard']

pets[3] = 'rabbit';

pets['name'] = 'pawan';
console.log(pets);
pets.sirname = 'bansari';

let person = {name: "Pawan", lastname: "Bansari", age: 34}
person.status = 'married';

for(i=0 ; i<pets.length ; i++){
    //if(pets[i] == 'cat') break;
    console.log(i);
    console.log(pets[i]);
}

for(let property in person){
    if(person.lastname == 'Bansari') break;
    console.log(`${property}:${person[property]}`)
}

for(let petid in pets){
    if(pets[petid] == 'cat') break;
    console.log(`${petid}:${pets[petid]}`);
}

for(let petid of pets){
    if(pets[petid] == 'cat') break;
    console.log('-----',petid);
}
