import React from 'react';
import { Card, CardActionArea, Box, Typography } from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
	const navigate = useNavigate();
	const styles = useStyles();

	// const onClick = () => {
	// 	setTimeout(() => {
	// 		navigate('/choose');
	// 	}, 500);
	// };

	return (
		<>
			<Card>
				<CardActionArea onClick={() => navigate('/choose')}>
					<Box className={[styles.root, styles.Bcolor]}>
						<Box className={[styles.main, styles.center]}>
							<Typography component='h3' variant='h3'>
								Fast & Food
							</Typography>
							<Typography component='h1' variant='h1'>
								Order <br /> & Pay <br /> Here
							</Typography>
							<TouchAppIcon fontSize='large'></TouchAppIcon>
						</Box>
						<Box className={[styles.center, styles.footer]}>
							<Logo large></Logo>
							<Typography component='h5' variant='h5'>
								Start here
							</Typography>
						</Box>
					</Box>
				</CardActionArea>
			</Card>
		</>
	);
}

export default HomeScreen;
