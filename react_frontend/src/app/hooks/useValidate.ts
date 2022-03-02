import { INPUT_PROPS_MAP } from 'components/inputs/input'
import { useState } from 'react'
import validator from 'validator'
import { I_INPUTS_PROPS_MAP } from 'app/interfaces'

type hook_data = { val: string; TYPE: keyof typeof INPUT_PROPS_MAP }

const re = (str: string) => (re: RegExp) => re.test(str)
const minus1 = (str: string) => str.substr(0, str.length - 1)

const expdate = (v: string) => {
	let y
	if (re(v)(/^\d{1,2}$/)) {
		if (re(v)(/^\d{2}$/)) {
			y = `${v}/`
		} else y = v
	} else if (re(v)(/^\d{2}[/]\d{1,2}$/)) {
		if (re(v)(/^\d{2}[/]\d{2}$/)) {
			y = `${v}/`
		} else y = v
	} else if (re(v)(/^\d{2}[/]\d{2}[/]\d{1,4}$/)) {
		y = v
	} else if (re(v)(/^\d{2}[/]\d{2}[/]\d{5}$/)) {
		y = minus1(v)
	} else y = minus1(v)
	return y
}
// 	return dv
// }

// re(v)(/\d{1,2}/)
// 	? re(v)(/\d{2}/)
// 		? v.replace(/\d{2}/, `${v}`)
// 		: v
// 	: re(v)(/\d{2}[/]\d{1,2}/)
// 	? re(v)(/\d{2}[/]\d{2}/)
// 		? v
// 		: v
// 	: minus1(v)

const CHECK_RE_MAP: I_INPUTS_PROPS_MAP = {
	card: { regexp: v => (re(v)(/\b\d{1,16}\b/) ? v : minus1(v)) },
	amount: { regexp: v => (re(v)(/\d{1,}\b/) ? v : minus1(v)) },
	expdate: { regexp: v => expdate(v) },
	cvv: { regexp: v => (re(v)(/\b\d{1,3}\b/) ? v : minus1(v)) },
}

export const useValidate = () => {
	const [value, checkValue] = useState<hook_data>({ val: '', TYPE: 'card' }),
		{ TYPE, val } = value,
		{ regexp } = CHECK_RE_MAP[TYPE],
		isAllGood = regexp && val
	return { value: isAllGood ? regexp(val) : '', checkValue }
}

const DateFormator = (dt: string) => {
	var reGoodDate = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/
	console.dir(reGoodDate.test(dt))
	console.dir(reGoodDate)
}
