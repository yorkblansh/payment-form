import { re } from 'app/hooks/useValidate'

export const expdate_Validate = (v: string) =>
	re(v)(/^\d{1,2}$/)
		? re(v)(/^\d{2}$/)
			? `${v}/`
			: v
		: re(v)(/^\d{2}[/]\d{1,4}$/)
		? re(v)(/^\d{2}[/]\d{4}$/)
			? v
			: v
		: v.replace(/[^0-9/]/g, '').substr(0, 7)
// if (re(v)(/^\d{1,2}$/))
// 	if (re(v)(/^\d{2}$/)) y = `${v}/`
// 	else y = v
// else if (re(v)(/^\d{2}[/]\d{1,4}$/))
// 	if (re(v)(/^\d{2}[/]\d{4}$/)) y = v
// 	else y = v
// else y = v.replace(/[^0-9/]/g, '').substr(0, 7)
// return y

export const expdate_correct = (value: string) => /^((0?[1-9]|1?[012])[- /.][0-9]{4}.?)*$/.test(value)
