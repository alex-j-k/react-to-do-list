import React from 'react';
import {useState} from 'react';

const Input = (props) => {

    const [job, setJob] = useState();

    const handleChange = (e) => {
        const currentText = e.target.value;
        setJob(currentText);
        console.log(currentText);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = job;
        props.makeList(newTask);
        console.log(newTask);
    }

    return ( 
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Add your task in here!'  onKeyUp={handleChange}/>
            <button id='sub'>Add task</button>
        </form>
     );
}
 
export default Input;
