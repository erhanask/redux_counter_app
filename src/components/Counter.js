import React, {useState} from "react";

import {useSelector, useDispatch } from "react-redux";
import {increment,decrement,incrementByAmount} from "../redux/counter/counterSlice";

export const Counter = () => {
    const [amount,setAmount] = useState(0);
    const countValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <div>
                {countValue}
            </div>
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(increment())}>Increment</button>
            </div>
            <div>
                <input type={`number`} value={amount} onChange={(e) => {setAmount(e.target.value)}} placeholder={`enter number`}/>
                <button onClick={() => dispatch(incrementByAmount(amount))}>Increment By Value</button>

            </div>
        </div>
    )
}
