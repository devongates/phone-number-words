#!/usr/bin/python3

import re

numberDict = {
    0: [],
    1: [],
    2: ['A', 'B', 'C', 'a', 'b', 'c'],
    3: ['D', 'E', 'F', 'd', 'e', 'f'],
    4: ['G', 'H', 'I', 'g', 'h', 'i'],
    5: ['J', 'K', 'L', 'j', 'k', 'l'],
    6: ['M', 'N', 'O', 'm', 'n', 'o'],
    7: ['P', 'Q', 'R', 'S', 'p', 'q', 'r', 's'],
    8: ['T', 'U', 'V', 't', 'u', 'v'],
    9: ['W', 'X', 'Y', 'Z', 'w', 'x', 'y', 'z'],
}

letterDict = {}
for k, v in numberDict.items():
    for x in v:
        letterDict.setdefault(x, k)

parsedWords = []
wordToNumberDict = {}

pattern = re.compile('[\W_]+')

with open('words.txt', 'r') as readFile:
    words = readFile.read()
    parsedWords = [pattern.sub('', word) for word in words.split('\n')][0:-1]
    for word in parsedWords:
        number = ''
        for letter in word:
            number += str(letterDict[letter])
        wordToNumberDict[word] = number

numberToWordDict = {v: k for k, v in wordToNumberDict.items()}

with open('numberToWord.js', 'w') as writeFile:
    writeFile.write('const numberToWord = ')
    writeFile.write(("{" + "\n".join("{!r}: {!r},".format(k, v)
                    for k, v in numberToWordDict.items()) + "}"))
    writeFile.write('export default numberToWord')
