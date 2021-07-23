const PageHeader = ({ title, bgImage }) => {
    const headerStyle = {
        backgroundImage: bgImage
    }

    return (
        <section className="page-header" style={ headerStyle }>
            <div className="page-header-content">
                <div className="container">
                    <h1 className="text-center">{ title }</h1>
                </div>
            </div>
        </section>
    )
}

PageHeader.defaultProps = {
    title: 'Jozi',
    bgImage: 'url(img/transnet.jpg)'
}

export default PageHeader