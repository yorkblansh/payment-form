import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { useValidate } from 'app/hooks/useValidate'
import { I_INPUTS_PROPS_MAP, I_V_STATUS_MAP, Tcolor, T_vStatus } from 'app/interfaces'
import { useState } from 'react'

const V_STATUS_MAP: I_V_STATUS_MAP = {
	empty: { color: 'primary', status: 'empty' },
	typing: { color: 'info', status: 'typing' },
	correct: { color: 'success', status: 'correct' },
}

export const INPUT_PROPS_MAP: I_INPUTS_PROPS_MAP = {
	amount: { m: 1, margin: '10px', width: '210px' },
	card: { m: 1, margin: '10px', width: '200px' },
	expdate: { m: 1, margin: '10px', width: '170px' },
	cvv: { m: 1, margin: '10px', width: '90px' },
}

export const CustomInput = (props: { Icon: JSX.Element; label: string; TYPE: keyof typeof INPUT_PROPS_MAP }) => {
	const { Icon, label, TYPE } = props
	const sx = INPUT_PROPS_MAP[TYPE]
	const [previosValue, setPreviosValue] = useState('')
	const { value, checkValue, VSTATUS } = useValidate()
	const { color, status } = V_STATUS_MAP[VSTATUS]
	console.dir(`${TYPE} : ${VSTATUS}`)
	const _value = status === 'correct' ? previosValue : value
	const _onChange = (value: string) => {
		VSTATUS !== 'correct' && setPreviosValue(value)
		checkValue({ value, TYPE })
	}

	return (
		<TextField
			InputProps={{
				endAdornment: (
					<InputAdornment sx={{ width: '500', height: '500' }} position="end">
						{Icon}
					</InputAdornment>
				),
			}}
			focused
			color={color}
			value={_value}
			onChange={({ target: { value } }) => _onChange(value)}
			sx={sx}
			id="filled-basic"
			label={label}
			variant="filled"
		/>
	)
}
