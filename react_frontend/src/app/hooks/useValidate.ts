/* eslint-disable react-hooks/rules-of-hooks */
import { INPUT_PROPS_MAP } from 'components/inputs/input'
import { useState } from 'react'
import { I_INPUTS_PROPS_MAP, T_vStatus } from 'app/interfaces'
import { expdate_correct, expdate_Validate } from 'app/expdate.validate'

type hook_data = { value: string; TYPE: keyof typeof INPUT_PROPS_MAP }
type TcheckValue = (obj: hook_data) => void

export const re = (str: string) => (re: RegExp) => re.test(str)
export const minus1 = (str: string) => str.substr(0, str.length - 1)

const INPUTS_CHECK_REGEXP_MAP: I_INPUTS_PROPS_MAP = {
	card: {
		res: v => ({
			value: re(v)(/\b\d{1,16}\b/) ? v.replace(/\D/g, '') : v.replace(/\D/g, ''),
			VSTATUS: re(v)(/\b\d{16}/) ? 'correct' : re(v)(/\b\d{1,16}/) ? 'typing' : 'empty',
		}),
	},
	amount: {
		res: v => ({
			value: re(v)(/\d/) ? v.replace(/\D/g, '') : v.replace(/\D/g, ''),
			VSTATUS: re(v)(/\d\b/) ? 'correct' : 'correct',
		}),
	},
	expdate: {
		res: v => ({
			value: expdate_Validate(v),
			VSTATUS: expdate_correct(v) ? 'correct' : 'error',
		}),
	},
	cvv: {
		res: v => ({
			value: re(v)(/\b\d{1,3}\b/) ? v.replace(/\D/g, '') : v.replace(/\D/g, ''),
			VSTATUS: re(v)(/\b\d{3}/) ? 'correct' : re(v)(/\b\d{1,3}/) ? 'typing' : 'empty',
		}),
	},
}

export const useValidate = () => {
	const [error, SET_ERROR] = useState(false)
	const HOOK: any = useState<hook_data>({ value: '', TYPE: 'card' })
	const [_checked_value, checkValue]: [hook_data, TcheckValue] = HOOK
	const { TYPE, value: val } = _checked_value
	const { res } = INPUTS_CHECK_REGEXP_MAP[TYPE]
	const isAllGood = res && val
	const { VSTATUS, value }: { value: string; VSTATUS: T_vStatus } = isAllGood
		? res(val)
		: { value: '', VSTATUS: 'empty' }
	return {
		value,
		checkValue,
		VSTATUS: error ? 'error' : VSTATUS,
		SET_ERROR,
	}
}
