import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Item>
          <Link to="/allQuotes">Les citations</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/oneQuote">Une citation</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/addQuote">Ajoutez une citation</Link>
        </Nav.Item>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
