class employee{
    name:string;
    id:number;

    // constructor(name:string,id:number){
    //     this.name = name;
    //     this.id = id;
    // }

    disp(){
        console.log('Name: '+this.name);
        console.log('ID: '+this.id);
    }
}

// var pawan = new employee();
// pawan.name = 'Pawan';
// pawan.id = 1;
// pawan.disp();
// console.log(pawan.name);

class manager extends employee{
    disp(){
        //super.disp();
        console.log("Manager's name: "+this.name);
    }
}

var senil = new manager();
senil.name = 'Senil';
senil.id = 1;
//console.log(senil.disp());
senil.disp();

