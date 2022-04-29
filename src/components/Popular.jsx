import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import '@splidejs/react-splide/css';

const Popular = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		// Runs getPopular function as soon as the component is mounted
		getPopular();
	}, []);

	const getPopular = async () => {
		const check = localStorage.getItem('popular');
		if (check) {
			setPopular(JSON.parse(check));
		} else {
			// Fetch api and utilizing .env file for security of the api key information
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
			);
			// Gives json format for the api data to interact with
			const data = await api.json();
                // Taking the api array data, turning it into a string and storing it into localstorage
            localStorage.setItem('popular', JSON.stringify(data.recipes))
			setPopular(data.recipes);
			console.log(data.recipes);
		}
	};

	return (
		<div>
			{/* using map to go through the API json data and outputting a recipe title
			 */}
			<Wrapper>
				{/* Wrapper: styled-component: see bottom of page*/}
				<h3>Popular Picks</h3>
				<Splide
					// Options customizes(styles)
					options={{
						arrows: false,
						drag: 'free',
						gap: '5rem',
						pagination: false,
						perPage: 4,
					}}
				>
					{popular.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								{/* Turns each Card into a Slide */}
								<Card>
									{/* Card: styled-component: see bottom of page*/}
									{/* recipe.title from api; needs key to avoid errors */}
									<p>{recipe.title}</p>
									<img src={recipe.image} alt={recipe.title} />
									<Gradient />
								</Card>
							</SplideSlide>
						);
					})}
				</Splide>
			</Wrapper>
		</div>
	);
};

const Card = styled.div`
	border-radius: 2rem;
	min-height: 25rem;
	overflow: hidden;
	position: relative;

	img {
		border-radius: 2rem;
		height: 100%;
		left: 0;
		object-fit: cover;
		position: absolute;
		width: 100%;
	}

	p {
		align-items: center;
		bottom: 0%;
		color: #fff;
		display: flex;
		font-size: 1rem;
		font-weight: 600;
		height: 40%;
		justify-content: center;
		position: absolute;
		left: 50%;
		text-align: center;
		transform: translate(-50%, 0%);
		width: 100%;
		z-index: 10;
	}
`;

const Gradient = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 3;
`;

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

export default Popular;
