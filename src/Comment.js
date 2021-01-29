import React, { useState } from 'react'
import './App.css';
import Welcome from './video'

// function SayHello({ text }) {

//     // const date = new Date()
//     return (
//         <Welcome text={text} />
//     );
// };

function LeaveTheComment() {
    const [comm, updateComm] = useState('blabla')

    return (
        <div >
            <form >
                <label htmlFor='button'>
                    <input
                        value={comm}
                        id='button-size'
                        className='button'
                        onChange={event => updateComm(event.target.value)}
                    >
                    </input>
                </label>
            </form>
            <button
                onClick={Welcome(comm)}
                className='button2'
            >
                Leave comment!!!</button>
        </div>
    )
}

export default LeaveTheComment;