interface chai{
    flavour: string;
    price: number;
}

const masalaChai: chai = {
    flavour: "ginger",
    price: 5
}

//console.log(masalaChai.flavour, masalaChai.price);


interface shop{
    readonly id: number;
    name: string;
}

const s : shop={
    id: 1,
    name: "corner shop"
}
//console.log(s.id, s.name);

// interface for function

interface discountCalculator{
    (price: number) : number;
}

const apply50: discountCalculator =(p) => p*0.5;
//console.log(apply50(100));

// interface for class
interface TeaMachine{
    start(): void;
    stop(): void;
}
const machine: TeaMachine={
    start(){
        console.log("Machine started");
    },
    stop(){
        console.log("Machine stopped");
    }
}
//console.log(machine.start());

// interface for array

interface chaiRating{
    [flavour: string]: number;
}

const ratings : chaiRating = {
    "masala": 4.8,
}
//console.log(ratings["ginger"]);



interface user{
    name: string;
}

interface user{
    age: number;
}

const u: user ={
    name: "John",
    age: 30
}
console.log(u.name, u.age);

interface A{ a: number }
interface B{ b: number }

interface C extends A, B{
    c: number;
}

