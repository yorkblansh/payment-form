import { INPUT_PROPS_MAP } from 'components/inputs/input'

export type T_vStatus = keyof typeof E_inputStatus
export enum E_inputStatus {
	empty = 0,
	typing = 1,
	correct = 2,
	error = 3,
}

export interface IPaymentData {
	amount: number
	card: number
	expdate: string
	cvv: number
	date: Date
	id: string | number
}

export interface I_INPUTS_PROPS_MAP {
	amount: T_default_prop
	card: T_default_prop
	expdate: T_default_prop
	cvv: T_default_prop
}

type color_status = { color: Tcolor; status: T_vStatus }

export interface I_V_STATUS_MAP {
	empty: color_status
	typing: color_status
	correct: color_status
	error: color_status
}

enum E_color {
	'error',
	'primary',
	'secondary',
	'info',
	'success',
	'warning',
}
export type Tcolor = keyof typeof E_color

type T_default_prop = {
	_color?: Tcolor
	m?: number
	margin?: string
	width?: string
	res?: (value: string) => {
		value: string
		VSTATUS: T_vStatus
	}
}

export enum II {
	'amount',
	'card',
	'expdate',
	'cvv',
}

interface IProps {
	Length?: string
	Icon: JSX.Element
	label: string
	TYPE: keyof typeof INPUT_PROPS_MAP
	cbv: (isValid: boolean) => void
}

export type TCusInput = (props: IProps) => JSX.Element
