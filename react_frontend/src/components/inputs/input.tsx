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

const COLORS_MAP = (vStatus: T_vStatus): I_INPUTS_PROPS_MAP => ({
	amount: { _color: vStatus === 'empty' ? 'primary' : 'success' },
	card: {
		_color:
			vStatus === 'empty'
				? 'primary'
				: vStatus === 'typing'
				? 'info'
				: vStatus === 'correct'
				? 'success'
				: 'primary',
	},
	expdate: { _color: vStatus ? 'info' : 'error' },
	cvv: {
		_color:
			vStatus === 'empty'
				? 'primary'
				: vStatus === 'typing'
				? 'info'
				: vStatus === 'correct'
				? 'success'
				: 'primary',
	},
})
export const INPUT_PROPS_MAP: I_INPUTS_PROPS_MAP = {
	amount: { m: 1, margin: '10px', width: '210px' },
	card: { m: 1, margin: '10px', width: '200px' },
	expdate: { m: 1, margin: '10px', width: '170px' },
	cvv: { m: 1, margin: '10px', width: '90px' },
}

export const CustomInput = (props: { Icon: JSX.Element; label: string; TYPE: keyof typeof INPUT_PROPS_MAP }) => {
	const { Icon, label, TYPE } = props
	const _sx = INPUT_PROPS_MAP[TYPE]
	const [previosValue, setPreviosValue] = useState('')
	let { value, checkValue, vStatus } = useValidate()
	const { color, status } = V_STATUS_MAP[vStatus]
	console.dir(`${TYPE} : ${vStatus}`)
	const _value = status === 'correct' ? previosValue : value
	const _onChange = (value: string) => {
		vStatus !== 'correct' && setPreviosValue(value)
		checkValue({ value, TYPE })
	}
	// const { _color } = COLORS_MAP(vStatus)[TYPE]

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
			sx={_sx}
			id="filled-basic"
			label={label}
			variant="filled"
		/>
	)
}
