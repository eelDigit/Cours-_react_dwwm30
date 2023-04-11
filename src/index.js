import React from "react";
import ReactDOM  from "react-dom";



// ReactDOM.render(
  // React.createElement("h1", null, React.createElement("p", null, "coucou")) , document.getElementById("root")
  // );


  //ReactDOM.render(<h1 className="title"><p className="p">coucou</p></h1>, document.getElementById("root"));
  
  // -------
// const element = <h1>coucou</h1>;

// ReactDOM.render(element, document.getElementById("root"));
// --------

//const element = <App />;


import App from "./App";

ReactDOM.render(<App />, 
document.getElementById("root"));