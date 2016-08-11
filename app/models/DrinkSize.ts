export class DrinkSize {
	name: string;
	ounces: number;

	constructor(name: string, ounces: number) {
		this.name = name;
		this.ounces = ounces;
	}

	getName() {
		return this.name;
	}

	getOunces() {
		return this.ounces;
	}
}