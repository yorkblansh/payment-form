import BoxWrap from '@mui/material/Box'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import EventIcon from '@mui/icons-material/Event'
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp'
import PriceChangeIcon from '@mui/icons-material/PriceChange'
import { CustomInput } from 'components/inputs/input'
import { SubmitButton } from 'components/buttons/btns'
import { div_style, sx1, sx2 } from './style.objects'
import { useState } from 'react'

export const vMap = new Map<string, { isValid: boolean }>()
export const PaymentForm = () => {
	const [disabled, Vcheck] = useState(true)
	const cbb = (v: boolean) => Vcheck(v)
	return (
		<>
			<BoxWrap sx={sx1}>
				<CustomInput {...{ cbb }} Length="16" Icon={<CreditCardIcon />} label="Card Number" TYPE="card" />
				<CustomInput {...{ cbb }} Icon={<EventIcon />} label="Expiration Date" TYPE="expdate" />
				<CustomInput {...{ cbb }} Length="3" Icon={<CreditCardSharpIcon />} label="CVV" TYPE="cvv" />
			</BoxWrap>
			<BoxWrap sx={sx2}>
				<CustomInput {...{ cbb }} Icon={<PriceChangeIcon />} label="Amount" TYPE="amount" />
				<div style={div_style}>
					<SubmitButton {...{ disabled }} label="Оплатить" btn_variant="contained" />
				</div>
			</BoxWrap>
		</>
	)
}
