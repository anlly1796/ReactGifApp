import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one Punch', 'Dragon Ball'])

    const onAddCategory = (value) => {
        if (categories.includes(value)) return
        setCategories([value, ...categories])

    }

    return (
        <>
            <h1>GifApp</h1>
            <AddCategory
                onAddCategory={onAddCategory}
            />
            
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}


        </>
    )
}