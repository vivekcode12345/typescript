let response: any= "10";

let numericLength: number = (response as string).length;

console.log(numericLength); // Output: 2


type Book= {
    name: string;
}

let bookString= '{ "name": "who moved my cheese" }';
let bookObject: Book= JSON.parse(bookString) as Book;

console.log(bookObject.name); // 

//const inputElement = document.getElementById("input") as HTMLInputElement;// This is a type assertion that tells TypeScript that inputElement is an HTMLInputElement

let value: any

value= 10;
value= "hello";
value= true;
value= [10,12,14];
// value.toUpperCase(); // This will cause a runtime error since value is not a string at this point

let Newvalue: unknown;

Newvalue= 10;
Newvalue= "hello";
Newvalue= true;
Newvalue= [10,12,14];
if(typeof Newvalue === "string"){
    Newvalue.toUpperCase(); // This is safe because we have checked that Newvalue is a string
}
//Newvalue.toUpperCase(); // This will cause a compile-time error since Newvalue is of type unknown and we cannot call methods on it without type assertion or type checking


try{

}
catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("An error occurred");
}

const data : unknown= "chai aur code";
const stringData: string = data as string; // Type assertion to convert unknown to string
console.log(stringData.toUpperCase()); // This is safe because we have converted unknown to string


type Role =  "admin" | "user" | "guest";
function redirectBasedOnRole(role: Role){
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
    }
    role;
} 

function neverReturn(): never{
    while(true){
        
    }
}
