import React from 'react';
import {useState} from 'react';
import Modal from './Modal';

function Todo(props) { //text property on props
    //useState is a hook -> directly called in a component function/class
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    
    function deleteHandler(){ //don't execute function while calling
        setModalIsOpen(true);
        //console.log('Clicked');
        //console.log(props.text);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    //Can use && instead of ternary operator
    return (
        <div className='card'>
        <h2>{props.text}</h2>
          <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
          </div>
          {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>: null }
        </div>
    );
}

export default Todo;
//Class name because attribute in React != property in html