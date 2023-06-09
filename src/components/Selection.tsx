import { useContext, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { SelectedBooksContext } from "../context/SelectedBooksContext";
import SelectedBook from "./SelectedBook";
import bookList from '../data/products.json'

const Selection = () => {
    const { selectedQuantity, selectedBooks, reset } = useContext(SelectedBooksContext)
    const [ randomIndex, setRandomIndex ] = useState<number | null>( null )
    const randomNum = (qty: number) => Math.floor(Math.random() * (qty - 1 + 1) + 1);
    const selectOne = () => {
        setRandomIndex( randomNum(selectedQuantity) )
    }
    const handleReset = () => {
        setRandomIndex(null)
        reset();
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <h4>Selection</h4>
            {
                selectedQuantity ? (
                    <>
                        <p className="mb-3">You have selected {selectedQuantity} book(s)</p>
                        <Stack gap={3} className="mb-3">
                            {
                                selectedBooks.map(book =>
                                    <SelectedBook key={book.id} book={book}/>
                                )
                            }
                        </Stack>
                    </>
                ) : null
            }
            <Stack gap={3} className="mb-3">
                {
                    selectedQuantity >= 2 ?
                    <>
                        <Button className="w-50 mx-auto" onClick={() => selectOne()}>Select 1 for Me</Button>
                        <Button className="w-50 mx-auto">Select Again</Button>
                    </> : null
                }
                {
                    selectedQuantity && <Button className="w-50 mx-auto" onClick={handleReset}>Reset</Button>
                }
            </Stack>
            {
                randomIndex && (
                    <img src={`${bookList.find(bookInList => bookInList.id === selectedBooks[randomIndex].id )?.img}`} />
                )
            }
        </div>
    );
};

export default Selection;