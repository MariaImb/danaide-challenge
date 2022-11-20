import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

const Header = () => {
    const [notification, setNotification] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://dana.dev13.net.ar/test/api/event")
                .then((response) => response.json())
                .then((data) => setNotification(data));
            console.log("this will run every second");
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="App-header">
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" id="logo" height="90px" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-end flex-grow-1 ">
                            <Nav.Link className="nav-links" href="/">Channel List</Nav.Link>
                            <Nav.Link className="nav-links" href="/playlist">Playlist</Nav.Link>
                            <Button
                                type="button"
                                className="nav-button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                variant="outline-success"
                            >
                                Show Notifications: {notification?.length}
                            </Button>
                            <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog">
                                    {notification?.map((note) => {
                                        return (
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1
                                                        class="modal-title fs-5"
                                                        id="exampleModalLabel"
                                                    >
                                                        {note.text}
                                                    </h1>
                                                    <button
                                                        type="button"
                                                        class="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div class="modal-body">
                                                    {note.type}
                                                </div>
                                                <img
                                                    src={`http://dana.dev13.net.ar/test/api/event/image/${note.id}`}
                                                    alt="eventimage"
                                                />
                                                <div class="modal-footer">
                                                    <button
                                                        type="button"
                                                        class="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;
