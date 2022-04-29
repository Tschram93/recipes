import Cuisine from './Cuisine';
import Home from './Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Pages() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Cuisine />} path='/cuisine' />
			</Routes>
		</BrowserRouter>
	);
}

export default Pages;
