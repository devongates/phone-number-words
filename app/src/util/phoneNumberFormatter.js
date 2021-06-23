const phoneNumberFormatter = (phoneNumber) => {
	if (phoneNumber.length < 3) {
		return phoneNumber
	}
	if (phoneNumber.length < 6) {
		return ['(', ...phoneNumber.slice(0, 3), ')', ' ', ...phoneNumber.slice(3)]
	}
	return [
		'(',
		...phoneNumber.slice(0, 3),
		')',
		' ',
		...phoneNumber.slice(3, 6),
		' ',
		...phoneNumber.slice(6),
	]
}

export default phoneNumberFormatter
