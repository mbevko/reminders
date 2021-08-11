import React, { useState } from 'react';
import List from './List';
import ListForm from './ListForm';

export default function Home () {
    const [titleColor,
        setTitleColor] = useState({});

    const [newList,
        setNewList] = useState([])

        //NEW LIST VIEW

    const [createList, setCreateList] = useState(true)

    const handleCreateList = () => {
        setCreateList(true)
    }

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
        setCreateList(false)
    }
    

    return(
        <div className="home_page">
            {createList ? 
            <div>
                <ListForm handleTitleColor={handleTitleColor} submitSettings={submitSettings}/>
            </div>
            :
            <div>
                {newList.map((todoapp) => {
                    return( 
                        <div>
                            <h1 style={{color: todoapp.color}}>{todoapp.title}</h1>
                            {todoapp.app}
                        </div>
                        )
                })}
                <button onClick={handleCreateList}>Add List</button>
            </div>
            }
        </div>
    )
}

