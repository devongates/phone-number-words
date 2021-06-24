import React from 'react'
import Container from 'react-bootstrap/Container'
import Keypad from './Keypad'
import Display from './Display'
import Results from './Results'
import findWords from './util/wordFinder'
import { useState, useEffect } from 'react'

function App() {
	const [phoneNumber, setPhoneNumber] = useState([])
	const [phoneNumberWords, setPhoneNumberWords] = useState([])

	useEffect(() => {
		console.log(phoneNumber)
		console.log(findWords(phoneNumber))
		setPhoneNumberWords(findWords(phoneNumber))
	}, [phoneNumber])

	const handleClick = (num) => {
		if (phoneNumber.length < 10) {
			setPhoneNumber([...phoneNumber, num])
		}
	}

	const handleClear = () => {
		setPhoneNumber([])
	}

	const handleBackspace = () => {
		if (phoneNumber) {
			const newNumber = [...phoneNumber]
			newNumber.pop()
			setPhoneNumber(newNumber)
		}
	}

	return (
		<Container className='p-3'>
			<Display phoneNumber={phoneNumber} />
			<Keypad
				handleClick={handleClick}
				handleClear={handleClear}
				handleBackspace={handleBackspace}
			/>
			<Results phoneNumberWords={phoneNumberWords} />
		</Container>
	)
}

export default App
