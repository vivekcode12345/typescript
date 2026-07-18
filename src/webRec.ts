import axios, { type AxiosResponse } from "axios";
interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async ()=>{
    try{
        const response: AxiosResponse<Todo[]> = await axios.get("https://jsonplaceholder.typicode.com/todos"); 
        console.log(response.data);
    } 
    catch (error: any) {
        console.error("Error fetching data:", error);

        if(axios.isAxiosError(error)){
            console.error("Axios Error:", error.response?.data);
            if(error.response){
                console.error("Status Code:", error.response.status);
            }
        }
    }
}


// axios.get("https://api.example.com/data")
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });