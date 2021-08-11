import React from 'react';

export default function ListForm({handleTitleColor, submitSettings}) {

    return (

        <form>
            <input
                value={handleTitleColor.title}
                name="title"
                placeholder='Title'
                onChange={handleTitleColor}/>
            <input
                value={handleTitleColor.color}
                name="color"
                placeholder='Color'
                onChange={handleTitleColor}/>
            <button onClick={submitSettings}>Submit</button>
        </form>
    )
}