import { useEffect } from 'react'
import Menu from './Menu'

const PrimaryNavbar = () => {
    useEffect(() => {
        window.addEventListener('scroll', event => {
            const scrollValue = window.scrollY
            const topNavbar = document.querySelector('#top-navbar')
            if(topNavbar){
                if(scrollValue > 100)
                    topNavbar.classList.add('bg-dark')
                else
                    topNavbar.classList.remove('bg-dark')
            }
        });
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="top-navbar">
            <Menu />
        </nav>
    )
}

export default PrimaryNavbar