// let pets = ['dog', 'cat', 'lizard'];
// pets.name = 'bot';

// for(petid in pets){
//     if(pets[petid] == 'cat') break;
//     console.log(`${petid} : ${pets[petid]}`);
// }

// /*for(i=0; i<pets.length; i++){
//     console.log(pets);
// }*/

// pets.forEach(petid => {
//     if(pets[petid] == 'cat'){ 
//         break;
//     }
// }
// )

let person = {name:'Pawan', lastname:'Bansari', age:26};
person.friend = 'Parth';

for(i in person){
    console.log(i)
}

for(i in person){
    console.log(person[i]);
}

for(i in person){
    console.log(`${i}:${person[i]}`);
}