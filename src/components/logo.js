import React from 'react';
import logo from '../logo.svg';
import '../App.css'
function Logo(props) {
    return (
        <div>
            <img src={logo} alt="logo" className='logoimg' height='100px' width='100px' />
        </div>
    );
}

export default Logo;