import Meta from '../partials/Meta'
import PrimaryNavbar from '../partials/PrimaryNavbar'
import SecondaryNavbar from '../partials/SecondaryNavbar'
import Footer from '../partials/Footer'

const MainLayout = ({ children, title, primaryNavbar }) => {
    return (
        <>
            <Meta title={ title } />
            { primaryNavbar ? <PrimaryNavbar title={ title } /> : <SecondaryNavbar title={ title } /> }
            { children }
            <Footer />
        </>
    )
}

MainLayout.defaultProps = {
    primaryNavbar: true
}

export default MainLayout