import React from "react";

class State extends React.Component {

constructor(prop) {
    super(prop);
    this.id = 1234;

    this.state = {
        count:0,
    }    




}

// Create a One method to show an ID
showUserID = () => {
    console.log(this.id);
}


render() {
    return(
        <div>
            {/* Access the count variable by using this.state */}
        <p>
            Count is: {this.state.count}
        </p>
        <button onClick={()=>{
            this.setState({count:this.state.count + 1})
        }}>Increment</button>


        </div>
    )
}


}


export default State;





