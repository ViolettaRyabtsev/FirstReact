import React from 'react';
import './video.css';
//import LeaveTheComment from './Comment'

function Welcome(text) {

    return (
        <div >
            <form >
                <label htmlFor='comments'>
                    <input
                        value={text}
                        className='comments'

                    >
                    </input>
                </label>
            </form>

        </div>
    )
}
export default Welcome;