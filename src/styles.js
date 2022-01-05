import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	main: {
		flex: 1,
		overflow: 'auto',
		flexDirection: 'column',
		display: 'flex',
		color: '#fff'
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	navy: {
		backgroundColor: '#1b7cd8'
	},
	Bcolor: {
		backgroundColor: '#e48509',
		color: '#fff'
	},
	logo: {
		height: 50
	},
	largeLogo: {
		height: 100
	},
	footer: {
		backgroundColor: '#4767ac'
	},
	cards: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	card: {
		margin: 10
	},
	title: {
		marginTop: 18,
		fontWeight: 'bold'
	},
	space: {
		padding: 10
	},
	media: {
		width: 200
	},
	largeButton: {
		width: 250
	},
	largeInput: {
		width: '60px!important',
		padding: '0!important',
		fontSize: '35px!important',
		textAlign: 'center!important'
	},
	bordered: {
		borderWidth: 2,
		borderRadius: 5,
		margin: 5,
		borderStyle: 'solid'
	},
	row: {
		display: 'flex',
		padding: 10
	},
	around: {
		justifyContent: 'space-around'
	},
	between: {
		justifyContent: 'space-between'
	},
	column: {
		flexDirection: 'column'
	}
}));
