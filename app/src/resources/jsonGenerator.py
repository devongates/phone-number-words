#!/usr/bin/python

parsedWords = []

with open('words.txt', 'r') as readFile:
    words = readFile.read()
    parsedWords = words.split('\n')
    parsedWords = parsedWords[0:-1]
    parsedWords = ''.join(["'%s',\n" % word.rstrip() for word in parsedWords])

with open('words.js', 'w') as writeFile:
    writeFile.write(parsedWords)