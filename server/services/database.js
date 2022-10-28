import database from "../config/database.js";
import Todo from "../models/todo.js";

function getToDos() {
	return database.todos;
}

function addToDo(name, description) {
	var todo = new Todo(name, description);
	database.todos.push(todo);
}

function removeToDo(id) {
	database.todos = database.todos.filter((todo) => todo.id != id);
}

export { getToDos as get, addToDo as add, removeToDo as remove };
