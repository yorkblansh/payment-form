import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const PaperBackground = (props: { children: React.ReactNode }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				alignContent: 'center',
				flexDirection: 'column',
				height: '100vh',
			}}>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					alignContent: 'center',
					flexDirection: 'row',
					height: '100vh',
					'& > :not(style)': {
						m: 1,
						width: 560,
						height: 280,
						alignSelf: 'center',
					},
				}}>
				<Paper elevation={3}>{props.children}</Paper>
			</Box>
		</Box>
	);
};
