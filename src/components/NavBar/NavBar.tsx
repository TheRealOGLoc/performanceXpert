import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import React from "react";
import './NavBar.css'

function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        // <nav className="container" >
        //     <div className="row" >
        //         <div className="col">
        //             <Link to="/orders" >Order History</Link>
        //         </div>
        //         <div className="col">
        //             <Link to="/orders/new" >New Order</Link>
        //         </div>
                
        //         <div className="col">
        //             <span className="col" >Welcome, {user.name}</span>
        //             <Link to="" onClick={handleLogOut} >Log Out</Link>
        //         </div>
        //     </div>
        // </nav>
        <nav>
            <div>
                FIND CAR PART
                <div>
                    <Link to='/parts/engine' >ENGINE</Link>
                    <Link to='/parts/turbo' >TURBO</Link>
                    <Link to='/parts/spoiler' >WIDEBODY</Link>
                    <Link to='/parts/rim' >RIM</Link>
                    <Link to='/parts/' >ALL PARTS</Link>
                </div>
            </div>
            <Link to='/location' >FIND OUR LOCATION</Link>
            <Link to='/aiassist' >AI ASSIST</Link>
            <div>
                <img src="" alt="" />
            </div>
        </nav>
    )
}

export default NavBar







