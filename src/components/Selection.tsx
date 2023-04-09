import { useContext } from "react";
import { Button, Stack } from "react-bootstrap";
import { SelectedBooksContext } from "../context/SelectedBooksContext";

const Selection = () => {
    const { selectedQuantity } = useContext(SelectedBooksContext)
    return (
        <div className="d-flex flex-column align-items-center">
            <h4>Selection</h4>
            {
                selectedQuantity ? <p>You have selected {selectedQuantity} books</p> : null
            }
            <Stack gap={3} >
                <Button className="w-50 mx-auto">Select 1 for Me</Button>
                <Button className="w-50 mx-auto">Select Again</Button>
                <Button className="w-50 mx-auto">Reset</Button>
            </Stack>
        </div>
    );
};

export default Selection;