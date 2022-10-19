import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {useNavigate} from "react-router-dom";

const ReactApps = () => {
  const [token] = useContext(UserContext);
  const navigate = useNavigate()
  if (!token) {
    navigate("/login");
  }

  return (
    <>
      <div id="portfolio" className="ui container big-margin">
        <h1 className="ui header">
          React Apps <i className="react icon"></i>
        </h1>
        <div className="ui special cards grid stackable three column">
          <div className="column">
            <div className="ui card">
              <div className="image">
                <img alt="beautybon" />
              </div>
              <div className="content">
                <a href="/todo" className="header center">
                  TODO APP
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui card">
              <div className="image">
                <img alt="beautybon" />
              </div>
              <div className="content">
                <a href="/expenses" className="header center">
                  EXPENSES TRACKER
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui card">
              <div className="image">
                <img alt="beautybon" />
              </div>
              <div className="content">
                <a href="/food-app" className="header center">
                  FOOD-APP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactApps;
