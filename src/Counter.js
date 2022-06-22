import React, {useState} from "react";

function Counter() {
    const [number,setNumber] = useState(0)

    const CountPlus = () => {
        setNumber(number+1)
    }
    const CountMinus = () => {
        setNumber(number-1)
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={CountPlus}>+1</button>
            <button onClick={CountMinus}>-1</button>
        </div>
    )
}

export default Counter