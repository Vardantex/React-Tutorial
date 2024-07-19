import React from "react";

class One extends React.Component {

constructor(prop) {
    super(prop);

    this.id = 1234;
}

// Create a one method to show an ID
showUserID = () => {
    console.log(this.id);
}


render() {

    const message = "This is from a class component: One";

    return(
        <div>
        <h1>Hello</h1>
        
        {message}

          <p>-----------</p>


        </div>

    )
}


}


export default One;





