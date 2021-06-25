import React from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

const Results = ({ phoneNumberWords }) => {
	return (
		<Container className='my-3'>
			<ListGroup>
				{phoneNumberWords.map((word) => {
					return <ListGroupItem>{word}</ListGroupItem>
				})}
			</ListGroup>
		</Container>
	)
}

export default Results
