


function Two(props) {

    console.log(props);


    return(
        <div>

            <h2>From Two</h2>
            {props.children}
        </div>
    )
}


export default Two;