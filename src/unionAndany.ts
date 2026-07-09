let sub : number | string= '1M';

let apiRequestStatus: 'success' | 'failue' | 'pending' = 'success';

let airLine :'Air India' | 'Indigo' | 'Spice Jet' | 'Vistara';
airLine='Indigo';

const orders = [12,23,45,34,56,78,90];

let currentOrder;

for(let order of orders){
    if(order==28){
        currentOrder=order;
        break;
    }
}
console.log(currentOrder);

