import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Display = (props) => {
	const { phoneNumber } = props
	return (
		<Container>
			<Col md={{ span: 6, offset: 3 }}>
				<Container className='text-center'>
					{phoneNumber.map((number) => {
						return number
					})}
				</Container>
				<hr></hr>
			</Col>
		</Container>
	)
}

export default Display
