import API_URL from '../../config'
import MainLayout from '../../layouts/MainLayout'
import Comments from '../../partials/explore/Comments'
import Images from '../../partials/explore/Images'
import Image from 'next/image'

const Listing = ({ listing }) => {
    return (
        <MainLayout title={ listing.title } primaryNavbar={ false }>
            <div className="page-top"></div>
            <section className="page-section">
                <div className="container" id="listing">
                    <div className="row">
                        <div className="col-sm-8">
                            <h1 className="listing-title">{ listing.title }</h1>
                            <p className="listing-description">{ listing.description }</p>
                            <div className="listing-details">
                                <div className="row">
                                    <div className="col-sm-4 mb-3" id="detail">
                                        <div className="icon">
                                            <i className="fas fa-address-book"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Address</h5>
                                            { listing.address }
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-3" id="detail">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Phone</h5>
                                            { listing.phone }
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-3" id="detail">
                                        <div className="icon">
                                            <i className="fas fa-laptop"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Website</h5>
                                            { listing.website }
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-3" id="detail">
                                        <div className="icon">
                                            <i className="far fa-clock"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Time</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-3" id="detail">
                                        <div className="icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Rating</h5>
                                            { listing.rating } / 5
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-3" id="detail">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Location</h5>
                                            { listing.location.name }
                                        </div>
                                    </div>
                                    <div className="col-sm-4" id="detail">
                                        <div className="icon">
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <div className="content">
                                            <h5>Listed By</h5>
                                            { listing.user.name }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <Comments comments={ listing.comments } />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export async function getServerSideProps(ctx) {
    const listing = await fetch(`${ API_URL }/listings/${ ctx.params.slug }`)
              .then(res => res.json())

    return {
        props: { listing }
    }
}

export default Listing