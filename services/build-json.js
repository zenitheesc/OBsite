import { applyTemplate } from "./apply-template.js"
import { getTemplate } from "./get-template.js"

export function buildJSON(binary, exampleJSON) {

	const currExampleJSON = JSON.parse(JSON.stringify(exampleJSON));

	const template = getTemplate(currExampleJSON);
	const answer = applyTemplate(template, binary);
	const payload = currExampleJSON.payload ?? currExampleJSON;

	let json = getJSON(payload, answer);
	return json;

}

function getJSON(realJson, types) {
	let filledJSON = realJson;

	for (const type of types) {

		let tempJSON = filledJSON;
		let lastTag = type.path.pop();

		for (const tag of type.path) {
			tempJSON = tempJSON[tag];
		}

		tempJSON[lastTag] = type.value;

	}
	return filledJSON;
}