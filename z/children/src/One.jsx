import React from "react";

// We used this component from the 'App' component where we passed children to this component in between the <One> tags.Notice from a class component,we can access the children by doing 'this.props.children'
class One extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>From One</h2>
        {this.props.children}
      </div>
    );
  }
}

export default One;
