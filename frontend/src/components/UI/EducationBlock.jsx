import React from "react";

const EducationBlock = (props) => {
  return (
    <div className="ui raised segment">
      <div className="mytext">
        <h3 className="ui header">
          {props.header}
        </h3>
        <h4 className="ui header no-m">{props.years}</h4>
        {props.description}
      </div>
    </div>
  );
};

export default EducationBlock;
