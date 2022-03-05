import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { useValidate } from 'app/hooks/useValidate'
import { I_INPUTS_PROPS_MAP, I_V_STATUS_MAP } from 'app/interfaces'
import { useState } from 'react'
import { vMap } from 'components/forms/payment.form'
import _ from 'lodash-es'

const V_STATUS_MAP: I_V_STATUS_MAP = {
	empty: { color: 'primary', status: 'empty' },
	typing: { color: 'info', status: 'typing' },
	correct: { color: 'success', status: 'correct' },
	error: { color: 'error', status: 'error' },
}
const _types = ['amount', 'card', 'expdate', 'cvv']

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
	cbb: (isValid: boolean) => void
}) => {
	console.dir(vMap)
	const { Icon, label, TYPE, Length, cbb } = props
	const sx = INPUT_PROPS_MAP[TYPE]
	const [isFocused, setFocus] = useState(false)
	const [previosValue, setPreviosValue] = useState('')
	const { value, checkValue, VSTATUS, SET_ERROR } = useValidate()
	const { color: Color } = V_STATUS_MAP[VSTATUS]
	const Value = VSTATUS === 'correct' ? (TYPE === 'amount' ? value : previosValue) : value
	const OnChange = (value: string) => {
		TYPE === 'amount' &&
			(value.length !== 0 ? vMap.set(TYPE, { isValid: true }) : vMap.set(TYPE, { isValid: false }))
		setFocus(true)
		VSTATUS !== 'correct' && setPreviosValue(value)
		checkValue({ value, TYPE })
		SET_ERROR(false)
	}
	const Label = `${label}${isFocused ? (Length ? `(${Length})` : '') : ''}`
	VSTATUS === 'correct' ? vMap.set(TYPE, { isValid: true }) : vMap.set(TYPE, { isValid: false })
	if (VSTATUS !== 'empty' && vMap.size > 0)
		_types.map(v => vMap.get(v)).filter(v => v?.isValid).length === 3 ? cbb(false) : cbb(true)

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
			onChange={({ target: { value } }) => OnChange(value)}
			sx={sx}
			id="filled-basic"
			label={Label}
			variant="filled"
		/>
	)
}
