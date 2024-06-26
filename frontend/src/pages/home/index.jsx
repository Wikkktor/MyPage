import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import beautybon from "../../assets/beautybon.png";
import danky from "../../assets/danky.png";
import salony from "../../assets/salony.png";
import auschwitz from "../../assets/auschwitz.png";
import uzyjto from "../../assets/uzyjto.png";
import mypage from "../../assets/mypage.png";
import PortfolioBlock from "../../components/UI/PortfolioBlock";
import EducationBlock from "../../components/UI/EducationBlock";
import SkillsBlock from "../../components/UI/SkillsBlock";

const Home = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);

  const handleToggle = () => {
    setNavbarToggle(!navbarToggle);
  };

  let navbarToggleClass = navbarToggle
    ? "topnav responsive only_mobile"
    : "topnav only_mobile";

  return (
    <>
      <section>
        <div className="pusher">
          <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui container">
              <div className={navbarToggleClass} id="myTopnav">
                <div className="active">
                  <a href="/#root">Home</a>
                </div>
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
                <a href="javascript:;" className="icon" onClick={handleToggle}>
                  &#9776;
                </a>
              </div>
              <div className="ui large secondary inverted pointing menu only_desktop">
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
              </div>
            </div>
            <div className="ui text container">
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
                  Computer science student with a bachelor's degree in economics
                  ( currently studying computer science ), Full Stack programmer
                  since 2022 in the industry since 2021.
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
                href="https://wiktorkaraszewicz.herokuapp.com/react-apps"
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
        </div>
      </section>
    </>
  );
};
export default Home;
