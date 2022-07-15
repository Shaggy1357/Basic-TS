let pets = ['dog', 'cat', 'lizard']

console.log(pets)

for(i=0; i<pets.length; i++){
    //console.log(i);
    console.log(pets[i]);
}

pets.forEach(pet => {
    console.log(pet)
})

for(petid in pets){
    console.log(petid) //Gives indexes of lements in array
    console.log(pets[petid])
}