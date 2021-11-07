/*Componente che visualizza uno switch button */
import React from "react";
const SwitchComponent = props => {
  return (
    <>
      <span className="m-2">{props.title}</span>
      <label className="switch">
        <input
          name={props.title}
          value={props.value}
          onChange={() => {
            props.onChange(!props.value);
          }}
          type="checkbox"
        />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default SwitchComponent;
