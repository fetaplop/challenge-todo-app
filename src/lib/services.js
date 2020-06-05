import axios from "axios"

class Todo {
    constructor() {
        this.todo = axios.create({
            baseURL: "http://localhost:4000",
            withCredentials: true
        })
    }

    getAll() {
        return this.todo
        .get("/todos")
        .then((response) => response.data)
        // err ?
    }

    createNew(newTodo) {
        return this.todo
        .post("/todos", newTodo)
        .then((response) => response.data)
    }
}

const todoServices = new Todo() 
export default todoServices