import { applyTemplate } from "./apply-template.js"

export function buildJSON(template, binary, exampleJSON) {

	const answer = applyTemplate(template, binary);

	let json = getJSON(exampleJSON.payload, answer);
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