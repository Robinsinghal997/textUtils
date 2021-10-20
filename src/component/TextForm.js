import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  // setText('hello Robin');
  const click = () => {
    // console.log("Upper case was clicked",Text);
    var t = Text.toUpperCase();
    setText(t);
    props.showAlert("Converted to UpperCase ","success")
  };
  const clicklowercase = () => {
    // console.log("lower case was clicked",Text);
    var t = Text.toLowerCase();
    setText(t);
    props.showAlert("Converted to LowerCase","success")
  };
  const clickonchnage = (event) => {
    // console.log("onchange ");
    setText(event.target.value);
  };
  const textclear = (event) => {
    // console.log("onchange ");
    setText("");
    props.showAlert("Text is clear ","success")
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#13233a" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={clickonchnage}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#13233a" 
            }}
            id="mybox"
            rows="10"
          ></textarea>
          <button className="btn btn-primary mx-2 my-2" onClick={click}>
            converting to UpperCass
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={clicklowercase}
          >
            converting to Lowercase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={textclear}>
            Clear text
          </button>
        </div>
      </div>


      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#13233a" }}
      >
        <h2>Your Text Summary </h2>
        <p>
          {Text.split(" ").length} words and {Text.length} character
        </p>
        <p>{0.008 * Text.split(" ").length} Minimum time to read this word</p>
        <h2>Pereview</h2>
        <p>{Text.length>0?Text:"Enter something  text to above preview to here"}</p>
      </div>
    </>
  );
}
