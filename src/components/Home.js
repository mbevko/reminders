import React, { useState } from 'react';
import List from './List';
import ListForm from './ListForm';

export default function Home () {
    const [titleColor,
        setTitleColor] = useState({});

    const [newList,
        setNewList] = useState([])

    const handleTitleColor = ({target}) => {
        
        const {name, value} = target;
        setTitleColor((prev) => ({
            ...prev,
            [name]: value,
            id: Date.now(),
            app: <List />
        }));
    };

    const submitSettings = (e) => {
        e.preventDefault()
        setNewList((prevList) => [
            ...prevList,
            titleColor
        ])
        //setCreateList(true)
    }
    

    return(
        <div>
            <ListForm handleTitleColor={handleTitleColor} submitSettings={submitSettings}/>
            {newList.map((todoapp) => {
                return( 
                    <div>
                        <h1 style={{color: todoapp.color}}>{todoapp.title}</h1>
                        {todoapp.app}
                    </div>
                    )
            })}
        </div>
    )
}

