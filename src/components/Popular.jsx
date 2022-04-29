import React, { useEffect, useState } from 'react';

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
					<div key={recipe.id}>
                        {/* recipe.title from api; needs key to avoid errors */}
						<p>{recipe.title}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Popular;
