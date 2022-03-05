import { minus1, re } from 'app/hooks/useValidate'

export const expdate_Validate = (v: string) => {
	let y
	if (re(v)(/^\d{1,2}$/))
		if (re(v)(/^\d{2}$/)) y = `${v}/`
		else y = v
	else if (re(v)(/^\d{2}[/]\d{1,2}$/))
		if (re(v)(/^\d{2}[/][1][012]$/)) y = `${v}/`
		else y = minus1(v)
	else if (re(v)(/^\d{2}[/]\d{2}[/]\d{2}$/)) y = v
	// else if (re(v)(/^(\d{2}[/]\d{2}[/]\b\d{2})*$/)) y =v
	else y =v.substr(0,7)
	return y
}

export const expdate_typing = (value: string) =>
	/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.][0-9]{1}\b)*$/.test(value)

export const expdate_correct = (value: string) =>
	/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.]\b[0-9]{2})*$/.test(value)
// /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(value)
