import React from 'react';
import Router from './Router'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from './store/';


export default function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Router />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	);
}


