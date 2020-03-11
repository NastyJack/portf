import React from "react";

class Chuck extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <button className="chuckbutton">Fetch Chuck Facts</button>
      </>
    );
  }
}
export default Chuck;
