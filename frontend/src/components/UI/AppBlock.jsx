import React from "react";
import {useNavigate} from "react-router-dom";

const AppBlock = (props) => {
    const navigate = useNavigate()
  return (
    <>
      <div className="column">
        <div className="ui card">
          <div className="image" style={{ cursor: "pointer" }}>
            <img
              alt={props.title}
              src={props.source}
              onClick={() => navigate(props.link)}
            />
          </div>
          <div className="content">
            <a href={props.link} className="header center">
              {props.title}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBlock;