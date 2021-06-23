import React, { useContext } from 'react';
import { CountContext } from '../countcontext'

function Footer(props) {
    const [count] = useContext(CountContext);
    return (
        <div>
            <div>You clicked {count} time</div>
        </div>
    );
}

export default Footer;