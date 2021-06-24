#!/usr/bin/python3

numberDict = {
	0: [],
	1: [],
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z'],
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