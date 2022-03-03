import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { useValidate } from 'app/hooks/useValidate'
import { I_INPUTS_PROPS_MAP } from 'app/interfaces'
import { useState } from 'react'

export const INPUT_PROPS_MAP: I_INPUTS_PROPS_MAP = {
	amount: { m: 1, margin: '10px', width: '210px' },
	card: { m: 1, margin: '10px', width: '200px' },
	expdate: { m: 1, margin: '10px', width: '170px' },
	cvv: { m: 1, margin: '10px', width: '90px' },
}

export const CustomInput = (props: { Icon: JSX.Element; label: string; TYPE: keyof typeof INPUT_PROPS_MAP }) => {
	const { Icon, label, TYPE } = props
	const _sx = INPUT_PROPS_MAP[TYPE]
	const [previosValue, set] = useState('')
	// let prev_value: string
	let { value, checkValue, isCorrect } = useValidate()
	console.dir(isCorrect)
	return (
		<TextField
			InputProps={{
				endAdornment: (
					<InputAdornment sx={{ width: '500', height: '500' }} position="end">
						{Icon}
					</InputAdornment>
				),
			}}
			value={isCorrect ? previosValue : value}
			onChange={({ target: { value } }) => {
				if (!isCorrect) set(value)
				// isCorrect = false

				checkValue({ val: value, TYPE })
			}}
			sx={_sx}
			id="filled-basic"
			label={label}
			variant="filled"
		/>
	)
}
