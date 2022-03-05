import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { useValidate } from 'app/hooks/useValidate'
import { I_INPUTS_PROPS_MAP, I_V_STATUS_MAP } from 'app/interfaces'
import { useState } from 'react'

const V_STATUS_MAP: I_V_STATUS_MAP = {
	empty: { color: 'primary', status: 'empty' },
	typing: { color: 'info', status: 'typing' },
	correct: { color: 'success', status: 'correct' },
	error: { color: 'error', status: 'error' },
}

export const INPUT_PROPS_MAP: I_INPUTS_PROPS_MAP = {
	amount: { m: 1, margin: '10px', width: '210px' },
	card: { m: 1, margin: '10px', width: '200px' },
	expdate: { m: 1, margin: '10px', width: '170px' },
	cvv: { m: 1, margin: '10px', width: '90px' },
}

export const CustomInput = (props: {
	Length?: string
	Icon: JSX.Element
	label: string
	TYPE: keyof typeof INPUT_PROPS_MAP
}) => {
	const { Icon, label, TYPE, Length } = props
	const sx = INPUT_PROPS_MAP[TYPE]
	const [isFocused, setFocus] = useState(false)
	const [previosValue, setPreviosValue] = useState('')
	const { value, checkValue, VSTATUS, SET_ERROR } = useValidate()
	const { color: Color } = V_STATUS_MAP[VSTATUS]
	console.dir(`${TYPE} : ${VSTATUS}`)
	const Value = VSTATUS === 'correct' ? previosValue : value
	const _onChange = (value: string) => {
		setFocus(true)
		VSTATUS !== 'correct' && setPreviosValue(value)
		checkValue({ value, TYPE })
		SET_ERROR(false)
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
			onMouseLeave={e =>
				VSTATUS !== 'correct' ? (TYPE === 'amount' ? SET_ERROR(false) : SET_ERROR(true)) : setFocus(true)
			}
			onMouseEnter={e => setFocus(true)}
			onPointerEnter={e => setFocus(true)}
			focused={isFocused}
			color={Color}
			value={Value}
			onChange={({ target: { value } }) => _onChange(value)}
			sx={sx}
			id="filled-basic"
			label={`${label}${isFocused ? (Length ? `(${Length})` : '') : ''}`}
			variant="filled"
		/>
	)
}
