import React from "react";

class TwoProp extends React.Component {

    render() {
        console.log(this.props);


        return(
            <>
            <p>{this.props.productName}</p>
            </>
        )

    }
}


export default TwoProp