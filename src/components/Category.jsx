import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import {NavLink} from 'react-router-dom';

function Category() {
    return (
        <List>
            <NavLink>
                <FaIcons.FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink>
                <FaIcons.FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink>
                <GiIcons.GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink>
                <GiIcons.GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
        </List>
    )
};


const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Category;