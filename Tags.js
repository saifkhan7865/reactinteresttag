import React from "react";
import { useState } from "react";

const Tags = (props) => {
  const {
    crossImage,
    styleClass,
    CustomStyle,
    CrossClass,
    InputClass,
    SendClass,
    SendImage
  } = props;

  const { value, interest, setIntersts } = props.value;
  const [newvalue, setNewvalue] = useState("");
  //this function will add the value
  function Addthevalue() {
    if (newvalue !== "") {
      setIntersts([...interest, newvalue]);
      setNewvalue("");
    }
  }
  //this function will remove the value
  function RemoveTheValue(name) {
    setIntersts(
      interest.filter((value, index) => {
        return value !== name;
      })
    );
  }

  return (
    <>
      {interest.map((value, index) => {
        return (
          <>
            <button
              style={CustomStyle}
              className={styleClass}
              onClick={(e) => {
                RemoveTheValue(e.target.name);
              }}
              name={value}
              id={index}
            >
              <img
                alt="Hello"
                className={CrossClass}
                name={value}
                onClick={(e) => RemoveTheValue(e.target.value)}
                src={crossImage}
              />
              {" " + value}
            </button>
          </>
        );
      })}
      <br />
      {value === true && (
        <>
          <input
            className={InputClass}
            value={newvalue}
            onChange={(e) => {
              setNewvalue(e.target.value);
            }}
            type="text"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                return Addthevalue();
              }
            }}
          />
          <button onClick={() => Addthevalue()} className={SendClass}>
            <img src={SendImage} alt="" srcset="" />
          </button>
        </>
      )}
    </>
  );
};

export default Tags;
