function main(req, res, next) {
	res.render("./index", { title: "NewTitle" });
}

export default main;
export { main };
