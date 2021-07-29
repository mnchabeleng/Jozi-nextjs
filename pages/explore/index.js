import API_URL from '../../config'
import MainLayout from '../../layouts/MainLayout'
import HeaderSection from '../../partials/explore/HeaderSection'
import ListingsSection from '../../partials/explore/ListingsSection'

const Explore = ({ listings, categories, locations }) => {
    return (
        <MainLayout title="Explore">
            <HeaderSection categories={ categories } locations={ locations } />
            <ListingsSection listings={ listings } />
        </MainLayout>
    )
}

export async function getServerSideProps(ctx) {
    const c = ctx.query.category ? ctx.query.category : ''
    const l = ctx.query.location ? ctx.query.location : ''
    const s = ctx.query.search ? ctx.query.search : ''
    
    const listings = await fetch(`${ API_URL }/listings?category=${ c }&location=${ l }&search=${ s }&page=${ 1 }`)
                      .then(res => res.json())
                    
    const categories = await fetch(`${ API_URL }/categories`)
                        .then(res => res.json())

    const locations = await fetch(`${ API_URL }/locations`)
                        .then(res => res.json())
    
    return {
        props: { listings, categories, locations }
    }
}

export default Explore