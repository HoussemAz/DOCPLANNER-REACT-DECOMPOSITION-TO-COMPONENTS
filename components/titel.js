import React from "react";

export default function titel(props) {
  return (
    <React.Fragment>
      <div className="head">
        <img
          className="llogo"
          src="https://www.docplanner.com/img/sygnet.png"
          srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"
          alt=""
        />
        <h1>Making the healthcare experience more human</h1>
      </div>
      <div className="word">
      {props.word.map(el => (
        <p>{el.text}</p>
       
      ))}
      </div>
    </React.Fragment>
  );
}
