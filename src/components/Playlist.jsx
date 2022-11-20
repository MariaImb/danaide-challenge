import { useState, useEffect } from "react";
import Modal from "./Modal";


const Playlist = () => {
    const [playlist, setPlaylist] = useState();
    const [show, setShow] = useState(false)

    useEffect(() => {
        fetch("http://dana.dev13.net.ar/test/api/playlist")
            .then((response) => response.json())
            .then((data) => setPlaylist(data));
    }, []);

    const removeChannel = (id) => {
        fetch(`http://dana.dev13.net.ar/test/api/playlist/remove/${id}`).then(
            (response) => response.json()
        );
        fetch("http://dana.dev13.net.ar/test/api/playlist")
            .then((response) => response.json())
            .then((data) => setPlaylist(data));
    };

    const showModal = () => {
        setShow(true);
        console.log(show)
    };

    const hideModal = () => {
        setShow(false);
    };


    return (
        <div className="container">
            <h2>Playlist</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {playlist?.map((channel, index) => {
                        return (
                            <tr key={channel.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{channel.name}</td>
                                <td>{channel.id}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-primary btn-spacing"
                                        onClick={() =>
                                            removeChannel(channel.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        // data-bs-toggle="modal"
                                        // data-bs-target="#staticBackdrop"
                                        onClick={() => showModal()}
                                    >
                                        Show Video
                                    </button>
                                    {
                                        show && <Modal show = {show} hideModal = {hideModal} id={channel.id} name={channel.name}/>
                                    }
                                    
          

                                    {/* <div
                                        class="modal fade"
                                        id="staticBackdrop"
                                        data-bs-backdrop="static"
                                        data-bs-keyboard="false"
                                        tabindex="-1"
                                        aria-labelledby="staticBackdropLabel"
                                        aria-hidden="true"
                                    >
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1
                                                        class="modal-title fs-5"
                                                        id="staticBackdropLabel"
                                                    >
                                                        {channel.name}
                                                    </h1>
                                                    <button
                                                        type="button"
                                                        class="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="ratio ratio-16x9">
                                                        <iframe
                                                            src={`http://dana.dev13.net.ar/test/api/video/${channel.id}.mp4`}
                                                            title="Channel video"
                                                            allowfullscreen
                                                        ></iframe>
                                                    </div>
                                                </div>
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
                                        </div>
                                    </div> */}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Playlist;
