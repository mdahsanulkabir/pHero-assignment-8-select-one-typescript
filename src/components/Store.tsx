
import { Col, Row } from 'react-bootstrap';
import bookList from '../data/products.json'
import Book from './Book';

const Store = () => {
    return (
        <Row md={2} xs={1} lg={3} className=" g-3">
            {
                bookList.map(item => (
                    <Col key={item.id}><Book {...item}/> </Col>
                ))
            }
        </Row>
    );
};

export default Store;