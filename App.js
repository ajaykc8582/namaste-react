import React from "react";
import ReactDOM from "react-dom/client";

//JSX - Html or XML like syntax
const JsxHeading = ()=> (
  <h1 id="heading" className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);


//React functional component
const HeadingComponent = () => (
 <div id="container">
    {/* <JsxHeading /> */}
    {JsxHeading()}
  <h1 className="heading">This is functional component</h1>
  <h2>{console.log("This is js")}</h2>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);