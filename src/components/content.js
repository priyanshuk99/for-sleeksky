import React, { useContext } from 'react';
import { TimeContext } from '../countcontext'

function Content(props) {
    const [time] = useContext(TimeContext);
    const array = [...time]
    array.reverse();
    return (
        <div>
            <div id='content'>
                {array.map((timing, index) => (
                    <div key={index}>You clicked at : {timing}<br /></div>
                ))}
            </div>
        </div>
    );
}

export default Content;