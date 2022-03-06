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
import axios from 'axios'

type onSubmitEvent_Obj = { preventDefault: () => void; target: { elements: any } }

export const vMap = new Map<string, { isValid: boolean }>()
export const PaymentForm = () => {
	const [disabled, Vcheck] = useState(true)
	const cbv = (v: boolean) => Vcheck(v)

	return (
		<form onSubmit={(e: any) => OnSubmit(e)}>
			<BoxWrap sx={sx1}>
				<CustomInput {...{ cbv }} Length="16" Icon={<CreditCardIcon />} label="Card Number" TYPE="card" />
				<CustomInput {...{ cbv }} Icon={<EventIcon />} label="Expiration Date" TYPE="expdate" />
				<CustomInput {...{ cbv }} Length="3" Icon={<CreditCardSharpIcon />} label="CVV" TYPE="cvv" />
			</BoxWrap>
			<BoxWrap sx={sx2}>
				<CustomInput {...{ cbv }} Icon={<PriceChangeIcon />} label="Amount" TYPE="amount" />
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

const OnSubmit = (e: onSubmitEvent_Obj) => {
	e.preventDefault()
	const els: any = e.target.elements
	const el = (key: string) => els.namedItem(key)?.value
	axios
		.post('/pay_post', {
			amount: el('amount'),
			card: el('card'),
			cvv: el('cvv'),
			date: el('date'),
			expdate: el('expdate'),
		})
		.then(res => {
			const {
				your_payment_data: { id, amount },
			} = res.data
			console.table(res.data)
			alert(`id:${id}, amount:${amount}`)
		})
}
