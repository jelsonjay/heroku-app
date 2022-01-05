import React from 'react';
import { useStyles } from '../styles';

function Logo(props) {
	const styles = useStyles();
	return (
		<>
			<div>
				<img
					className={props.large ? styles.largeLogo : styles.logo}
					src='./images/logo.png'
					alt='fast-food'
				/>
			</div>
		</>
	);
}

export default Logo;
