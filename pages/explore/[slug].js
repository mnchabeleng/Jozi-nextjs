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
                            <Images images={ listing.images } />
                            <div className="listing-details">
                                <div className="row">
                                    <div className="col-sm-4 mb-3">
                                        <i className="fas fa-address-book"></i>
                                        <h5>Address</h5>
                                        { listing.address }
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <i className="fas fa-phone-alt"></i>
                                        <h5>Phone</h5>
                                        { listing.phone }
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <i className="fas fa-laptop"></i>
                                        <h5>Website</h5>
                                        { listing.website }
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <i className="far fa-clock"></i>
                                        <h5>Time</h5>
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <i className="fas fa-star"></i>
                                        <h5>Rating</h5>
                                        { listing.rating } / 5
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h5>Location</h5>
                                        { listing.location.name }
                                    </div>
                                    <div className="col-sm-4">
                                        <i className="fas fa-user"></i>
                                        <h5>Listed By</h5>
                                        { listing.user.name }
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