import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return <h1>Hello World!</h1>;
};

const BodyComponent = () => {
  return (
    <div>
      <TitleComponent />
      <p>
        Component Composition is nothing but composing a component with other
        components
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BodyComponent />);