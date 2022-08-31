import { useRef } from "react";

function RefsDemo(){
    let nameInputRef = useRef();
    //console.log(nameInputRef);
    function showNameEventHandler(){
        console.log(nameInputRef.current.value);
    }

    return <>
        <span>Name:</span>
        <input type="text" ref={nameInputRef}/>
        <button onClick={showNameEventHandler}>Show Name</button>
    </>
}

export default RefsDemo;