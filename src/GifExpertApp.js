import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['Naruto']);

    /* const handleAdd = () => {
        //setCategories( ...Categories, 'hunterxhunter' );
        setCategories( cats => [...cats, 'hunterxhunter']);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            <ul>
                { 
                    Categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={ category }
                        />
                    ))
                }
            </ul>
        </>
    )
};

export default GifExpertApp;

