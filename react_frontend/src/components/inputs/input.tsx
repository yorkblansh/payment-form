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
const all_input_types = ['amount', 'card', 'expdate', 'cvv']

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
	const Label = `${TYPE === 'expdate' && isFocused ? `mm/yyyy ${label}` : label}${
		isFocused ? (Length ? `(${Length})` : '') : ''
	}`
	VSTATUS === 'correct' ? vMap.set(TYPE, { isValid: true }) : vMap.set(TYPE, { isValid: false })
	if (VSTATUS === 'typing' || VSTATUS === 'correct')
		all_input_types.map(v => vMap.get(v)).filter(v => v?.isValid).length === 4 ? cbb(false) : cbb(true)

	const onMouseLeave = () =>
		VSTATUS === 'empty'
			? setFocus(false)
			: VSTATUS === 'typing'
			? TYPE === 'amount'
				? SET_ERROR(false)
				: SET_ERROR(true)
			: setFocus(true)

	return (
		<TextField
			id={TYPE}
			name={TYPE}
			InputProps={{
				endAdornment: (
					<InputAdornment sx={{ width: '500', height: '500' }} position="end">
						{Icon}
					</InputAdornment>
				),
			}}
			onMouseLeave={e => onMouseLeave()}
			onMouseEnter={e => setFocus(true)}
			onPointerEnter={e => setFocus(true)}
			focused={isFocused}
			color={Color}
			value={Value}
			onChange={({ target: { value } }) => OnChange(value)}
			sx={sx}
			label={Label}
			variant="filled"
		/>
	)
}
