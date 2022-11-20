import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Galeria = () => {
    const [channelsList, setChannelsList] = useState();

    useEffect(() => {
        fetch("http://dana.dev13.net.ar/test/api/channels")
            .then((response) => response.json())
            .then((data) => setChannelsList(data));
    }, []);

    const AddChannel = (id) => {
        fetch(`http://dana.dev13.net.ar/test/api/playlist/add/${id}`).then(
            (response) => response.json()
        );
        toast.info('Channel Added!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    };


    return (
        <div className="container">
            <h2>Channel List</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">Add to playlist</th>
                    </tr>
                </thead>
                <tbody>
                    {channelsList?.map((channel, index) => {
                        return (
                            <tr key={channel.id}>
                                <th scope="row">{index}</th>
                                <td>{channel.name}</td>
                                <td>{channel.id}</td>
                                <td>
                                    <button
                                        onClick={() => AddChannel(channel.id)}
                                        className="btn btn-outline-primary"
                                
                                    >
                                        Add
                                    </button>

                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <ToastContainer/>
        </div>
    );
};

export default Galeria;
