import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">КОВрик</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="#features">Каталог</Nav.Link>
            <Nav.Link href="#pricing">Скидки</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}