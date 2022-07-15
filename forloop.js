let pets = ['dog', 'cat', 'lizard']

pets[3] = 'rabbit';

pets['name'] = 'pawan';

pets.sirname = 'bansari';

let person = {name: "Pawan", lastname: "Bansari", age: 34}
person.status = 'married';

for(i=0 ; i<pets.length ; i++){
    console.log(i);
    console.log(pets[i]);
}

for(let property in person){
    console.log(`${property}:${person[property]}`)
}

for(let petid in pets){
    console.log(`${petid}:${pets[petid]}`);
}

for(let petid of pets){
    console.log(petid);
}