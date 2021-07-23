import Link from 'next/link'
import Image from 'next/image'

const ExploreSection = ({ categories }) => {

    return (
        <section className="page-section" id="explore-section">
            <div className="container">
                <h3 className="section-heading">Explore</h3>
                <div className="row text-center">
                    {
                        categories.length > 0 && categories.map((cat, index) => (
                            <Link href={ `/explore?category=${ cat.slug }` } key={ index }>
                                <div className="col-6 col-sm-6 col-md-3 mb-3" id="explore-card">
                                    <Image loader={ ({ src }) => src } src={ cat.image } className="mb-2" width="640" height="960" alt={ cat.name } />
                                    <h3 className="h5">{ cat.name }</h3>
                                    <small>{ cat.listings.count } Listings</small>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ExploreSection