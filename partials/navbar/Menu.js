import Link from 'next/link'

const Menu = ({ title }) => {
    console.log(title)
    return (
        <div className="container-fluid">
            <Link href="/">
                <a className="navbar-brand">Jozi</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primary-navbar" aria-controls="primary-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="primary-navbar">
                <ul className="navbar-nav ms-auto py-4 py-lg-0">
                    <li className="nav-item">
                        <Link href="/">
                            <a className={ `nav-link ${ title == 'Jozi' && 'active' }` }>Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/explore">
                            <a className={ `nav-link ${ title == 'Explore' && 'active' }` }>Explore</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className={ `nav-link ${ title == 'About' && 'active' }` }>About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact">
                            <a className={ `nav-link ${ title == 'Contact' && 'active' }` }>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu