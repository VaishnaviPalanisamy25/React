import {React} from "react";
import ReactDOM from "react-dom/client";
import {createElement} from "react";
import { createRoot } from "react-dom/client";
const heading1 = createElement(
  "h1",
  {
    id: "title",
    key: "h1"
  },
  "Love Yourself"
);
const heading2 = createElement(
  "h2",
  {
    id: "title",
    key: "h2"
  },
  "Love Yourself More"
);
const container =createElement(
  "div",
  {
    id: "container",
  },
  [heading2, heading1]
);
const heading = (
  <h1 id="title" key="h3">
    Welcome React
  </h1>
);

const HeadingElement = () => {
  return (
    <div>
      {heading}
      <h1>Hello Vaishnavi</h1>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingElement/>);
