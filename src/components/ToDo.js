import React from 'react';

export default function ToDo({ list, handleRemove }){
    return(
        <ul>
            {list.map((item, index) => {
                return <li key={index}>{item.value}<span name={item.value} onClick={handleRemove}>X</span></li>
            })}
        </ul>
    )
}
