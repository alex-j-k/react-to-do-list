import React from 'react';
import {useState} from 'react';

const ToDo = (props) => {

    const [click, setClick] = useState(['Make my to-do-list'])


const handleCrossout =(e) => {
    // console.log(e.target.parentElement.firstElementChild.innerHTML.style.textDecoration)
//    click === 'active' ? setClick(null) : setClick('active')
const itemClicked = e.target.parentElement.firstElementChild.innerHTML;

setClick([...click, itemClicked]);
if (props.checkList.includes(itemClicked)){e.target.parentElement.firstElementChild.className = 'active'}


}

    return ( 
    <div className='itemcont'>{props.checkList.map(singleItem => 
    <div className='item'> 
    <p>{singleItem}</p>
    <button className='crossout' onClick={handleCrossout}>Cross out task</button>
    </div> )}</div>
     );
}
 
export default ToDo;