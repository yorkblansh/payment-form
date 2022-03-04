export interface I_INPUTS_PROPS_MAP {
	amount: T_default_prop
	card: T_default_prop
	expdate: T_default_prop
	cvv: T_default_prop
}

export type Tcolor = 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning'

type T_default_prop = {
	_color?: Tcolor
	m?: number
	margin?: string
	width?: string
	res?: (value: string) => {
		value: string 
		isCorrect: boolean
	}
}

export enum II {
	'amount',
	'card',
	'expdate',
	'cvv',
}
