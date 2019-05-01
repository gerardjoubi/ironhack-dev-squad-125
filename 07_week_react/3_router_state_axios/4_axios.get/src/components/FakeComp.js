import React from "react";

export default class FakeComp extends React.Component {
  constructor() {
    super();
    this.state = {
      toto: true
    };
    this.doAsyncStuff();
  }

  doAsyncStuff() {
    setInterval(() => {
        this.setState({toto: !this.toto});
    }, 1000);
  }

  componentDidMount() {
    console.log("Now i'm alive and append to the DOM");
  }
  componentDidUpdate() {
    console.log("update");
  }
  render() {
    return <div>im a fake component, i got no purpose in life :D</div>;
  }
}
