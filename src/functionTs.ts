function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type} chai...`);
}
makeChai("Masala", 2);

function getChaiPrice(): number{
    return 34
}

function makeOrder(order : string){
    if(!order) return null;
    return order;
} 

function logChai(): void{
    console.log("Chai is ready to serve!")
}

function orderChai(type: string= "Masala"){

}


function createChai (order: {type: string, cups: number,size: number}): number{
    return 4
}