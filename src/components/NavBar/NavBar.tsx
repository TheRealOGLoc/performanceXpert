import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import AuthPage from "../AuthPage/AuthPage"
import React from "react";
import './NavBar.css'
import image1 from '../../images/icon.png'

function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <>
            <nav className="top-nav" >
                <div className="empty-div"></div>
                <div className="nav-left">
                    <div className="nav-parts" >
                        <div className="nav-parts-btn nav-text ">FIND CAR PART↓</div>
                        <div className="nav-parts-wrapper" >
                            <div className="empty-div-2"></div>
                            <Link to='/parts/engine' className="nav-text" >ENGINE</Link>
                            <Link to='/parts/turbo' className="nav-text" >TURBO</Link>
                            <Link to='/parts/spoiler' className="nav-text" >WIDEBODY</Link>
                            <Link to='/parts/rim' className="nav-text" >RIM</Link>
                            <Link to='/parts/break' className="nav-text" >BREAK</Link>
                            <Link to='/parts/' className="nav-text" >ALL PARTS</Link>
                            <div className="empty-div-2"></div>
                        </div>
                    </div>
                    <Link to='/location' className="nav-text" >FIND OUR LOCATION</Link>
                    <Link to='/aiassist' className="nav-text" >AI ASSIST</Link>
                </div>
                <div className="nav-middle" >
                    <Link to='/'>
                        <img src={image1} alt="PERFORMANCEXPERT" className="nav-icon" />
                    </Link>
                </div>

                <div className="nav-right">
                    <Link to='/community' className="nav-text" >COMMUNITY</Link>
                    <Link to='/cart' className="nav-text" >Cart</Link>
                    {user ? <Link to="/profile" className="nav-text" >{user.name}</Link> : <Link to="/auth" className="nav-text" >LOG IN</Link>}
                </div>

                <div className="empty-div"></div>
                
                <nav className="navbar side-nav">
                    <div className="container-fluid side-nav-container">
                        <button className="side-nav-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body side-nav-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1">

                                    <li className="nav-item side-nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item side-nav-item">
                                        <a className="nav-link" href="/location">Find Our Locaiton</a>
                                    </li>
                                    <li className="nav-item side-nav-item">
                                        <a className="nav-link" href="/community">Community</a>
                                    </li>
                                    <li className="nav-item side-nav-item">
                                        <a className="nav-link" href="/cart">Cart</a>
                                    </li>

                                    <li className="nav-item dropdown side-nav-dropdown-wrapper">
                                        <a className="nav-link dropdown-toggle side-nav-dropdown-wrapper-text" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            CarParts
                                        </a>
                                        <ul className="dropdown-menu side-nav-dropdown">
                                            <li className="side-nav-dropdown-parts-text"><a className="dropdown-item side-nav-dropdown-parts" href="/parts/engine">Engine</a></li>
                                            <li className="side-nav-dropdown-parts-text"><a className="dropdown-item side-nav-dropdown-parts" href="/parts/turbo">Turbo</a></li>
                                            <li className="side-nav-dropdown-parts-text"><a className="dropdown-item side-nav-dropdown-parts" href="/parts/widebody">Widebody</a></li>
                                            <li className="side-nav-dropdown-parts-text"><a className="dropdown-item side-nav-dropdown-parts" href="/parts/rim">Rim</a></li>
                                            <li className="side-nav-dropdown-parts-text"><a className="dropdown-item side-nav-dropdown-parts" href="/parts">All Parts</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>


        </>
    )
}

export default NavBar







