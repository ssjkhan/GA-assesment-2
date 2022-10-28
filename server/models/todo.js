class ToDo {
	constructor(title) {
		this.title = title;
		this.status = false;
		this.iD = ToDo.counter++;
	}

	static counter = 0;

	isDone() {
		return this.status === false ? "Lots to do!" : "Done and dusted!";
	}

	complete() {
		this.isDone = true;
	}
}

export default ToDo;
