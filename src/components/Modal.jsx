


const Modal = ({show, hideModal, name, id}) => {
    // console.log(name)
    // return ( <>
    //     <div>
    //         <h1>holaaa</h1>
            
    //     </div>
    // </>)
    return (
        <div
        // class="modal fade"
        // class={`modal fade ${show ? ' modal-show' : ''}`}
        class="modal fade"
        // id={id}
        // data-bs-backdrop="static"
        // data-bs-keyboard="false"
        tabindex="-1"
        role="dialog"
        // aria-labelledby="staticBackdropLabel"
        // aria-hidden="true"
    >
        <div class="modal-dialog"  role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h1
                        class="modal-title fs-5"
                        // id="staticBackdropLabel"
                    >
                        {name}
                    </h1>
                    <button
                        type="button"
                        class="btn-close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={hideModal}
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="ratio ratio-16x9">
                        <iframe
                            src={`http://dana.dev13.net.ar/test/api/video/${id}.mp4`}
                            title="Channel video"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                        onClick={hideModal}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Modal;