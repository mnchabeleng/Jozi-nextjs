import Image from 'next/image'
import Link from 'next/link'

const ListingItem = ({ listing }) => {
    const ratingStyle = (rating) => {
        if (rating <= 1)
            return 'danger'
        else if(rating <= 3)
            return 'warning'
        else if(rating <= 4)
            return 'primary'
        else
            return 'success'
        
    }

    return (
        <div className="col-12 col-sm-12 col-md-4 mb-4 d-grid">
            <Link href={ `/explore/${ listing.slug }` }>
                <div className="card" id="listing-item">
                    <Image loader={ ({ src }) => src } src={ listing.images[0].image } className="card-img-top" width="350" height="250" />
                    <div className="card-body">
                        <ul className="listing-info">
                            <li>{ listing.category.name }</li>
                            &bull;
                            <li>{ listing.location.name }</li>
                            &bull;
                            <li>{ listing.comments.count } Comment{ listing.comments.count > 1 && 's' }</li>
                        </ul>
                        <h4 className="card-title py-2">{ listing.title }</h4>
                        <ul className="listing-details">
                            <li><i className="fas fa-address-book"></i>{ listing.address }</li>
                            <li><i className="fas fa-phone-alt"></i>{ listing.phone }</li>
                            <li><i className="fas fa-user"></i>{ listing.user.name }</li>
                            <li><i className="fas fa-laptop"></i>{ listing.website }</li>
                        </ul>
                    </div>
                    <div className={ `status bg-${ listing.time.status == 'OPEN' ? 'success' : 'danger' }` }>{ listing.time.status }</div>
                    <div className={ `rating-star bg-${ ratingStyle(listing.rating) }` }></div>
                    <div className="rating">{ listing.rating }</div>
                </div>
            </Link>
        </div>
    )
}

export default ListingItem