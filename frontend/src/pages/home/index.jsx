import React from 'react';
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <section>
                <div className="container is-widescreen">
                    <Navbar/>
                    <div className='container'>
                        <h1>Main page</h1>
                    </div>
                    <Footer/>
                </div>
            </section>
        </>
    )
}
export default Home