import One from "./One";
import Two from "./Two";

import "./App.css";

function App() {
  return (
    <>
      {/* Anything in between the opening and closing tags of <One> or <Two> is a child */}
      <One>
        <div>Child element of One</div>
        <p>Another Child element of One</p>
      </One>

      <Two>
        <div>Child element of Two</div>
        <p>Another Child element of Two</p>
      </Two>
    </>
  );
}

export default App;
