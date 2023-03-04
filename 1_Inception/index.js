const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement("h1", {}, "Heading1");
// passing react element into the root
// root.render(heading);

const heading1 = React.createElement(
	"h1",
	{
		id: "heading1",
		className: "heading",
		style: {
			backgroundColor: "#26186e",
			color: "white",
            padding: "5px"
		},
	},
	"Heading1"
);
const heading2 = React.createElement(
	"h2",
	{
		id: "heading2",
		className: "heading",
		style: {
			backgroundColor: "#582c91",
			color: "white",
			padding: "5px",
		},
	},
	"Heading2"
);

const container = React.createElement(
	"div",
	{
		id: "container",
		style: {
			backgroundColor: "#466aa3",
			padding: "10px",
		},
	},
	[heading1, heading2]
);

root.render(container);