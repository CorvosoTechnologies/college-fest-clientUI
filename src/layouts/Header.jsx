import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/logo.jpg'
import ProgramMove from "./movingPrograms";
import { CrudProgramContext } from "../context/teamContext";
import { useContext, useEffect, useState } from "react";

function Header() {
  const { fetchPrograms } = useContext(CrudProgramContext);
  const [allPrograms, setAllPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchPrograms();
      setAllPrograms(fetchedData);
    };
    fetchData();
  }, [fetchPrograms]);

  return (
    <div>
      {allPrograms.length > 5 && <ProgramMove />}
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand
            style={{ fontSize: "22px" }}
            href="/"
            className="title text-warning  "
          >
           <img src={logo} style={{ height: 30, width: 50 }}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 me-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                style={{ fontSize: "19px" }}
                className="text-white me-3"
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ fontSize: "19px" }}
                className="text-white me-3"
                href="#allteams"
              >
                All Teams
              </Nav.Link>
              <Nav.Link
                style={{ fontSize: "19px" }}
                className="text-white me-3"
                href="/managewatchlist"
              >
                Manage Watchlist
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">

            <Form.Control
              type="search"
              placeholder="Search movies"
              className="search me-2"
              aria-label="Search "
              style={{borderRadius:'10px'}}
            />

            <Button variant="outline-success">Search</Button>

          </Form>  */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
