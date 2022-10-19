import React from "react";

const PortfolioBlock = (props) => {
  return (
    <div className="column">
      <div
        className="ui card" style={{cursor: 'pointer'}}
        onClick={() => (window.location = `${props.href}`)}
      >
        <div className="image">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <a
            href={props.href}
            style={{ textDecoration: "underline" }}
            className="header"
          >
            {props.name}
          </a>
          <div className="description">{props.description}</div>
        </div>
        <div className="extra content">
          <span>{props.tech}</span>
        </div>
      </div>
    </div>
  );
};
export default PortfolioBlock;
