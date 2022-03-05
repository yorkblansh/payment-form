import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

type btn_variant = 'text' | 'outlined' | 'contained'
export interface ISubmitButton {
	(props: { label: string; btn_variant: btn_variant; disabled: boolean }): JSX.Element
}

export const SubmitButton: ISubmitButton = ({ label, btn_variant, disabled }) => (
	<Box sx={{ '& button': { m: 1 } }}>
		<Button {...{ disabled }} variant={btn_variant} size="large">
			{label}
		</Button>
	</Box>
)
