import React from "react";
import ReactDOM from "react-dom";

const App = () => ( 
    <div>
        <h1>Hello React</h1>
    </div>
);

const Helper = () => {
    
}

const Title = () => {
    const [likes, setLikes] = React.useState();

    function handleClick() {
      setLikes(likes + 1)
    }
   return (
        <div>
            <button onClick={handleClick}>Likes</button>
        </div>)
};
ReactDOM.render(<App/>,document.querySelector("#root"));

ReactDOM.render(<Title/>,document.querySelector('#second'));