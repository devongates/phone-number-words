import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Display = ({ phoneNumber }) => {
	return (
		<Container>
			<Col md={{ span: 4, offset: 4 }}>
				<h2 className='text-center'>{phoneNumber.join('')}</h2>
				<hr></hr>
			</Col>
		</Container>
	)
}

export default Display
