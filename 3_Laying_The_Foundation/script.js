import React from "react";
// import ReactDOM from "react-dom"; gives warning
import ReactDOM from "react-dom/client";
// HMR -> Hot Module Reloading
// File Watcher Algorithm - C++

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", { key: "1" }, "Heading1");
const heading2 = React.createElement("h1", { key: "2" }, "Heading2");

// const container = React.createElement("div",{}, [heading, heading2]);

// root.render(heading);
// root.render(container);
console.log(heading);

// npx parcel entryPoint -> faster development build for our project and serves it on the server
// npx parcel build entryPoint -> production build
// npx parcel entryPoint --https

// React.createElement() => Object => HTML(DOM)

// JSX => React.createElement() => Object => HTML(DOM)
// JSX => React.createElement() is done by Babel.
const heading3 = (
	<h1 key="jsx">HEADING CREATED USING JSX</h1> // JSX Expression
);

// const container = React.createElement("div", {}, [heading, heading3]);

// const HeaderComponent = () => {
// 	return (
// 		<div key="comp">
// 			{/* {console.log(10)}; */}
// 			{/* <h1 key="comp_h1">Header returned from HeaderComponent</h1> */}
// 		</div>
// 	);
// };

const HeaderComponent = () => {
	(
        <h3 key="functional_component">Header returned from HeaderComponent</h3>
	);
};

const container = React.createElement("div", {}, [
	heading, 
    heading3,
    // <HeaderComponent />
]);

root.render(container);
