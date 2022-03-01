import BoxWrap from '@mui/material/Box';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import CreditCardSharpIcon from '@mui/icons-material/CreditCardSharp';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { CustomInput } from 'components/inputs/input';
import { useState } from 'react';

interface State {
	amount: string;
	password: string;
	weight: string;
	weightRange: string;
	showPassword: boolean;
}

export const PaymentForm = ({ SubmitButton }: { SubmitButton: JSX.Element }) => {
	const [values, setValues] = useState<State>({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	});

	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<BoxWrap
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					margin: '18px',
					flexDirection: 'row',
				}}>
				<CustomInput Icon={<CreditCardIcon />} label="Card Number" TYPE="card" />
				<CustomInput Icon={<EventIcon />} label="Expiration Date" TYPE="expdate" />
			
				<CustomInput Icon={<CreditCardSharpIcon />} label="CVV" TYPE="cvv" />
			</BoxWrap>
			<BoxWrap
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					margin: '18px',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					alignContent: 'space-around',
				}}>
				<CustomInput Icon={<PriceChangeIcon />} label="Amount" TYPE="amount" />
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						margin: '18px',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						alignContent: 'space-around',
						width: '188px',
					}}>
					{SubmitButton}
				</div>
			</BoxWrap>
		</>
	);
};
