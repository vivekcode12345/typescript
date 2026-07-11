// class chai {
//     flavour: string;
//     price: number;

//     // constructor(flavour: string, price: number){
//     //     this.flavour = flavour;
//     //     this.price = price;
//     // }

//     constructor(flavour: string, ){
//         this.flavour = flavour;
//         console.log(this);
//     }
// }

// const masalaChai = new chai("ginger", 5);
// masalaChai.flavour = "Spicy";

class chai{
    public flavour: string="masala chai";
    private secretingrideint: string= "cardamom";
    reveal(){
        return this.secretingrideint; // private property can be accessed inside the class
    }
}

const c=new chai();
console.log(c.flavour);
console.log(c.reveal());

class shop{
    protected shopcorner =" corner shop";
}

class  Branch extends shop{
    getname(){
        return this.shopcorner; // protected property can be accessed inside the class and its subclasses
    }
}
new Branch().getname();

class wallet{
    #balance : number=1000; // private property
    getBalance(){
        return this.#balance; // private property can be accessed inside the class
    }
}

const w= new wallet();
console.log(w.getBalance());


class cup{
    readonly capacity: number = 500; // readonly property
    constructor(capacity: number){
        this.capacity = capacity;
    }
}

class modernChai{
    private _sugar=2;
    get sugar(){
        return this._sugar;
    }
    set sugar(value: number){
        if(value<0){
            throw new Error("Sugar cannot be negative");
        }
        this._sugar=value;
    }
}

const d = new modernChai();
d.sugar = 5;
console.log(d.sugar);

class EkChai{
    static shopname = "Ek Chai";
    constructor(public flavour:string ){
    }
}
console.log(EkChai.shopname)

abstract class drink{
    abstract make(): void
}

class MyChai extends drink{
    make(){
        console.log("Making chai");
    }
}

class heater{
    heat(){
        console.log("Heating chai");
    }
}

class ChaiMaker{
    constructor(private heater: heater){
    }
    make(){
        this.heater.heat();
    }
}

