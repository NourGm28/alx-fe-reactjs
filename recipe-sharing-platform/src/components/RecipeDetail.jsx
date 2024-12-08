import React from 'react';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const RecipeDetail = () =>  {
    const  {id} = useParams();
    const [recdata, setRecData]= useState([]);

    useEffect(() => {
        fetch('/src/data.json')
        .then((res) => res.json())
        .then((data) => {
            const recipeData = data.find((recdata) => recdata.id === id);
            setRecData(recipeData);
        });
    },[id]);

    if (!recdata) {
        return <p>Loading...</p>;
    }


    return (
        <div className='container shadow-lg bg-white p-2 m-2'>
            <h1>{recdata.title}</h1>
            <img 
            src={recdata.image}
            alt={recdata.title}
            />
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
    <ul className="list-disc list-inside mb-4">
        {recdata.ingredients.map((ingredient, index) => (
        <li key={index} className="text-lg">
            {ingredient}
        </li>
        ))}
    </ul>
    <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
    <ol className="list-decimal list-inside text-lg">
        {recdata.instructions.map((step, index) => (
        <li key={index} className="mb-2">
            {step}
        </li>
        ))}
    </ol>
        </div>
    )
}

export default RecipeDetail;