const VideoEmbed = () => {
    return (
        <video autoPlay controls style={{ width: '100%', display: 'block' }}>
            <source src="/video/video.mp4" />
        </video>
    )
}

export default VideoEmbed