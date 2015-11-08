export class Names {
	firstName = "Jakub";
	lastName = "Jedryszek";
	names = [];

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	create() {
		this.names.push(this.fullName);
	}

	delete (index) {
		this.names.splice(index, 1);
	}

	edit (index) {
		this.editing = index;
		this.temp = this.names[index];
	}

	save (index) {
		this.editing = undefined;
		this.names[index] = this.temp;
	}
}