import React, { useEffect } from 'react';

const Popular = () => {
    useEffect(() => {
        // Runs getPopular function as soon as the component is mounted
        getPopular();
    }, [])
    const getPopular = async () => {
        // Fetch api and utilizing .env file for security of the api key information
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
        // Gives json format for the api data to interact with
        const data = await api.json();
        console.log(data);
    }

    return (
        <div>Popular</div>
    )
}

export default Popular;