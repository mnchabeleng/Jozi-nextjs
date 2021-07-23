import { useRouter } from 'next/router'
import { useState } from 'react'

const HeaderSection = ({ categories, locations }) => {
    const router = useRouter()
    const { category, location, search } = router.query
    const [searchValue, setSearchValue] = useState(search)

    const headerStyle = {
        backgroundImage: 'url(/img/transnet.jpg)'
    }

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSearchFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const c = formData.get('category')
        const l = formData.get('location')
        const s = formData.get('search')
        
        router.push(`/explore?category=${ c }&location=${ l }&search=${ encodeURIComponent(s).replaceAll('%20','+') }`)
    }

    return (
        <section className="explore-header" style={ headerStyle }>
            <div className="container">
                <h1 className="text-center">Explore</h1>
                <p className="lead text-center">Discover great places in Jozi</p>
                <form className="p-3 rounded" style={{ color: '#000' }} onSubmit={ handleSearchFormSubmit }>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                            <div className="form-floating">
                                <select className="form-select" name="category">
                                    <option value="">All</option>
                                    {
                                        categories.length > 0 && categories.map((cat, index) => (
                                            <option key={ index } value={ cat.slug } selected={ category === cat.slug && 'selected' }>{ cat.name }</option>
                                        ))
                                    }
                                </select>
                                <label htmlFor="name">Category</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                            <div className="form-floating">
                                <select className="form-select" name="location">
                                    <option value="">All</option>
                                    {
                                        locations.length > 0 && locations.map((loc, index) => (
                                            <option key={ index } value={ loc.slug } selected={ location === loc.slug && 'selected' }>{ loc.name }</option>
                                        ))
                                    }
                                </select>
                                <label htmlFor="name">Location</label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                            <div className="form-floating">
                                <input type="text" name="search" className="form-control" value={ searchValue } onChange={ (e) => handleSearchInputChange(e) } />
                                <label htmlFor="name">What are you looking for?</label>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-3 mb-3 d-grid">
                            <button className="btn btn-orange btn-ripple">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

HeaderSection.defaultProps = {
    categories: [],
    locations: []
}

export default HeaderSection