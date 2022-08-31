import React, { useState, useCallback, useEffect, useMemo } from "react";
import Button from "../UI/Button/Button";
import Span from "../UI/Span/Span";
import './Demo.css';

function Demo(){
    let[count, setCount] = useState(0);
    let [activate, setActivate] = useState(false);

    //0x12345 - 0x34567
    let incrementHandler = useCallback(function(){
        if(activate)
            setCount((count) => { return count + 1});
    }, [activate])

    let decrementHandler = useCallback(function(){
        if(activate)
            setCount(count - 1);
    }, [activate])

    function activateHandler(){
        setActivate(true);
        setCount(0)
    }

    let list = useMemo(() => {
        return [100, 200];
    }, []);

    console.log("DEMO EXECUTED");

    return <div>
        <Button clickHandler={decrementHandler}>-</Button>
        <Span>{list}</Span>
        <Button clickHandler={incrementHandler}>+</Button>
        <Button clickHandler={activateHandler}>Activate</Button>
    </div>
}

export default Demo;