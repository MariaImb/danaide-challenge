import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const [notification, setNotification] = useState();


    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://dana.dev13.net.ar/test/api/event")
                .then((response) => response.json())
                .then((data) => setNotification(data))
            console.log("this will run every second");
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="App-header">
            <nav className="navbar bg-light">
                <div className="container">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="logo" id="logo" height="90px" />
                    </Link>

                    <Link to="/" className="nav-links">
                        Channel List
                    </Link>

                    <Link to="/playlist" className="nav-links">
                        My Playlist
                    </Link>

                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Notifications
                    </button>
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
                                        <div class="modal-body">{note.type}</div>
                                        <img src={`http://dana.dev13.net.ar/test/api/event/image/${note.id}`} alt="eventimage" />
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
                </div>
            </nav>
        </header>
    );
};

export default Header;
