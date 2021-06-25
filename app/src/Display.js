import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import formatter from './util/phoneNumberFormatter'

const Display = ({ phoneNumber }) => {
	return (
		<Container className='mt-3'>
			<h2 className='text-center p-0 m-0'>{formatter(phoneNumber.join(''))}</h2>
			<hr></hr>
		</Container>
	)
}

export default Display
