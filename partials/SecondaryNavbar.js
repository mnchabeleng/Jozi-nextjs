import Menu from './Menu'

const SecondaryNavbar = ({ title }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="top-secondary-navbar">
            <Menu title={ title } />
        </nav>
    )
}

export default SecondaryNavbar