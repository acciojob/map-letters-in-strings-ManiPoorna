//your JS code here. If required.
//your JS code here. If required.
const word = prompt();
alert(mapLetters(word))

function mapLetters(word) {
	let ansObj = {};
	for (let letter of word) {
		ansObj[`${letter}`] = [];
	}
	for (let i = 0; i < word.length; i++) {
		ansObj[`${word[i]}`].push(i);
	}
	return ansObj
}
