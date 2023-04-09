import Selection from './Selection';
import { Col, Row } from 'react-bootstrap';
import Store from './Store';

const Main = () => {
    return (
        <Row>
            <Col md={8}>
                <Store />
            </Col>
            <Col md={4}>
                <Selection />
            </Col>
        </Row>
    );
};

export default Main;