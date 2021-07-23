import Meta from '../partials/Meta'
import PrimaryNavbar from '../partials/PrimaryNavbar'
import SecondaryNavbar from '../partials/SecondaryNavbar'
import Footer from '../partials/Footer'

const MainLayout = ({ children, title, primaryNavbar }) => {
    return (
        <>
            <Meta title={ title } />
            { primaryNavbar ? <PrimaryNavbar /> : <SecondaryNavbar /> }
            { children }
            <Footer />
        </>
    )
}

MainLayout.defaultProps = {
    primaryNavbar: true
}

export default MainLayout