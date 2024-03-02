import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

ReactDOM.render(
<App 

/>, 
document.getElementById("root")
);

/* useState Explanation
In React, `useState` is a hook that lets you add state to function components. Think of state as a way to keep track of information that can change over time and should be displayed in the UI. When you use `useState`, you get back two things: a variable that holds the current state value and a function to update that value.

Here’s how to use `useState` in very simple terms:

1. Import `useState` from React.
2. Call `useState()` and pass the initial state to it. This will return an array with two elements.
3. The first element is the current value of the state, and you can name it whatever you want.
4. The second element is a function that lets you update the state, and you can also name it whatever you want.

When you call `useState()`, you should use the array destructuring syntax to get these two elements,
*/