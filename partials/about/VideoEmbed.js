const VideoEmbed = () => {
    return (
        <div className="ratio ratio-16x9">
            <iframe 
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
        </div>
    )
}

export default VideoEmbed