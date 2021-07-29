import API_URL from '../../config'
import ListingItem from './ListingItem'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ListingsSection = ({ listings: data }) => {
    const router = useRouter()
    let { category: c, location: l, search: s } = router.query
    const [listings, setListings] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setListings(data)
    }, [data])

    useEffect(() => {
        if(page > 1){
            setLoading(true)
            fetchListings(page)
        }
    }, [page])
    
    const fetchListings = async (page) => {
        const res = await fetch(`${ API_URL }/listings?category=${ c ? c : '' }&location=${ l ? l : '' }&search=${ s ? s : '' }&page=${ page }`)
                      .then(res => res.json())
        setListings(prev => [...prev, ...res])
        setLoading(false)
    }

    return (
        <section className="page-section" id="listings-section">
            <div className="container">
                <div className="row">
                    { listings.length > 0 && listings.map((listing, index) => <ListingItem key={ index } listing={ listing } />) }
                </div>
                <button className="btn btn-orange btn-ripple" onClick={ () => setPage(prev => page  + 1) }>{ loading ? 'Loading...' : 'Loadmore' }</button>
            </div>
        </section>
    )
}

export default ListingsSection