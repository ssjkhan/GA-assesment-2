import * as database from "../services/database.js";
import Todo from "../models/todo.js";
function main(req, res, next) {
	res.render("./index", { args: { title: "Unit-2-Assessment" } });
}

function add(req, res, next) {
	res.send("we added a todo");
}

function remove(req, res, next) {
	res.send("we remove a todo");
}

export default main;
export { main };
