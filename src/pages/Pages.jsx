import Home from './Home';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

function Pages() {
    return (
        <Routes>
            <Home />
        </Routes>
    )
}

export default Pages;