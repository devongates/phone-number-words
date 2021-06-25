import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaBackspace, FaTrash } from 'react-icons/fa'

const Keypad = ({ handleClick, handleClear, handleBackspace }) => {
	return (
		<Container>
			<Row>
				<ButtonGroup>
					<Button variant='light' onClick={() => handleClick(1)}>
						1
					</Button>
					<Button variant='light' onClick={() => handleClick(2)}>
						2
					</Button>
					<Button variant='light' onClick={() => handleClick(3)}>
						3
					</Button>
				</ButtonGroup>
			</Row>
			<Row>
				<ButtonGroup>
					<Button variant='light' onClick={() => handleClick(4)}>
						4
					</Button>
					<Button variant='light' onClick={() => handleClick(5)}>
						5
					</Button>
					<Button variant='light' onClick={() => handleClick(6)}>
						6
					</Button>
				</ButtonGroup>
			</Row>
			<Row>
				<ButtonGroup>
					<Button variant='light' onClick={() => handleClick(7)}>
						7
					</Button>
					<Button variant='light' onClick={() => handleClick(8)}>
						8
					</Button>
					<Button variant='light' onClick={() => handleClick(9)}>
						9
					</Button>
				</ButtonGroup>
			</Row>
			<Row>
				<ButtonGroup>
					<Button variant='light' onClick={() => handleClear()}>
						<FaTrash />
					</Button>
					<Button variant='light' onClick={() => handleClick(0)}>
						0
					</Button>
					<Button variant='light' onClick={() => handleBackspace()}>
						<FaBackspace />
					</Button>
				</ButtonGroup>
			</Row>
		</Container>
	)
}

export default Keypad
