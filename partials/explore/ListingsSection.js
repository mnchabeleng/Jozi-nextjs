import ListingItem from './ListingItem'

const ListingsSection = ({ listings }) => {
    return (
        <section className="page-section" id="listings-section">
            <div className="container">
                <div className="row">
                    { listings.length > 0 && listings.map((listing, index) => <ListingItem key={ index } listing={ listing } />) }
                </div>
            </div>
        </section>
    )
}

export default ListingsSection