const chaiFlavour: string[]= ["Animal", "Chai","Adrk"];
const chaiPRice: number[]= [10,20,40];

const rating : Array<number> = [4.5, 4.0, 3.5];

type chai={
    name: string;
    price: number;
    rating: number; 
}

const menu: chai[]= [
    {name: "Animal", price: 10, rating: 4.5},
    {name: "Chai", price: 20, rating: 4.0},
    {name: "Adrk", price: 40, rating: 3.5}
]

const cities: readonly string[] = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// cities.push("San Francisco"); // Error: Property 'push' does not exist on type 'readonly string[]'.

const table: number [][]=[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]

let ChaiTuple : [string, number]
ChaiTuple = ["Chai", 20]; // Valid assignment
ChaiTuple= ["Adrk", 40]; //Valid assignment

let userInfo : [string, number, boolean?];
userInfo = ["John Doe", 30]; // Valid assignment 
userInfo = ["Jane Smith", 25, true]; // Valid assignment with optional boolean

const location : readonly [number, number]= [40.7128, -74.0060]; // Valid assignment for a readonly tuple

const ChaiItem : [name:string, price:number, rating:number]= ["Chai", 20, 4.0]; // Valid assignment for a tuple with named elements

enum Cupsize{
    SMALL,
    MEDIUM,
    LARGE
}

const size= Cupsize.MEDIUM; // Valid assignment for an enum value

enum Status{
    PENDING=100,
    SERVED,
    CANCELLED
}

enum ChaiType{
    MASALA= "Masala",
    GINGER= "Ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making ${type} chai...`);
}

makeChai(ChaiType.MASALA); // Valid function call with enum value

enum Random{
    id = 11,
    NAME = "Chai",
}

const enum Sugars{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}

let t:[string, number ] =["Chai", 20];
t.push("extra")// Valid operation, but t is still of type [string, number] and the extra element is not part of the tuple type


