import { minus1, re } from 'app/hooks/useValidate'

export const expdate_Validate = (v: string) => {
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

export const expdate_Check = (value: string) =>
	/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(value)
