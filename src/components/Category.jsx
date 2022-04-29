import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import {NavLink} from 'react-router-dom';

function Category() {
    return (
        <List>
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
        </List>
    )
};


const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Category;