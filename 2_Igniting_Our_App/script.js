import React from "react";
// import ReactDOM from "react-dom"; gives warning
import ReactDOM from "react-dom/client";
// HMR -> Hot Module Reloading
// File Watcher Algorithm - C++

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", {}, "Heading1");
root.render(heading);
// npx parcel entryPoint -> faster development build for our project and serves it on the server
// npx parcel build entryPoint -> production build
// npx parcel entryPoint --https