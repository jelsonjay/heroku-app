import {
	ThemeProvider,
	createMuiTheme,
	Paper,
	Container,
	CssBaseline
} from '@material-ui/core';
import HomeScreen from './screens/HomeScreen';
import ChooseScreen from './screens/ChooseScreen';
import OrderScreen from './screens/OrderScreen';
import ReviewScreen from './screens/ReviewScreen';
import SelectPaymentScreen from './screens/SelectPaymentScreen';
import PaymentScreen from './screens/PaymentScreen';
import CompleteOrderScreen from './screens/CompleteOrderScreen';
import ErrorPage from './components/404';
import { Route, Routes } from 'react-router-dom';

const theme = createMuiTheme({
	typography: {
		h1: { fontWeight: 'bold' },
		h2: { fontSize: '2rem', color: '#000' },
		h3: { fontSize: '1.8rem', fontWeight: 'bold', color: '#fcfafa' },
		palette: {
			primary: { main: '#f3b121' },
			secondary: { main: '#fa921bc8', contrastText: '#fff' }
		}
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth='md'>
				<Paper>
					<Routes>
						<Route path='/' element={<HomeScreen />}></Route>
						<Route path='/choose' element={<ChooseScreen />}></Route>
						<Route path='/order' element={<OrderScreen />}></Route>
						<Route path='/review' element={<ReviewScreen />}></Route>
						<Route
							path='/select-payment'
							element={<SelectPaymentScreen />}
						></Route>
						<Route path='/payment' element={<PaymentScreen />}></Route>
						<Route path='/complete' element={<CompleteOrderScreen />}></Route>
						<Route path='*' element={<ErrorPage />} />
					</Routes>
				</Paper>
			</Container>
		</ThemeProvider>
	);
}

export default App;
