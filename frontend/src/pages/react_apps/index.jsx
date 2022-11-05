import React from "react";
import {useNavigate} from "react-router-dom";
import todoapp from '../../assets/todoapp.jpg'
import foodapp from '../../assets/food-app.jpg'
import AppBlock from "../../components/UI/AppBlock";
const ReactApps = () => {
  const navigate = useNavigate()

  return (
    <>
      <div id="portfolio" className="ui container big-margin">
        <h1 className="ui header">
          React Apps <i className="react icon"></i>
        </h1>
        <div className="ui special cards grid stackable three column">
          <AppBlock 
          source={todoapp}
          link='/todo'
          title='TODO APP'
          />

          <AppBlock 
          source={foodapp}
          link='/food-app'
          title='FOOD-APP'
          />

        </div>
      </div>
    </>
  );
};

export default ReactApps;
