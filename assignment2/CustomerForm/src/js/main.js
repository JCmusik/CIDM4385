let root = document.getElementById("root");

const App = () => {
  return React.createElement('div', { className: "bg-primary text-white p-4 border rounded border-dark", style: { margin: 'auto', marginTop: 50, width: 300, height: 200 } },
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
  return React.createElement("input", { className: 'form-control-lg input-group text-center border border-dark', placeholder: 'Email' });
};

const ZipCode = () => {
  return React.createElement("input", { className: ' form-control-lg input-group text-center border border-dark', placeholder: 'Zipcode', style: { marginTop: 5, marginBottom: 5 } })
};

const Submit = () => {
  return React.createElement("button", { className: 'btn border-dark', style: { float: 'right' } }, "Submit")
};

ReactDOM.render(React.createElement(App), root);
