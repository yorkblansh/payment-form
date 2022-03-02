import { INPUT_MAP } from 'components/inputs/input';
import { useState } from 'react';
import validator from 'validator';

const re = (str: string) => (re: RegExp) => re.test(str);

export const useValidate = () => {
	const [value, checkValue] = useState<{ val: string; TYPE: keyof typeof INPUT_MAP }>({ val: '', TYPE: 'card' });
	const { TYPE, val } = value;
	const card = TYPE === 'card',
		amount = TYPE === 'amount',
		expdate = TYPE === 'expdate',
		cvv = TYPE === 'cvv';

	let _value;
	if (val !== undefined) {
		if (TYPE === 'card')
			if (validator.isNumeric(val))
				if (val.length <= 16) _value = val;
				else _value = val.substr(0, val.length - 1);
			else _value = val.substr(0, val.length - 1);

		if (TYPE === 'amount')
			if (validator.isNumeric(value.val)) _value = val;
			else _value = val.substr(0, val.length - 1);

		if (TYPE === 'cvv') re(val)(/\b\d{1,3}\b/) ? (_value = val) : (_value = val.substr(0, val.length - 1));
		if (TYPE === 'expdate') {
			// if (/\d/.test(val) && val.length <= 2) {
			// 	_value = val.replace(/\d\d/, `${val}/`);
			// } else {
			// 	_value = val.substr(0, val.length - 1);
			// 	if (/\d\d[/]\d/.test(val) && val.length <= 5) {
			// 		_value = val.replace(/\d\d[/]\d\d/, `${val}/`);
			// 	}
			// }
			// if (/(0?[1-9])[/]\d/.test(val) && val.length <= 5) {
			// 	if (val.length < 5) {
			// 		_value = val;
			// 	}
			// 	// else _value = val.replace(/\d\d[/]\d\d/, `${val}/`);
			// }
			// if(/(0?[1-9])/)
			// if (/\d/.test(val)) {
			// 	_value = val;
			// 	// /\d\d/.test(val) ? (_value = val.replace(/\d\d/, `${val}/`)) : (_value = val.substr(0, val.length - 1));
			// } else _value = val.substr(0, val.length - 1);
		}
		// 	if (validator.isNumeric(val))
		// 		if (val.length <= 2) _value = `${val}/`;
		// 		else _value = val.substr(0, val.length - 1);
		// 	else if(validator.contains())

		// 	_value = val.substr(0, val.length - 1);
		// 	} else _value = val.substr(0, val.length - 1);
		// else _value = val.substr(0, val.length - 1);
	}

	return { value: _value !== undefined ? _value : '', checkValue };
};

const DateFormator = (dt: string) => {
	var reGoodDate = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
	console.dir(reGoodDate.test(dt));
	console.dir(reGoodDate);
};
