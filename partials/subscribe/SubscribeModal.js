import Image from 'next/image'

const SubscribeModal = ({ setSubscribeModal }) => {

    const modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }

    return (
        <div className="modal" style={ modalStyle } onClick={ () => setSubscribeModal(false) }>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content text-white bg-orange py-3">
                    <div className="modal-body text-center">
                        <Image src="/img/agreement.png" width="100" height="100" />
                        <h2>Welcome to the club.</h2>
                        <button className="btn text-white border-white rounded-pill" onClick={ () => setSubscribeModal(false) }>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeModal