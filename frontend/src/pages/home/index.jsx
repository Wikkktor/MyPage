import React, { useContext, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import ErrorMessage from "../../components/UI/ErrorMessage";
import { Link } from "react-router-dom";
import "./App.css";
import wiktor from "../../assets/wiktor.jpeg";
import beautybon from "../../assets/beautybon.png";
import danky from "../../assets/danky.png";
import salony from "../../assets/salony.png";
import auschwitz from "../../assets/auschwitz.png";
import uzyjto from "../../assets/uzyjto.png";
import mypage from "../../assets/mypage.png";
import { UserContext } from "../../context/UserContext";
import PortfolioBlock from "../../components/UI/PortfolioBlock";
import EducationBlock from "../../components/UI/EducationBlock";
import SkillsBlock from "../../components/UI/SkillsBlock";

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [token] = useContext(UserContext);

  const submitContact = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        message: message,
      }),
    };
    const response = await fetch("api/send-email", requestOptions);
    const data = await response.json();
    setReply(data.detail);
  };

  const handleContact = (e) => {
    e.preventDefault();
    submitContact();
  };

  return (
    <>
      <section>
        <Navbar />
        <div className="pusher">
          <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui container">
              <div className="ui large secondary inverted pointing menu">
                <a href="/#" className="toc item">
                  <i className="sidebar icon"></i>
                </a>
                <Link to="/" className="active item">
                  Main page
                </Link>
                <a href="/#about_me" className="item">
                  About me
                </a>
                <a href="/#experience" className="item">
                  Experience
                </a>
                <a href="/#portfolio" className="item">
                  Portfolio
                </a>
                <a href="/#education" className="item">
                  Education
                </a>
                <a href="/#skills" className="item">
                  Skills
                </a>
                <a href="/#skills" className="item">
                  Contact
                </a>
                {!token ? (
                  <div className="right item">
                    <Link to="/login" className="ui inverted button">
                      Log in
                    </Link>
                    <Link to="/register" className="ui inverted button">
                      Sign Up
                    </Link>
                  </div>
                ) : (
                  <div className="right item">
                    <Link to="/react-apps" className="ui inverted button">
                      React Apps
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="ui text container">
              <img
                style={{ margin: "4em auto 0" }}
                className="ui medium circular image"
                alt="me"
                src={wiktor}
              />
              <h1 style={{ marginTop: "0" }} className="ui inverted header">
                Wiktor Karaszewicz
              </h1>
              <h2>Web developer </h2>
              <a href="https://github.com/wikkktor">
                <button className="ui github button">
                  <i className="github icon"></i>
                  Github
                </button>
              </a>
              <a href="https://www.linkedin.com/in/wiktor-karaszewicz/">
                <button className="ui linkedin button">
                  <i className="linkedin icon"></i>
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
          <div id="about_me" className="ui container big-margin">
            <h1 className="ui header">
              About me{" "}
              <i
                style={{ transform: "rotate(45deg)" }}
                className="hand point down icon"
              ></i>
            </h1>
            <div className="ui raised segment">
              <div className="mytext">
                <p>
                  Hi! I am Wiktor Karaszewicz Web developer, I live in Warsaw.
                </p>
                <p>
                  I've been interested in programming since 2020, that's when I
                  started creating my first sites using html and css and had fun
                  using inspector to change the content of sites on my computer.
                </p>
                <p>
                  After a year, I started taking programming and IT seriously by
                  devoting more time to it, gaining experience and learning
                  Python.
                </p>
                <p>
                  Currently I am a student of IT subjects in English working as
                  a web developer.
                </p>
              </div>
            </div>
          </div>
          <div id="experience" className="ui container big-margin">
            <h1 className="ui header">
              Experience <i className="chart line icon"></i>
            </h1>
            <div className="ui stackable two column grid">
              <div className="column">
                <div className="ui raised segment max-height">
                  <div className="mytext">
                    <div
                      className="is-flex-direction-row"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h2 className="ui header">Junior Web Developer</h2>
                      <h4
                        style={{ margin: "0", textAlign: "right" }}
                        className="ui header"
                      >
                        January 2022 - now
                      </h4>
                    </div>
                    <h3 className="ui header no-m">Grupa Lucrum Sp.z.o.o</h3>
                    <ul className="ui list">
                      <li>Creation of dedicated web app</li>
                      <li>Development of CMS systems for small companies</li>
                      <li>Contacting customers and identifying their needs</li>
                      <li>
                        Optimization of js/css/images for better website
                        performance
                      </li>
                      <li>Deploying application</li>
                      <li>Administration of created systems</li>
                      <li>
                        Web development in html css js from graphic designers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="ui raised segment max-height">
                  <div className="mytext">
                    <div
                      className="is-flex-direction-row"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h2 className="ui header">Webshop Administrator</h2>
                      <h4
                        style={{ margin: "0", textAlign: "right" }}
                        className="ui header"
                      >
                        May 2021 - September 2021
                      </h4>
                    </div>
                    <h3 className="ui header no-m">Kabex</h3>
                    <ul className="ui list">
                      <li>Integration of the web shop with the ERP system.</li>
                      <li>
                        Adding offers for e-commerce platforms and updating them
                      </li>
                      <li>Monitoring and reporting of sales results.</li>
                      <li>Ordering and invoicing flow managing.</li>
                      <li>Updating erp systems and related applications</li>
                      <li>
                        Taking care of the proper operation of resources on the
                        server
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="portfolio" className="ui container big-margin">
            <h1 className="ui header">
              Portfolio <i className="code icon"></i>
            </h1>
            <div className="ui special cards grid stackable three column">
              <PortfolioBlock
                name="Beautybon"
                image={beautybon}
                href="https://beautybon.pl"
                description="The application creates named vouchers that are for later
              use. It has a panel for sellers where, based on a unique
              code, the voucher can be set as used."
                tech="Django, Semantic Ui, JavaScript, PostgreSQL"
              />

              <PortfolioBlock
                name="Użyjto"
                image={uzyjto}
                href="https://uzyj.to"
                description="Invented by a group of architects, the portal for
                displaying leftover materials after construction or
                renovation. The idea behind the app is to promote the eco
                movement. It has filtered offers by location with radius
                and chat so you can find materials near your location and
                contact the seller."
                tech="Django, Semantic Ui, JavaScript, PostgreSQL, PostGIS, Ajax"
              />

              <PortfolioBlock
                name="Salony piękna"
                image={salony}
                href="https://salonypiekna.pl"
                description="Logged in user can add his own beauty salon or find places
                in that kind in his area. Application gives flexible
                possibilities to add an advertisement in the desired
                location, for example: on the city page or province or
                category in the certain city."
                tech="Django, MySQL, JavaScript, Bootstrap5"
              />

              <PortfolioBlock
                name="Danky"
                image={danky}
                href="https://danky.pl"
                description="Marketplace for branded items, focused on shoes. A safe
                place for resellers of clothes and shoes that earns
                commissions from transactions. Online chat allows quick
                contact between potential buyers and sellers."
                tech="Django, PostgreSQL, JavaScript, Ajax"
              />
              <PortfolioBlock
                name="Auschwitzcracow"
                image={auschwitz}
                href="https://auschwitzcracow.com"
                description="The app gives you the ability to choose the date, options
                and language of the tour based on the information's
                provided in dedicated admin panel. Created in two
                languages."
                tech="Django, jQuery, JavaScript, Bootstrap5, Multilingual, PostgreSQL"
              />
              <PortfolioBlock
                name="React Apps"
                image={mypage}
                href="https://wiktorkaraszewicz.herokuapp.com/"
                description="My resume page is made in react and has some sample react
                projects. It is necessary to log in, because the
                applications rely on a database connection."
                tech="FastAPI, React, Redux, JWT"
              />
            </div>
          </div>
          <div id="education" className="ui container big-margin">
            <h1 className="ui header">
              Education <i className="graduation cap icon"></i>
            </h1>
            <EducationBlock
              header="Polish-Japanese Academy of Information Technology"
              years="2022 - 2026 Engineer"
              description="Faculty of Computer Science, Warsaw, Poland."
            />
            <EducationBlock
              header="Lazarski University"
              years="2020 - 2023 Bachelor"
              description="Faculty of Economics, Warsaw, Poland."
            />
          </div>

          <div id="skills" className="ui container big-margin">
            <h1 className="ui header">
              Skills <i className="microchip icon"></i>
            </h1>
            <div className="ui grid">
              <div className="stackable eight very relaxed  column row">
                <SkillsBlock>PYTHON</SkillsBlock>
                <SkillsBlock>DJANGO</SkillsBlock>
                <SkillsBlock>FASTAPI</SkillsBlock>
                <SkillsBlock>FLASK</SkillsBlock>
                <SkillsBlock>POSTGRESQL</SkillsBlock>
                <SkillsBlock>DOCKER</SkillsBlock>
                <SkillsBlock>RESTAPI</SkillsBlock>
                <SkillsBlock>JAVASCRIPT</SkillsBlock>
                <SkillsBlock>REACT</SkillsBlock>
                <SkillsBlock>REDUX</SkillsBlock>
                <SkillsBlock>HTML5</SkillsBlock>
                <SkillsBlock>CSS3</SkillsBlock>
                <SkillsBlock>BOOTSTRAP</SkillsBlock>
                <SkillsBlock>SEMANTIC UI</SkillsBlock>
              </div>
            </div>
          </div>
          <div id="contact" className="ui container big-margin">
            <div className="ui stackable grid">
              <div className="row">
                <div className="three wide column"></div>
                <div className="ten wide column">
                  <h1 className="ui header">
                    Contact <i className="graduation cap icon"></i>
                  </h1>
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
                        required
                      ></textarea>
                    </div>
                    <ErrorMessage message={reply} />
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <button className="ui inverted button" type="submit">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
                <div className="three wide column"></div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};
export default Home;
