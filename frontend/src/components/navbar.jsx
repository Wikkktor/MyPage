import React from "react";
import {Outlet, Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="ui vertical inverted sidebar menu">
                <div>
                    <Link to='/' className="active item">Main page</Link>
                    <a href='/#about_me' className='item'>About me</a>
                    <a href='/#experience' className='item'>Experience</a>
                    <a href='/#portfolio' className='item'>Portfolio</a>
                    <a href='/#education' className='item'>Education</a>
                </div>
                <div>
                <Link to='/login' className="item">Login</Link>
                <Link to='/register' className="item">Signup</Link>
                </div>
            </div>
            <Outlet/>

        </>
    )
}
export default Navbar;