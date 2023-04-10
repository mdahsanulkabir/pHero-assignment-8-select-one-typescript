import { Button, Stack } from 'react-bootstrap'
import { SelectedBook as SB, SelectedBooksContext } from '../context/SelectedBooksContext'
import bookList from '../data/products.json'
import { useContext } from 'react'
import { formatCurrency } from '../utility/formatCurrency'

type SelectedBookProps = {
    book: SB
}

const SelectedBook = ({book} : SelectedBookProps) => {
    const { releaseBook } = useContext(SelectedBooksContext)
    const selectedBook = bookList.find(bookInList => bookInList.id === book.id )
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-content-center">
            <img src={selectedBook?.img}
            style={{width:'125px', height:'75px', objectFit: 'cover'}} alt=""
            />
            <div className="me-auto">
                
                <div className="text-muted" style={{fontSize: '.75rem'}}>
                    {selectedBook && formatCurrency(selectedBook.price)}
                </div>
            </div>
                <Button variant="outline-danger" size='sm' onClick={() => releaseBook(book.id)}>&times;</Button>
        </Stack>
    );
};

export default SelectedBook;