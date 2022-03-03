export interface I_INPUTS_PROPS_MAP {
	amount: prop
	card: prop
	expdate: prop
	cvv: prop
}

type prop = {
	m?: number
	margin?: string
	width?: string
	res?: (value: string) => {
		value: string | boolean
		isCorrect: boolean
	}
}

export enum II {
	'amount',
	'card',
	'expdate',
	'cvv',
}
