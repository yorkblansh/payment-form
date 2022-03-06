import BoxWrap from '@mui/material/Box'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import EventIcon from '@mui/icons-material/Event'
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp'
import PriceChangeIcon from '@mui/icons-material/PriceChange'
import { CustomInput } from 'components/inputs/input'
import { div_style, sx1, sx2 } from './style.objects'
import { useState } from 'react'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

export const vMap = new Map<string, { isValid: boolean }>()
export const PaymentForm = () => {
	const [disabled, Vcheck] = useState(true)
	const cbb = (v: boolean) => Vcheck(v)
	return (
		<form action="/pay_post" method="post">
			<BoxWrap sx={sx1}>
				<CustomInput {...{ cbb }} Length="16" Icon={<CreditCardIcon />} label="Card Number" TYPE="card" />
				<CustomInput {...{ cbb }} Icon={<EventIcon />} label="Expiration Date" TYPE="expdate" />
				<CustomInput {...{ cbb }} Length="3" Icon={<CreditCardSharpIcon />} label="CVV" TYPE="cvv" />
			</BoxWrap>
			<BoxWrap sx={sx2}>
				<CustomInput {...{ cbb }} Icon={<PriceChangeIcon />} label="Amount" TYPE="amount" />
				<div style={div_style}>
					<Box sx={{ '& button': { m: 1 } }}>
						<Button type="submit" disabled={disabled} variant="contained" size="large">
							Оплатить
						</Button>
					</Box>
				</div>
			</BoxWrap>
		</form>
	)
}
