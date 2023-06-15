import React from "react";

const Countries = (props) => {
    return (
        <div>
            <div>Name: {props.name}</div>
            <div>Flag: {props.flag}</div>
        </div>
    );
}

export default Countries;