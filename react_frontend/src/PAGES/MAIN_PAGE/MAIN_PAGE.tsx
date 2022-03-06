/* eslint-disable react/jsx-pascal-case */
import { PaperBackground } from 'components/card/card'
import { PaymentForm } from 'components/forms/payment.form'
import { Header } from 'components/header/header'

export const MAIN_PAGE = () => (
	<PaperBackground>
		<Header label="Форма Оплаты" />
		<PaymentForm />
	</PaperBackground>
)
