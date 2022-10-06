import React from "react";
import {Outlet, Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="level is-mobile">
                <p className="level-item has-text-centered">
                    <Link to='/' className="link is-info">Home</Link>
                </p>
                <p className="level-item has-text-centered">
                    <Link to='/#portfolio' className="link is-info">Menu</Link>
                </p>
                <p className="level-item has-text-centered">
                    <h2>Wiktor Karaszewicz</h2>
                </p>
                <p className="level-item has-text-centered">
                    <Link to="/todo" className="link is-info">Todo</Link>
                </p>
                <p className="level-item has-text-centered">
                    <Link to='/contact' className="link is-info">Contact</Link>
                </p>
            </nav>
                <Outlet/>
        </>
    )
}
export default Navbar;