import React from 'react';
import '../App.css';
import Clock from 'react-live-clock';

function Header() {
    return (
        <div className='live-time'>
            <p>Current time is: <Clock format={'HH:mm:ss'} ticking={true} /> </p>
        </div>
    );
}
export default Header;