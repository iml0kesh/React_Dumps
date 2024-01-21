import { useContext } from "react";
import { Data } from "./App";

const CompA = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          return <h1>My name is: {name}</h1>;
        }}
      </Data.Consumer>
    </>
  );
};

export default CompA;
