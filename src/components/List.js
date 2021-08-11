import React, {useState} from 'react';
import ToDo from './ToDo';
import Header from './Header';
import Inputs from './Inputs';
import './list.css'

export default function List() {

    const [item,
        setItem] = useState({});
    const [list,
        setList] = useState([]);

    const handleChange = (e) => {

        setItem({
            value: e.target.value,
            name: Math.random() + 1
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setList([
            ...list,
            item
        ])
        setItem({value: ''})
    }

    const handleRemove = (e) => {
        let name = e
            .target
            .getAttribute("name")
        setList(list.filter(item => item.value !== name))

    }

    return (
        <>
            {<Header list={list}/>}
            <ToDo handleRemove={handleRemove} list={list}/>
            <Inputs handleChange={handleChange} handleSubmit={handleSubmit} item={item}/>
        </>
    )
}

/* I want to crate an array of lists each list needs to be a signed a title and a
 color (for now) then i want to print all the lists on the screen this is
 essentially just like creating a basic todo list First you would save it to
 an array Once you mapp out the array you would like into the arrany and it
 would have an object with a name, a color, and a <todoLiist/> element as the
 final value. */