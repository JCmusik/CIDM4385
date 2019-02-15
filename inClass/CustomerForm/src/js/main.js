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
const thingy = React.createElement("div", { className: 'bg-dark text-white m-4 p-4' }, "Stuff that goes in the paragraph");

const App = () => {
  return React.createElement('div', { className: "container bg-dark text-white p-3", style: { width: 270 } },
    React.createElement(Form, {}
    )
  )
};

const Form = () => {
  return React.createElement('form', {}, [
    React.createElement(Email, { key: 1 }),
    React.createElement(ZipCode, { key: 2 }),
    React.createElement(Submit, { key: 3 })
  ])
};

const Email = () => {
  return React.createElement('div', { className: 'input-group', }, React.createElement("input", { className: 'm-1 p-2', placeholder: 'Email' }));
};

const ZipCode = () => {
  return React.createElement('div', { className: 'input-group' }, React.createElement("input", { className: 'm-1 p-2', placeholder: 'Zip Code' }))
};

const Submit = () => {
  return React.createElement("button", { className: 'btn btn-secondary btn-sm m-1' }, "Submit")
};



ReactDOM.render(React.createElement(App), root);
