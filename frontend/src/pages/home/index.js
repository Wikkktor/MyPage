// App.js
import React, { Component } from "react";
import "./App.css";
import "./Home.scss";
import Hero from "../../components/Layout/Hero";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
class App extends Component {
  render() {
    return (
      <section className="HomePage">
        <Hero />
        <div className="content">
          <div className="Navigation" id="Navigation">
            <div className="items">
              <div className="item">
                <a href="#about-me">About Me</a>
              </div>
              <div className="item">
                <a href="#experience">Experience</a>
              </div>
              <div className="item">
                <a href="#education">Education</a>
              </div>
              <div className="item">
                <a href="#portfolio">Portfolio</a>
              </div>
              <div className="item">
                <a href="#skills">Skills</a>
              </div>
              <div className="item">
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="aboutMe" id="about-me">
            <div className="container">
              <h1 className="headerText">About me</h1>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  {" "}
                  <div className="mytext">
                    <p>
                      Hi! I am Wiktor Karaszewicz Full Stack developer in
                      Warsaw.
                    </p>
                    <p>
                      Passionate Full Stack Developer proficient in Python,
                      JavaScript, and modern frameworks like FastAPI and React.
                      Dedicated to crafting seamless user experiences and
                      scalable backend solutions. Let's build something
                      extraordinary together!
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6"></div>
              </div>
            </div>
          </div>
          <div className="experience" id="experience">
            <h1 className="headerText">Work Experience</h1>
            <div className="container">
              <div className="workItems">
                <div className="work">
                  <div className="dates">
                    <div className="position">FullStack Developer</div>
                    <div>From 01/2022 - present</div>
                    <div className="company">GrupaLucrum Sp. z o.o.</div>
                  </div>
                  <div className="desc">
                    <ul>
                      <li> Independent creation of dedicated applications</li>
                      <li>Editing / optimization of existing apps</li>
                      <li>Launching the application online ( nginx )</li>
                      <li>Administration of created systems</li>
                      <li>Contacting customers and identifying their needs</li>
                      <li>
                        Participating in every stage of application development
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="work">
                  <div className="dates">
                    <div className="position">Webshop Administrator</div>
                    <div>From 05/2021 - 01/2022</div>
                    <div className="company">Kabex</div>
                  </div>
                  <div className="desc">
                    <ul>
                      <li> Integration of the web shop with the ERP system</li>
                      <li>
                        Adding offers for the e-commerce platforms and updating
                        them.
                      </li>
                      <li>Monitoring and reporting of sales results</li>
                      <li>Ordering and invoicing flow management</li>
                    </ul>
                  </div>
                </div>
                <div className="work">
                  <div className="dates">
                    <div className="position">Company Owner</div>
                    <div>From 05/2021 - 01/2022</div>
                    <div className="company">Kabex</div>
                  </div>
                  <div className="desc">
                    <ul>
                      <li> Integration of the web shop with the ERP system</li>
                      <li>
                        Adding offers for the e-commerce platforms and updating
                        them.
                      </li>
                      <li>Monitoring and reporting of sales results</li>
                      <li>Ordering and invoicing flow management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" id="education">
            <h1 className="headerText">Education</h1>
            <div className="educationGrid">
              <div className="blockEducation">
                <h5>Bachelor of Economics</h5>
                <p className="university">Łazarski University</p>
                <p>2020 - 2023 Bachelor</p>
              </div>
              <div className="blockEducation">
                <h5>Engineer of Computer Science</h5>
                <p className="university">
                  School of Business National Louis University
                </p>
                <p>2022 - 2026 Engineer</p>
              </div>
            </div>
            <h1 className="headerText">Certificates</h1>
            <div className="educationGrid certi">
              <div className="blockEducation">
                <h5>FastAPI - The Complete Course 2023 ( 20h )</h5>
                <p>Udemy 2023</p>
              </div>

              <div className="blockEducation">
                <h5>React - The Complete Guide 2023 ( 68,5 h )</h5>
                <p>Udemy 2023</p>
              </div>
              <div className="blockEducation">
                <h5>Pre Security Learning Path</h5>
                <p>TryHackMe 2022</p>
              </div>
              <div className="blockEducation">
                <h5>Python Developer</h5>
                <p>Coderslab 2022</p>
              </div>
              <div className="blockEducation">
                <h5>CS50x</h5>
                <p>Cambridge Massachusetts 2022</p>
              </div>

              <div className="blockEducation">
                <h5>Introdction to Cyber Security Learning Path</h5>
                <p>TryHackMe 2022</p>
              </div>
              <div className="blockEducation">
                <h5>VBA w praktyce, czyli jak zautomatyzować pracę w Excelu</h5>
                <p>Lab masters 2020</p>
              </div>
            </div>
          </div>
          <div id="portfolio">
            <h1 className="headerText">Portfolio</h1>
          </div>

          <div className="container" id="skills">
            <h1 className="headerText">Skills</h1>
            <p>Backend</p>
            <div className="skillsGrid">
              <div className="skill">FastAPI</div>
              <div className="skill">Django</div>
              <div className="skill">Flask</div>
              <div className="skill">Node.js</div>
              <div className="skill">PostgreSQL</div>
            </div>
            <p className="mt-3">Frontend</p>
            <div className="skillsGrid">
              <div className="skill">JavaScript</div>
              <div className="skill">React</div>
              <div className="skill">Redux</div>
              <div className="skill">HTML5</div>
              <div className="skill">CSS3</div>
              <div className="skill">Bootstrap5</div>
            </div>
            <p className="mt-3">General</p>
            <div className="skillsGrid">
              <div className="skill">Docker</div>
              <div className="skill">Nginx</div>
              <div className="skill">ReactNative</div>
              <div className="skill">Google Cloud</div>
            </div>
          </div>
          <div className="container" id="contact">
            <h1 className="headerText">Contact</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
