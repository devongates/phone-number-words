const dict = require('../resources/numberToWord').default
const findWords = (numberArray) => {
	const number = numberArray.join('')
	const words = []
	var wordSize = number.length
	while (wordSize > 0) {
		var firstIt = 0
		var lastIt = firstIt + wordSize
		while (lastIt < number.length) {
			const slicedNumber = number.slice(firstIt, lastIt + 1)
			if (dict.hasOwnProperty(slicedNumber)) {
				const results = dict[slicedNumber]
				const lNumber = number.slice(0, firstIt)
				const rNumber = number.slice(lastIt + 1, number.length)
				console.log(results);
				for (const result of results) {
					words.push(lNumber + ' ' + result.toUpperCase() + ' ' + rNumber)
				}
			}
			lastIt += 1
			firstIt += 1
		}
		wordSize -= 1
	}
	return words
}

export default findWords
