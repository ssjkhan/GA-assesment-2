import * as database from "../services/database.js";
import Todo from "../models/todo.js";

function main(req, res, next) {
	var todosArr = database.get();
	res.render("./index", {
		args: { title: "Unit-2-Assessment", todos: todosArr },
	});
}

function add(req, res, next) {
	if (req.body.title != "") {
		database.add(req.body.title);
	}
	res.redirect("/");
}

function remove(req, res, next) {
	console.log(req.body);
	res.send("we remove a todo");
}

export default main;
export { main, add, remove };
