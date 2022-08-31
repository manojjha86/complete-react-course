import React, {useState} from "react";
import PortalComponent from "./PortalComponent";
import Modal from "./Modal";

function Component2(){
    let[showModal, updateShowModal] = useState(false);
    function displayModel(){
        updateShowModal(true)
    }
    function hideModel(){
        updateShowModal(false);
    } 

    return <div style={{width: 300, position: "relative"}}>
        <h3>This is Component 2</h3>
        <p>This is a paragraph</p>
        {/* <PortalComponent></PortalComponent> */}
        <button onClick={displayModel}>Show Model</button>
        <Modal showModal={showModal} hideModal={hideModel}></Modal>
    </div>
}

export default Component2;