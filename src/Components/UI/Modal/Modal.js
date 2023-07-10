import { Fragment } from "react";
import reactDom from "react-dom";

const Backdrop = props =>{
    return <div className="backdrop" onClick={props.onClick}></div>
}

const ModalOverlays= props =>{
    return <div className="modalOverlay">
        <div className="content">{props.children}</div>
    </div>
}
const portalElement=document.getElementById('overlays');

const Modal=(props)=>{
    return(
        <Fragment>
            {reactDom.createPortal(<Backdrop onClick={props.onClose}/>,portalElement)}
            {reactDom.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalElement)}
        </Fragment>
    )
}

export default Modal;