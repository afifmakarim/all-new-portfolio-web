import * as React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar key="md" bg="white" expand="md" className="py-4">
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-primary">
          Afif Makarim
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 d-flex gap-4">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="http://rojoinferno.com/" target="_blank">
                Blogs
              </Nav.Link>
              <Nav.Link
                href="mailto:afifmakarim88@gmail.com"
                className="bg-primary rounded px-4 text-white"
              >
                Hire Me
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
