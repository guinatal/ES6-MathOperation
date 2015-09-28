'use strict';

/*
	Verifications
*/
class Verifications {

	/*
		Constructor
	*/
	constructor() {

	}

	/*
		IsNumber
	*/
	isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

}

/*
	MathOperation
*/
class MathOperation extends Verifications {

	/*
		Constructor
	*/
	constructor() {
		super();
	}

	/*
		Addition
	*/
	addition(x, y) {

		if (this.isNumber(x) && this.isNumber(y)) {
			console.log(x + y);
			return x + y;
		}

	}

	/*
		Subtraction
	*/
	subtraction(x, y) {

		if (this.isNumber(x) && this.isNumber(y)) {
			console.log(x - y);
			return x - y;
		}

	}

	/*
		Multiplication
	*/
	multiplication(x, y) {

		if (this.isNumber(x) && this.isNumber(y)) {
			console.log(x * y);
			return x * y;
		}

	}

	/*
		Division
	*/
	division(x, y) {

		if (this.isNumber(x) && this.isNumber(y)) {
			console.log(x / y);
			return x / y;
		}

	}

}