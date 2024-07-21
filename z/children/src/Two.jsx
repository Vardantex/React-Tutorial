//To access the children from a functional component,we use 'props.children'. We imported and used this component 'Two' from the parent Component which is the 'App' component and passed children in between opening and closing tags of <Two>. Remember props is a parameter name and you can change the name
function Two(props) {
  console.log(props);

  return (
    <div>
      <h2>From Two</h2>
      {props.children}
    </div>
  );
}

export default Two;
