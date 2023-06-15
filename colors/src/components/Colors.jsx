import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Colors = (props) => {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      {/* <div>id : {props.id}</div> */}
      {/* <div>Name: {props.name}</div> */}
      {/* <div>Year: {props.year}</div> */}

      <div>Color: {props.color} </div>
      <div style={{color: props.color}}>Color: {props.color}</div>

      {/* <div>pantone_value: {props.value}</div> */}
      <div>--------------</div>
    </div>
  );
};

export default Colors;
