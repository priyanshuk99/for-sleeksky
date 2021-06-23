import React, { useState, createContext } from "react";

export const TimeContext = createContext();
export const CountContext = createContext();


export const CountProvider = props => {

    const [count, setCount] = useState(0);
    const [time, setTime] = useState([]);


    return (
        <CountContext.Provider value={[count, setCount]}>
            <TimeContext.Provider value={[time, setTime]}>
                {props.children}
            </TimeContext.Provider>
        </CountContext.Provider>

    )

}