import Cuisine from './Cuisine';
import Home from './Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Pages() {
	return (
		<Routes>
			<Route element={<Home />} path='/' />
			<Route element={<Cuisine />} path='/cuisine' />
		</Routes>
	);
}

export default Pages;
