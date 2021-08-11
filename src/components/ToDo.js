import React from 'react';

export default function ToDo({ list, handleRemove }){
    return(
        <ul>
            {list.map((item, index) => {
                return (
                    <div className="list_item">
                        <button className="checkbox" name={item.value} onClick={handleRemove}></button>
                        <li key={index}>{item.value}</li>
                    </div>
                )
            })}
        </ul>
    )
}
