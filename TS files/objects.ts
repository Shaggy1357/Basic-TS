interface details{
    firstname:string;
    lastname:string;
}

var person:details={
    firstname : "Pawan",
    lastname : "Bansari"
}
 var invokeperson = function(obj) { 
    console.log("first name :"+obj.firstname) 
    console.log("last name :"+obj.lastname) 
 } 
 invokeperson(person)