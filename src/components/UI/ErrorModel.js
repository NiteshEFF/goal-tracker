import React from "react";
import {createPortal} from "react-dom";
import BackDrop from "./BackDrop";
import ErrorCard from "./ErrorCard";

const ErrorModel = (props) => {
    return <React.Fragment>
    {createPortal(<BackDrop 
                    hideModel={props.hideModel}
                    />,
                    document.querySelector("#back-drop"))}
    {createPortal(<ErrorCard 
                    hideModel={props.hideModel}
                    title={props.title}
                    message={props.message}
                    />,
                    document.querySelector("#error-model"))
    }
    </React.Fragment>

}
export default ErrorModel;