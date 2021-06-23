import React, { useContext } from 'react';
import '../App.css'
import { CountContext, TimeContext } from '../countcontext'


function SideBar(props) {

    const [count, setCount] = useContext(CountContext);
    const [time, setTime] = useContext(TimeContext);

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    var today = new Date();
    var h = addZero(today.getHours());
    var m = addZero(today.getMinutes());
    var s = addZero(today.getSeconds());
    var curtime = h + ":" + m + ":" + s;


    const SetFunction = () => {
        setCount(count + 1);
        setTime([
            ...time,
            curtime
        ]);
    }

    return (
        <div>
            <button className='clickbox' onClick={SetFunction}>Click Here</button>
        </div>
    );
}

export default SideBar;