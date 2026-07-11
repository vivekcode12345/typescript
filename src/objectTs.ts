const chai={
    type: "Masala",
    sugar: 2,
    strong: true
};


let tea: {
    name : string;
    price : number;
    isHot : boolean;
}

tea={
    name: "Green Tea",
    price: 3.5,
    isHot: true
}

type Tea={
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: Tea ={
    name: "Adrak Chai",
    price: 4.0,
    ingredients: ["water", "milk", "sugar", "ginger", "tea leaves"]
}

type cup = { size: string };

let smallcup: cup = { size: "small"};

let bigcup = { size: "500", material: "ceramic"};
smallcup = bigcup; // This will cause an error because bigcup has an extra property 'material' that smallcup does not have.

type Brew ={ brewTime: number };
const coffee = { brewTime: 5 }; // This is valid because coffee has the required property brewTime, even though it does not explicitly declare that it is of type Brew.

const chaiBrew : Brew =coffee; // This is valid because coffee has the required property brewTime, so it can be assigned to a variable of type Brew.

type user={
    username: string;
    password: string;
}

const u: user ={
    username: "john_doe",
    password: "securepassword123"
}

type Item= {name : string, quantity: number};
type Address= {street : string, pin: number};

type Order ={
    id : string;
    items: Item[];
    shippingAddress: Address;
}


// type Chai={
//     name: string;
//     price: number;
//     isHot: boolean;
// }

// const updateChai = (updates : Partial<Chai>) => {
//     console.log("Updating chai with the following properties:", updates);
// }
// console.log("Before update:", chai);
// updateChai({ price: 4.5, isHot: false });


type orderChai= {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<orderChai>) => {
    console.log("Placing order with the following details:", order);
}

placeOrder({ name: "Masala Chai", quantity: 2 });

type Chai ={
    name : string;
    price : number;
    isHot : boolean;
    ingredients : string[];
}

type BasicChaiInfo= Pick<Chai, "name" | "price">;
const ChaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 3.5
}
 

type NewChai ={
    name : string;
    price : number;
    isHot : boolean;
    secretIngredients : string[];
}

type PublicChaiInfo = Omit<NewChai, "secretIngredients">;
const publicChai: PublicChaiInfo = {
    name: "Herbal Tea",
    price: 4.0,
    isHot: true
}