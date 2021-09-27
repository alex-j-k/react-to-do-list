import React from 'react'
import Input from './input'
import ToDo from './ToDo';

const NotePad = (props) => {
    return (  
        <div className="notepad">
            <h5>Things I need to do today...</h5>
            <ToDo checkList={props.checkList}></ToDo>
            <Input makeList={props.makeList}></Input>
        </div>

    );
}
 
export default NotePad;