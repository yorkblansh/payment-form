import { INPUT_PROPS_MAP } from 'components/inputs/input'
import { useState } from 'react'
import validator from 'validator'
import { I_INPUTS_PROPS_MAP } from 'app/interfaces'

type hook_data = { val: string; TYPE: keyof typeof INPUT_PROPS_MAP }

const re = (str: string) => (re: RegExp) => re.test(str)
const minus1 = (str: string) => str.substr(0, str.length - 1)

const expdate = (iv: string) => {
	let dv
	if (/\d/.test(iv) && iv.length <= 2) {
		dv = iv.replace(/\d\d/, `${iv}/`)
	} else {
		dv = iv.substr(0, iv.length - 1)
		if (/\d\d[/]\d/.test(iv) && iv.length <= 5) {
			dv = iv.replace(/\d\d[/]\d\d/, `${iv}/`)
		}
	}
	if (/(0?[1-9])[/]\d/.test(iv) && iv.length <= 5) {
		if (iv.length < 5) {
			dv = iv
		}
		// else _value = val.replace(/\d\d[/]\d\d/, `${val}/`);
	}
	if (/(0?[1-9])/)
		if (/\d/.test(iv)) {
			dv = iv
			// /\d\d/.test(val) ? (_value = val.replace(/\d\d/, `${val}/`)) : (_value = val.substr(0, val.length - 1));
		} else dv = iv.substr(0, iv.length - 1)

	return dv
}

const CHECK_RE_MAP: I_INPUTS_PROPS_MAP = {
	card: { regexp: v => (re(v)(/\b\d{1,16}\b/) ? v : minus1(v)) },

	amount: { regexp: v => (re(v)(/0?[1-9]{1,}/) ? v : minus1(v)) },

	expdate: { regexp: iv => expdate(iv) },

	cvv: { regexp: v => (re(v)(/\b\d{1,3}\b/) ? v : minus1(v)) },
}

export const useValidate = () => {
	const [value, checkValue] = useState<hook_data>({ val: '', TYPE: 'card' }),
		{ TYPE, val } = value,
		{ regexp } = CHECK_RE_MAP[TYPE]
	const isAllGood = regexp && val
	// let _value: string
	// if (regexp) _value = regexp(val, '')
	// else _value = ''
	// if (val) {
	// 	if (regexp)
	// 	card
	// 		? re(val)(/\b\d{1,16}\b/)
	// 			? (_value = val)
	// 			: (_value = val.substr(0, val.length - 1))
	// 		: amount
	// 		? validator.isNumeric(value.val)
	// 			? (_value = val)
	// 			: (_value = val.substr(0, val.length - 1))
	// 		: cvv
	// 		? re(val)(/\b\d{1,3}\b/)
	// 			? (_value = val)
	// 			: (_value = val.substr(0, val.length - 1))
	// 		: (_value = val.substr(0, val.length - 1));
	// 	if (TYPE === 'expdate') {
	// 		if (/\d/.test(val) && val.length <= 2) {
	// 			_value = val.replace(/\d\d/, `${val}/`);
	// 		} else {
	// 			_value = val.substr(0, val.length - 1);
	// 			if (/\d\d[/]\d/.test(val) && val.length <= 5) {
	// 				_value = val.replace(/\d\d[/]\d\d/, `${val}/`);
	// 			}
	// 		}
	// 		if (/(0?[1-9])[/]\d/.test(val) && val.length <= 5) {
	// 			if (val.length < 5) {
	// 				_value = val;
	// 			}
	// 			// else _value = val.replace(/\d\d[/]\d\d/, `${val}/`);
	// 		}
	// 		if(/(0?[1-9])/)
	// 		if (/\d/.test(val)) {
	// 			_value = val;
	// 			// /\d\d/.test(val) ? (_value = val.replace(/\d\d/, `${val}/`)) : (_value = val.substr(0, val.length - 1));
	// 		} else _value = val.substr(0, val.length - 1);
	// 	}
	// 		if (validator.isNumeric(val))
	// 			if (val.length <= 2) _value = `${val}/`;
	// 			else _value = val.substr(0, val.length - 1);
	// 		else if(validator.contains())
	// 		_value = val.substr(0, val.length - 1);
	// 		} else _value = val.substr(0, val.length - 1);
	// 	else _value = val.substr(0, val.length - 1);
	// }

	return { value: isAllGood ? regexp(val) : '', checkValue }
}

const DateFormator = (dt: string) => {
	var reGoodDate = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/
	console.dir(reGoodDate.test(dt))
	console.dir(reGoodDate)
}
