#!/usr/bin/python3

numberDict = {
	0: [],
	1: [],
	2: ['A', 'B', 'C'],
	3: ['D', 'E', 'F'],
	4: ['G', 'H', 'I'],
	5: ['J', 'K', 'L'],
	6: ['M', 'N', 'O'],
	7: ['P', 'Q', 'R', 'S'],
	8: ['T', 'U', 'V'],
	9: ['W', 'X', 'Y', 'Z'],
}

letterDict = {}
for k,v in numberDict.items():
    for x in v:
        letterDict.setdefault(x,k)

parsedWords = []
wordToNumberDict = {}

with open('words.txt', 'r') as readFile:
    words = readFile.read()
    parsedWords = [word.rstrip() for word in words.split('\n')][0:-1]
    for word in parsedWords:
        number = ''
        for letter in word:
            number += str(letterDict[letter])
        wordToNumberDict[word] = number

numberToWordDict = {v:k for k, v in wordToNumberDict.items()}

with open('numberToWord.js', 'w') as writeFile:
    writeFile.write(("{" + "\n".join("{!r}: {!r},".format(k, v) for k, v in numberToWordDict.items()) + "}"))