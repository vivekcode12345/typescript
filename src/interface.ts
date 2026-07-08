console.log("Welcome to the Chai Shop!")
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder){
    console.log(`Making a chai with type: ${order.type}, sugar: ${order.sugar}, strong: ${order.strong}`);
}

function serveChai(order: ChaiOrder){
    console.log(`Serving a chai with type: ${order.type}, sugar: ${order.sugar}, strong: ${order.strong}`);
}

makeChai({type: "Masala", sugar: 2, strong: true});
serveChai({type: "Masala", sugar: 2, strong: true});


type TeaRecipe = {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 20;
}

interface cupSize{
    size: "small" | "medium" | "large";
}

class Chai implements cupSize {
    size: "small" | "medium" | "large" = "medium";
}

const myChai = new Chai();
console.log(`My chai size is: ${myChai.size}`);


type teaType = "Green" | "Black" | "Herbal";

function orderTea(type: teaType){
    console.log(`Ordering a ${type} tea`);
}

orderTea("Green");

type BaseTea = {teaLeaves : number};
type GreenTea = {masala : number};

type Tea = BaseTea & GreenTea;

const myTea: Tea = {
    teaLeaves: 5,
    masala: 2
};
console.log(`My tea has ${myTea.teaLeaves} tea leaves and ${myTea.masala} masala.`);

type user={
    username: string;
    bio?: string;
}

const u1: user = {"username": "chai"}
console.log(`User: ${u1.username}, Bio: ${u1.bio ?? "No bio provided"}`);

const u2: user={"username": "chai", "bio": "I love chai!"}
console.log(`User: ${u2.username}, Bio: ${u2.bio}`);

type Config={
    readonly appName: string;
    version : number;
}

const cfg: Config = {
    appName: "ChaiApp",
    version: 1.0
};
// cfg.appName = "NewChaiApp"; // This will cause an error because appName is readonly
console.log(`App Name: ${cfg.appName}, Version: ${cfg.version}`);