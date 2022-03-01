import { INPUT_MAP } from 'components/inputs/input';
import { useState } from 'react';
import validator from 'validator';

export const useValidate = () => {
	const [value, checkValue] = useState<{ val: string; TYPE: keyof typeof INPUT_MAP }>({ val: '', TYPE: 'card' });
	const { TYPE, val } = value;

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

		if (TYPE === 'cvv')
			if (validator.isNumeric(val))
				if (val.length <= 3) _value = val;
				else _value = val.substr(0, val.length - 1);
			else _value = val.substr(0, val.length - 1);
		// if (TYPE === 'expdate')
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
