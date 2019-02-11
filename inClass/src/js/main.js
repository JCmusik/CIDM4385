let root = document.getElementById("root");

// let content = React.createElement(
//   "ul",
//   {},
//   React.createElement("li", {}, "First Item"),
//   React.createElement("li", {}, "Second Item")
// );

let jsxcontent = (
  <ul>
    <li>
      <span className="text-danger">First Item</span>
    </li>
    <li>
      <span className="text-warning">Second Item</span>
    </li>
    <li>
      <span className="text-success">Third Item</span>
    </li>
  </ul>
);

ReactDOM.render(jsxcontent, root);
