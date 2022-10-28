class ToDo {
	constructor(name, description) {
		this.name = name;
		this.description = description;
		this.isDone = false;
	}

	isDone() {
		return this.isDone;
	}

	complete() {
		this.isDone = true;
	}
}

export default ToDo;
