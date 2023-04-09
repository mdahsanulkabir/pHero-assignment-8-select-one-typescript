import { Nav, Navbar as NavbarBS } from "react-bootstrap"

const Navbar = () => {
    return (
        <NavbarBS bg="dark" variant="dark" sticky="top">
            <NavbarBS.Brand href="#home">Confused Customer</NavbarBS.Brand>
            <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </NavbarBS>
    );
};

export default Navbar;