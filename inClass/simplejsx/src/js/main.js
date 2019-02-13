let root = document.getElementById("root");

const car = {
  make: "Ford",
  motor: {
    cylinders: "4",
    displacement: "1.8 liter",
    horsepower: 350
  }
};
// let content = React.createElement(
//   "ul",
//   {},
//   React.createElement("li", {}, "First Item"),
//   React.createElement("li", {}, "Second Item")
// );
const thingy = React.createElement("p", { className: 'bg-dark text-white m-4 p-4' }, "Stuff that goes in the paragraph");

const ToDoList = (props) => {
  React.createElement("ul", {}, [
    React.createElement("li", {}, "First Thing"),
    React.createElement("li", {}, "Second Thing")
  ]);
};

ReactDOM.render(ToDoList, root);
