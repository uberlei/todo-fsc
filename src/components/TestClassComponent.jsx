import React from "react";

class TesteClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello, World!" };
  }

  componentDidMount() {
    console.log("EXECUTADO A PRIMEIRA VEZ");
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default TesteClassComponent;
