import React from 'react';

export default function Inputs ({handleSubmit, handleChange, item}) {
    return(
        <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={item.value}/>
        </form>
    )
}