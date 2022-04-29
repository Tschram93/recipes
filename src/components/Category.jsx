import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import {NavLink} from 'react-router-dom';

function Category() {
    return (
        <div>
            <div>
                <FaIcons.FaPizzaSlice />
                <h4>Italian</h4>
            </div>
            <div>
                <FaIcons.FaHamburger />
                <h4>American</h4>
            </div>
            <div>
                <GiIcons.GiNoodles />
                <h4>Thai</h4>
            </div>
            <div>
                <GiIcons.GiChopsticks />
                <h4>Japanese</h4>
            </div>
        </div>
    )
};

export default Category;