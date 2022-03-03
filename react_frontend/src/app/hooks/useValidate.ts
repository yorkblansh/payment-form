import { INPUT_PROPS_MAP } from 'components/inputs/input'
import { useState } from 'react'
import { I_INPUTS_PROPS_MAP } from 'app/interfaces'

type hook_data = { val: string; TYPE: keyof typeof INPUT_PROPS_MAP }

const re = (str: string) => (re: RegExp) => re.test(str)
const minus1 = (str: string) => str.substr(0, str.length - 1)

const expdate_Validate = (v: string) => {
	let y
	if (re(v)(/^\d{1,2}$/))
		if (re(v)(/^\d{2}$/)) y = `${v}/`
		else y = v
	else if (re(v)(/^\d{2}[/]\d{1,2}$/))
		if (re(v)(/^\d{2}[/]\d{2}$/)) y = `${v}/`
		else y = v
	else if (re(v)(/^\d{2}[/]\d{2}[/]\d{1,4}$/)) y = v
	else if (re(v)(/^\d{2}[/]\d{2}[/]\d{5}$/)) y = minus1(v)
	else y = minus1(v)
	return y
}
const expdate_Check = (value: string) =>
	/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(value)

const INPUTS_CHECK_REGEXP_MAP: I_INPUTS_PROPS_MAP = {
	card: {
		res: v => ({
			value: re(v)(/\b\d{1,16}\b/) && v,
			isCorrect: re(v)(/\b\d{16,17}\b/),
		}),
	},
	amount: {
		res: v => ({
			value: re(v)(/\d+\b/) ? v : minus1(v),
			isCorrect: re(v)(/\d{1,}\b/),
		}),
	},
	expdate: {
		res: v => ({
			value: expdate_Validate(v),
			isCorrect: expdate_Check(v),
		}),
	},
	cvv: {
		res: v => ({
			value: re(v)(/\b\d{1,3}\b/) && v,
			isCorrect: re(v)(/\b\d{3,4}\b/),
		}),
	},
}

export const useValidate = () => {
	const [_checked_value, checkValue] = useState<hook_data>({ val: '', TYPE: 'card' }),
		{ TYPE, val } = _checked_value,
		{ res } = INPUTS_CHECK_REGEXP_MAP[TYPE],
		isAllGood = res && val,
		{ isCorrect, value } = isAllGood ? res(val) : { value: '', isCorrect: false }
		
	return { value, checkValue, isCorrect }
}
