import React from "react";

class One extends React.Component {


    render() {
        console.log(this.props);

        return(

            <div>
            <h2>From One</h2>
            {this.props.children}

            </div>
        );
    }

}


export default One;
