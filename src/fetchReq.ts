interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


const fetchData = async (): Promise<Todo[]> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Todo[] = await response.json();
        return data;
    }
    catch (error: any) {
        console.error("Failed to fetch data:", error.message);
        throw error;
    }
}