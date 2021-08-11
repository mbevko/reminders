import React from 'react';

export default function Inputs ({handleSubmit, handleChange, item}) {
    return(
        <form onSubmit={handleSubmit}>
              <button className="inCheck"></button>  <input onChange={handleChange} value={item.value}/>
        </form>
    )
}