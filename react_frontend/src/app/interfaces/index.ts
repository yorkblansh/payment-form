export type T_vStatus = keyof typeof E_inputStatus
export enum E_inputStatus {
	empty = 0,
	typing = 1,
	correct = 2,
}

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
		vStatus: T_vStatus
	}
}

export enum II {
	'amount',
	'card',
	'expdate',
	'cvv',
}
