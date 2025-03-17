import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

type NavbarProps = {
  koin: number;
};

export default function MyNavbar({ koin }: NavbarProps) {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand as={Link} to="/">
          FINCBOOK
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/income">
              Income
            </Nav.Link>
            <Nav.Link as={Link} to="/expense">
              Expense
            </Nav.Link>
            <Nav.Link as={Link} to="/chart">
              Chart
            </Nav.Link>
            <Nav.Link as={Link} to="/table">
              Table
            </Nav.Link>
          </Nav>

          {/* Coin Display */}
          <Nav className="ms-3">
            <Navbar.Text>Coin: {koin}</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
