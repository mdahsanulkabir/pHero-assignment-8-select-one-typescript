import { useContext,  } from "react";
import {Toast as ToastBS, ToastContainer} from 'react-bootstrap'
import { SelectedBooksContext } from "../context/SelectedBooksContext";

type ToastProps = {
    showA : boolean
    toggleShowA : () => void
}

const Toast = ({ showA, toggleShowA }: ToastProps) => {
    // const  { showA, toggleShowA }  = useContext(SelectedBooksContext)
    return (
        <ToastContainer className="p-3" position={"top-end"}>
            <ToastBS show={showA} onClose={toggleShowA} delay={3000} autohide className=" bg-danger">
                <ToastBS.Header>
                    {/* <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt="toast"
                    /> */}
                    <strong className="me-auto">Error !!!</strong>
                </ToastBS.Header>
                <ToastBS.Body>You cannot select more than 4 books</ToastBS.Body>
            </ToastBS>
        </ToastContainer>
    );
};

export default Toast;