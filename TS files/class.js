var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var employee = /** @class */ (function () {
    function employee() {
    }
    // constructor(name:string,id:number){
    //     this.name = name;
    //     this.id = id;
    // }
    employee.prototype.disp = function () {
        console.log('Name: ' + this.name);
        console.log('ID: ' + this.id);
    };
    return employee;
}());
// var pawan = new employee();
// pawan.name = 'Pawan';
// pawan.id = 1;
// pawan.disp();
// console.log(pawan.name);
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    manager.prototype.disp = function () {
        //super.disp();
        console.log("Manager's name: " + this.name);
    };
    return manager;
}(employee));
var senil = new manager();
senil.name = 'Senil';
senil.id = 1;
//console.log(senil.disp());
senil.disp();
