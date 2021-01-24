import React, { useState } from 'react';
import './video.css';

function Welcome(props) {

    return (
        <div class="comments">
            <h1>Hello, {props.name} </h1>
            <h2>{props.text}</h2>

            <h2> leave comment </h2>
            <h3>{props.date}</h3>

        </div>
    )
}

function SayHello() {

    return (
        alert('you clicked me')
    );
};
function LeaveTheComment() {
    const [comm, updateComm] = useState('blabla')

    return (

        <div >
            <button onClick={SayHello} className='button'>
                Leave comment!!!</button>
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
        </div>
    )
}

const Video = () => {
    return (
        <div className='container'>
            <LeaveTheComment />
            <Welcome name="sara" text='balbla' date="today" />
            <Welcome name="viola" text='balbla' date="today" />
            <Welcome name="art" text='balbla' date="today" />
            <Welcome name="nina" text='balbla' date="today" />
            <Welcome name="olya" text='balbla' date="today" />

        </div>

    )

};

export default Video;