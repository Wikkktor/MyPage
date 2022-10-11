import React, {useContext, useState} from 'react';
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
import './App.css';
import wiktor from '../../assets/wiktor.jpeg';
import beautybon from '../../assets/beautybon.png';
import danky from '../../assets/danky.png';
import salony from '../../assets/salony.png';
import auschwitz from '../../assets/auschwitz.png';
import uzyjto from '../../assets/uzyjto.png';
import ErrorMessage from "../../components/ErrorMessage";
import {UserContext} from "../../context/UserContext";


const Home = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [reply, setReply] = useState("");
    const [token, setToken] = useContext(UserContext)

    const submitContact = async () => {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                    email: email,
                    message: message,
                }
            )
        };
        const response = await fetch("api/send-email", requestOptions)
        const data = await response.json()
        setReply(data.detail)
    }
    const handleLogout = () => {
        setToken(null);
    };


    const handleContact = (e) => {
        e.preventDefault()
        submitContact()
    }



    return (
        <>
            <section>
                <div className="pusher">
                    <Navbar/>
                    <div className="ui inverted vertical masthead center aligned segment">
                        <div className="ui container">
                            <div className="ui large secondary inverted pointing menu">
                                <a href="/#" className="toc item">
                                    <i className="sidebar icon"></i>
                                </a>
                                <Link to='/' className="active item">Main page</Link>
                                <a href='/#about_me' className='item'>About me</a>
                                <a href='/#experience' className='item'>Experience</a>
                                <a href='/#portfolio' className='item'>Portfolio</a>
                                <a href='/#education' className='item'>Education</a>
                                <a href='/#skills' className='item'>Skills</a>
                                <a href='/#skills' className='item'>Contact</a>
                                {!token ? (
                                    <div className="right item">
                                        <Link to="/login" className="ui inverted button">Log in</Link>
                                        <Link to="/register" className="ui inverted button">Sign Up</Link>
                                    </div>
                                ) : (
                                    <div className="right item">
                                        <Link to="/todo" className="ui inverted button">Todo</Link>
                                        <Link to="/jokes" className="ui inverted button">Jokes</Link>
                                        <button className="ui inverted button" onClick={handleLogout}>Logout</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="ui text container">
                            <img style={{margin: '4em auto 0'}} className="ui medium circular image" alt='me'
                                 src={wiktor}/>
                            <h1 style={{marginTop: '0'}} className="ui inverted header">
                                Wiktor Karaszewicz
                            </h1>
                            <h2>Web developer </h2>
                            <a href='https://github.com/wikkktor'>
                                <button className="ui github button">
                                    <i className="github icon"></i>
                                    Github
                                </button>
                            </a>
                            <a href='https://www.linkedin.com/in/wiktor-karaszewicz/'>
                                <button className="ui linkedin button">
                                    <i className="linkedin icon"></i>
                                    LinkedIn
                                </button>
                            </a>
                        </div>
                    </div>
                    <div id='about_me' className='ui container big-margin'>
                        <h1 className='ui header'>About me <i style={{transform: 'rotate(45deg)'}}
                                                              className="hand point down icon"></i></h1>
                        <div className="ui raised segment">
                            <div className='mytext'>
                                <p>Hi! I am Wiktor Karaszewicz Web developer, I live
                                    in Warsaw.
                                </p>
                                <p>
                                    I've been interested in programming since 2020, that's when I started creating my
                                    first
                                    sites using html and css and had fun using inspector to change the content of sites
                                    on
                                    my computer.
                                </p>
                                <p>
                                    After a year, I started taking programming and IT seriously by devoting more time to
                                    it,
                                    gaining experience and learning Python.
                                </p>
                                <p>
                                    Currently I am a student of IT subjects in English working as a web developer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='experience' className='ui container big-margin'>
                        <h1 className='ui header'>Experience <i className="chart line icon"></i></h1>
                        <div className='ui stackable two column grid'>
                            <div className='column'>
                                <div className="ui raised segment max-height">
                                    <p className='mytext'>
                                        <div className='is-flex-direction-row'
                                             style={{justifyContent: 'space-between'}}>
                                            <h2 className='ui header'>Junior Web Developer</h2>
                                            <h4 style={{margin: '0'}} className='ui header'>January 2022 - now</h4>
                                        </div>
                                        <h3 className='ui header no-m'>Grupa Lucrum Sp.z.o.o</h3>
                                        <ul className="ui list">
                                            <li>Creation of dedicated web app</li>
                                            <li>Development of CMS systems for small companies</li>
                                            <li>Contacting customers and identifying their needs</li>
                                            <li>Optimization of js/css/images for better website performance</li>
                                            <li>Deploying application</li>
                                            <li>Administration of created systems</li>
                                            <li>Web development in html css js from graphic designers</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className='column'>
                                <div className="ui raised segment max-height">
                                    <p className='mytext'>
                                        <div className='is-flex-direction-row'
                                             style={{justifyContent: 'space-between'}}>
                                            <h2 className='ui header'>Webshop Administrator</h2>
                                            <h4 style={{margin: '0'}} className='ui header'>May 2021 - September
                                                2021</h4>
                                        </div>
                                        <h3 className='ui header no-m'>Kabex</h3>
                                        <ul className="ui list">
                                            <li>Integration of the web shop with the ERP system.</li>
                                            <li>Adding offers for e-commerce platforms and updating them</li>
                                            <li>Monitoring and reporting of sales results.</li>
                                            <li>Ordering and invoicing flow managing.</li>
                                            <li>Updating erp systems and related applications</li>
                                            <li>Taking care of the proper operation of resources on the server</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='portfolio' className='ui container big-margin'>
                        <h1 className='ui header'>Portfolio <i className="code icon"></i></h1>
                        <div className='ui special cards grid stackable three column'>
                            <div className='column'>
                                <div className="ui card">
                                    <div className="image">
                                        <img alt='beautybon' src={beautybon}/>
                                    </div>
                                    <div className="content">
                                        <a href='https://beautybon.pl' className="header">BeautyBon</a>
                                        <div className="description">
                                            The application creates named vouchers that are for later
                                            use. It has a panel for sellers where, based on a unique code, the voucher
                                            can
                                            be set as used.Kristy is an art director living in New York.
                                        </div>
                                    </div>
                                    <div className="extra content">
                                    <span>
                                        Django, Semantic Ui, JavaScript, PostgreSQL
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className="ui card">
                                    <div className="image">
                                        <img alt='uzyjto' src={uzyjto}/>
                                    </div>
                                    <div className="content">
                                        <a href='https://uzyj.to' className="header">uzyj.to</a>
                                        <div className="description">
                                            Invented by a group of architects, the portal for displaying leftover
                                            materials
                                            after construction or renovation. The idea behind the app is to promote the
                                            eco movement.
                                            It has filtered offers by location with radius and chat so you can find
                                            materials near your location and contact the seller.
                                        </div>
                                    </div>
                                    <div className="extra content">
                                    <span>
                                        Django, Semantic Ui, JavaScript, PostgreSQL, PostGIS, Ajax
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className="ui card">
                                    <div className="image">
                                        <img alt='salonypiekna' src={salony}/>
                                    </div>
                                    <div className="content">
                                        <a href='https://salonypiekna.pl' className="header">Salony piękna</a>
                                        <div className="description">
                                            Logged in user can add his own beauty salon or find
                                            places in that kind in his area. Application gives flexible possibilities to
                                            add
                                            an advertisement in the desired location, for example: on the city page or
                                            province or category in the certain city.
                                        </div>
                                    </div>
                                    <div className="extra content">
                                    <span>
                                        Django, MySQL, JavaScript, Bootstrap5
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className="ui card">
                                    <div className="image">
                                        <img alt='danky' src={danky}/>
                                    </div>
                                    <div className="content">
                                        <a href='https://danky.pl' className="header">Danky</a>
                                        <div className="description">
                                            Marketplace for branded items, focused on shoes. A safe
                                            place for resellers of clothes and shoes that earns commissions from
                                            transactions. Online chat allows quick contact between potential buyers and
                                            sellers.
                                        </div>
                                    </div>
                                    <div className="extra content">
                                    <span>
                                        Django, PostgreSQL, JavaScript, Ajax
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className="ui card">
                                    <div className="image">
                                        <img alt='auschwitz' src={auschwitz}/>
                                    </div>
                                    <div className="content">
                                        <a href='https://auschwitzcracow.com' className="header">Auschwitzcracow</a>
                                        <div className="description">
                                            The app gives you the ability to choose the date, options and language of
                                            the
                                            tour based on the information's provided in dedicated admin panel. Created
                                            in
                                            two languages.
                                        </div>
                                    </div>
                                    <div className="extra content">
                                    <span>
                                        Django, jQuery, JavaScript, Bootstrap5, Multilingual
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='education' className='ui container big-margin'>
                        <h1 className='ui header'>Education <i className="graduation cap icon"></i></h1>
                        <div className="ui raised segment">
                            <div className="mytext">
                                <h3 className='ui header'>Polish-Japanese Academy of Information Technology</h3>
                                <h4 className='ui header no-m'>2022 - 2026 Engineer</h4>
                                Faculty of Computer Science, Warsaw, Poland.
                            </div>
                        </div>
                        <div className="ui raised segment">
                            <div className="mytext">
                                <h3 className='ui header'>Lazarski University</h3>
                                <h4 className='ui header no-m'>2020 - 2023 Bachelor</h4>
                                Faculty of Economics, Warsaw, Poland.
                            </div>
                        </div>

                    </div>

                    <div id='skills' className='ui container big-margin'>
                        <h1 className='ui header'>Skills <i className="microchip icon"></i></h1>
                        <div className="ui grid">
                            <div className="stackable eight very relaxed  column row">
                                <div className="column">PYTHON</div>
                                <div className="column">DJANGO</div>
                                <div className="column">FASTAPI</div>
                                <div className="column">FLASK</div>
                                <div className="column">RESTAPI</div>
                                <div className="column">JAVASCRIPT</div>
                                <div className="column">REACT</div>
                                <div className="column">HTML5</div>
                                <div className="column">CSS3</div>
                                <div className="column">BOOTSTRAP</div>
                                <div className="column">SEMANTIC UI</div>
                            </div>

                        </div>
                    </div>
                    <div id='contact' className='ui container big-margin'>
                        <div className="ui stackable grid">
                            <div className="row">
                                <div className="three wide column"></div>
                                <div className="ten wide column">
                                    <h1 className='ui header'>Contact <i className="graduation cap icon"></i></h1>
                                    <form className="ui form" onSubmit={handleContact}>
                                        <div className="field">
                                            <label>Your mail</label>
                                            <input
                                                required
                                                type="text"
                                                name="first-name"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="field">
                                            <label>Your message</label>
                                            <textarea
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                required>
                                            </textarea>
                                        </div>
                                        <ErrorMessage message={reply}/>
                                        <div style={{width: '100%', textAlign: 'center'}}>
                                            <button className="ui button" type="submit">Send</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="three wide column"></div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </section>
        </>
    )
}
export default Home