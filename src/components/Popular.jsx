import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Popular = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		// Runs getPopular function as soon as the component is mounted
		getPopular();
	}, []);

	const getPopular = async () => {
		// Fetch api and utilizing .env file for security of the api key information
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
		);
		// Gives json format for the api data to interact with
		const data = await api.json();
		setPopular(data.recipes);
	};

	return (
		<div>
			{/* using map to go through the API json data and outputting a recipe title
			 */}
			{popular.map((recipe) => {
				return (
					<Wrapper>
						{/* Wrapper: styled-component: see bottom of page*/}
						<h3>Popular Picks</h3>
						{popular.map((recipe) => {
							return (
								<Card>
									{/* Card: styled-component: see bottom of page*/}
									{/* recipe.title from api; needs key to avoid errors */}
									<p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
								</Card>
							);
						})}
					</Wrapper>
				);
			})}
		</div>
	);
};

const Card = styled.div`
	border-radius: 2rem;
	min-height: 25rem;
`;

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

export default Popular;
