function getchai(kind: string | number){
    if(typeof kind === 'string'){
        return `The order is ${kind}`;
    }
    return `The order number is ${kind}`;
}

function serveChai(msg? : string){
    if(msg){
        return `Serving ${msg}`;
    }
    return 'Serving masala chai';
}

function orderChai(size : 'small' | 'medium' | 'large'){
    if(size === 'small'){
        return 'Serving small chai';
    }
    if(size === 'medium'){
        return 'Serving medium chai';
    }
    return 'Serving large chai';
}

class kulhadChai{
    serving(){
        return 'Serving kulhad chai';
    }
}

class glassChai{
    serving(){
        return 'Serving glass chai';
    }
}

function serve(chai : kulhadChai | glassChai){
    if(chai instanceof kulhadChai){
        return chai.serving();
    }
    return chai.serving();
}


type chaiOrder={
    type : string,
    sugar: number,
}

function isChaiOrder(obj: any): obj is chaiOrder{
    return(
        typeof obj === 'object' && obj !== null && 
        typeof obj.type === 'string' && typeof obj.sugar === 'number'
    )
}

function serveChaiOrder(order: chaiOrder | string){
    if(isChaiOrder(order)){
        return `Serving ${order.type} with ${order.sugar} sugar`;
    }
    return `Serving ${order}`;
}

type MasalaChai= {type: 'masala', spicelevel: number};
type GingerChai= {type: 'ginger', amount: number};
type elachiChai= {type: 'elachi', aroma: number};

type chai= MasalaChai | GingerChai | elachiChai;

function serveChaiType(order: chai){
    switch(order.type){
        case 'masala':
            return `Serving masala chai with spice level ${order.spicelevel}`;
        case 'ginger':
            return `Serving ginger chai with amount ${order.amount}`;
        case 'elachi':
            return `Serving elachi chai with aroma ${order.aroma}`;
    }
}