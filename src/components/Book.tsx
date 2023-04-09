import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utility/formatCurrency"
import { useContext } from "react"
import { SelectedBooksContext } from "../context/SelectedBooksContext"

type BookProps = {
    id : string
    name : string
    price : number
    img : string
}
const Book = ({ id, name, price, img }:BookProps) => {
    const { selectedBooks, selectBook, releaseBook } = useContext(SelectedBooksContext)
    return (
        <Card className="h-100 d-flex">
            <Card.Img variant="top" height='200px' src={img} 
                style={{objectFit: 'contain'}}
            />
            <Card.Body >
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-4">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>

                {
                    selectedBooks.find(book => book.id === id) ? (
                        <Button className="w-100 mt-auto" variant="danger"
                            onClick={()=>releaseBook(id)}
                        >Release</Button>
                        
                    ) : (
                        <Button className="w-100 mt-auto" variant="info"
                            onClick={()=>selectBook(id)}
                        >Nominate</Button>
                    )
                }
                
                
            </Card.Body>
        </Card>
    );
};

export default Book;