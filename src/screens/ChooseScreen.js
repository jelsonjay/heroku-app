import React, { useContext } from 'react';
import {
	Fade,
	Box,
	Typography,
	Card,
	CardActionArea,
	CardMedia,
	CardContent
} from '@material-ui/core';
import { useStyles } from '../styles';
import { Store } from '../Store';
import { setOrderType } from '../actions';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';

export default function ChooseScreen(props) {
	const styles = useStyles();
	const { dispatch } = useContext(Store);
	const navigate = useNavigate();

	const chooseHandler = orderType => {
		setOrderType(dispatch, orderType);
		navigate('/order');
		//props.history.push('/order');
	};

	return (
		<Fade in={true}>
			<Box className={[styles.root, styles.navy]}>
				<Box className={[styles.main, styles.center]}>
					<Logo large></Logo>
					<Typography
						component='h3'
						variant='h3'
						className={styles.center}
						gutterBottom
					>
						Where will you be eating today?
					</Typography>
					<Box className={styles.cards}>
						<Card className={[styles.cards, styles.space]}>
							<CardActionArea onClick={() => chooseHandler('Eat in')}>
								<CardMedia
									component='img'
									alt='Eat in or out'
									image='./images/logo-5.png'
									className={styles.media}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h4'
										color='textPrimary'
										component='p'
									>
										Eat In
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className={[styles.card, styles.space]}>
							<CardActionArea onClick={() => chooseHandler('Take out')}>
								<CardMedia
									component='img'
									alt='Take Out'
									image='./images/takeaway-food.png'
									className={styles.media}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h4'
										color='textPrimary'
										component='p'
									>
										Take Out
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Box>
				</Box>
			</Box>
		</Fade>
	);
}
