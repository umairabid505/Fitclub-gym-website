import React, { useState, useEffect, useRef } from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import bars from "../../assets/bars.png"
import { Link } from "react-scroll"

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpened(false)
            }
        }

        if (menuOpened && mobile) {
            document.addEventListener("mousedown", handleClickOutside)
            document.addEventListener("touchstart", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("touchstart", handleClickOutside)
        }
    }, [menuOpened, mobile])

    return (
        <>
            <div className='header'>
                <img src={logo} className='logo' alt="logo image" />
                {!menuOpened && mobile ? (
                    <div>
                        <img src={bars} alt="" className="bars" onClick={() => { setMenuOpened(true) }} />
                    </div>
                ) : (
                    <ul className='header-menu' ref={menuRef}>
                        <li> <Link onClick={() => setMenuOpened(false)} activeClass='active' to='home' smooth={true} spy={true}>Home</Link></li>
                        <li> <Link onClick={() => setMenuOpened(false)} to='programs' smooth={true} spy={true}>Programs</Link></li>
                        <li> <Link onClick={() => setMenuOpened(false)} to='reasons' smooth={true} spy={true}>Why us</Link></li>
                        <li> <Link onClick={() => setMenuOpened(false)} to='plans' smooth={true} spy={true}>Plans</Link></li>
                        <li> <Link onClick={() => setMenuOpened(false)} to='testimonials' smooth={true} spy={true}>Testimonials</Link></li>
                    </ul>
                )}
            </div>
        </>
    )
}

export default Header
