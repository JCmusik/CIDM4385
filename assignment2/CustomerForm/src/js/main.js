let root = document.getElementById("root");

const App = () => {
  return React.createElement('div', {
    className: "bg-primary text-white p-4 border rounded border-dark",
    style: {
      margin: 'auto',
      marginTop: 50,
      width: 300,
      height: 200
    }
  },
    React.createElement(Form, {}
    )
  )
};

ReactDOM.render(React.createElement(App), root);
