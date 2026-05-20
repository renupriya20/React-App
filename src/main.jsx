// //! JS way
//  const divTag = document.getElementById("root");
// const h1Tag = document.createElement("h1");
// h1Tag.textContent = "Hello React! using JS way";
//  divTag.appendChild(h1Tag);
 
//! React way

import { createRoot } from "react-dom/client";
import App from "./App";

//global CSS
import "./index.css";
// createRoot(document.getElementById("root")).render(<h1>Hello React!</h1>);
createRoot(document.getElementById("root")).render(<App/>);
//! <></> --> Fragments