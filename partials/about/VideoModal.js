import VideoEmbed from './VideoEmbed'

const VideoModal = ({ setVideoModal }) => {

    const modalStyle = {
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }

    return (
        <div className="modal" style={ modalStyle } onClick={ () => setVideoModal(false) }>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoModal