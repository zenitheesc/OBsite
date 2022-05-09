export function applyTemplate(templates, binary) {
	const currBinary = JSON.parse(JSON.stringify(binary));
	const filledTemplate = [];
	for (const template of templates) {
		if (currBinary.length === 0) break;
		template.value = BinToData[template.typeName](template, currBinary);
		filledTemplate.push(template);
	}

	return filledTemplate;
}

function toByteString(template, byteArray) {
	let binString = "";
	for (let i = 0; i < template.size; i++) {
		binString += byteArray[i].toString(2).padStart(8, '0');
	}
	return binString;
}

function binToInt(template, binary) {
	let byteArray = binary.splice(0, template.size).reverse();

	let binString = toByteString(template, byteArray);

	return parseInt(binString, 2)
}

function binToBoolean(template, binary) {
	let byte = binary.splice(0, template.size).reverse();
	return byte > 0
}

function binToFloat(template, binary) {

	let byteArray = binary.splice(0, template.size).reverse();
	let binString = "";
	let floatNumber;

	for (let i = 0; i < template.size; i++) {
		binString += byteArray[i].toString(2).padStart(8, '0');
	}

	let numberOfBytes = (template.size == 4) ? 9 : 12;
	let sizeInBits = (template.size == 4) ? 32 : 64;

	let exponent = parseInt((binString.slice(1, numberOfBytes)), 2) - 127;
	let mantissa = parseInt('1' + binString.slice(numberOfBytes, sizeInBits), 2) / (2 ** 23);

	let absFloatNumber = 2 ** exponent * mantissa;

	floatNumber = (binString[0] === '0') ? (absFloatNumber) : (-absFloatNumber);

	return parseFloat(floatNumber.toPrecision(10));

}

function binToString(template, binary) {

	const byteArray = binary.splice(0, binary.findIndex(value => value === 0));
	binary.shift();
	return String.fromCharCode(...byteArray);

}

const BinToData = {
	"int": binToInt,
	"float": binToFloat,
	"string": binToString,
	"boolean": binToBoolean
}