import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Ratio from "react-bootstrap/Ratio";

const Playlist = () => {
    const [playlist, setPlaylist] = useState();
    const [videoId, setVideoId] = useState();
    const [videoName, setVideoName] = useState();
    const [show, setShow] = useState(false);

    function handleShow(channel) {
        setVideoId(channel.id);
        setVideoName(channel.name);
        setShow(true);
    }

    useEffect(() => {
        fetch("http://dana.dev13.net.ar/test/api/playlist")
            .then((response) => response.json())
            .then((data) => setPlaylist(data))
            .catch((err) => console.error(err));
    }, []);

    const removeChannel = (id) => {
        fetch(`http://dana.dev13.net.ar/test/api/playlist/remove/${id}`)
            .then((response) => response.json())
            .catch((err) => console.error(err));

        fetch("http://dana.dev13.net.ar/test/api/playlist")
            .then((response) => response.json())
            .then((data) => setPlaylist(data))
            .catch((err) => console.error(err));
    };

    return (
        <div className="container">
            <h2 className="title">Playlist</h2>
            <table className="table table-striped align-middle">
                <thead>
                    <tr>
                        <th scope="col" className="table-title">
                            #
                        </th>
                        <th scope="col" className="table-title">
                            CHANNEL NAME
                        </th>
                        <th scope="col" className="table-title">
                            ACTIONS
                        </th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {playlist?.map((channel, index) => {
                        return (
                            <tr key={channel.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{channel.name}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-primary btn-spacing buttons"
                                        onClick={() =>
                                            removeChannel(channel.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                    <Button
                                        key={index}
                                        variant="outline-primary"
                                        className="btn btn-outline-primary btn-spacing video-button"
                                        onClick={() => handleShow(channel)}
                                    >
                                        Show Video
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Modal size="lg" show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="table-title">
                        {videoName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Ratio aspectRatio="16x9">
                        <iframe
                            src={`http://dana.dev13.net.ar/test/api/video/${videoId}.mp4`}
                            title="Channel video"
                            allowfullscreen
                        ></iframe>
                    </Ratio>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Playlist;
