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
	regexp?: (value: string) => string
}

export enum II {
	'amount',
	'card',
	'expdate',
	'cvv',
}
