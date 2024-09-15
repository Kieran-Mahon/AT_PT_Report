import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppNavBar({ setActivePage, redirectToSite}) {
  return (
    <>
      <Navbar className='navbar' data-bs-theme="dark">
        <Container>
          <Navbar.Brand>AT PT Viewer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setActivePage('info')}>Info</Nav.Link>
            <Nav.Link onClick={() => setActivePage('reports')}>Reports</Nav.Link>
            <Nav.Link onClick={() => redirectToSite('https://kieran-mahon.github.io/AT_PT_Viewer/')}>AT PT Viewer</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
