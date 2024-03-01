import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

ReactDOM.render(
<App 

/>, 
document.getElementById("root")
);

/* useState Explanation
Imagine you have a digital scoreboard that displays the score of a game. Initially, the score is 0. Whenever a team scores, you need to update this scoreboard. In a React application, this scoreboard is like a component, and the score is what we call "state."

Now, `useState` is like getting two magical tools from React:

1. **The first tool shows the current score**: Think of it as a digital display you're looking at. This is your state value.

2. **The second tool lets you change the score**: This is a remote control that allows you to update the display. Whenever you push its buttons (call this function), the score on the display changes accordingly.

When you use `useState`, you tell React, "Hey, I have some information here (like our score) that might change over time. Keep an eye on it for me, will you? And change it when I tell you to." React says, "Sure, here's your current score (state), and if you need to change it, use this remote (setState)."

Let's put this in code terms very briefly:

```javascript
const [score, setScore] = useState(0);
```

- `score` is the current value of our scoreboard.
- `setScore` is the function we use to update that score.
- `useState(0)` is how we tell React to start tracking our score, with `0` being the initial score.

Whenever you want to update the score because a team scored a point, you'd do something like this:

```javascript
setScore(score + 1);
```

This tells React to update the scoreboard with the new score.

**In summary**, `useState` is a way for your React components to remember information (like a score) and change it when needed, with React taking care of updating the component to show the latest information.

### Manual Entry: Understanding `useState` in React
- **What is it?**: A hook that lets components keep track of changing data.
- **How it works?**: Gives you two pieces of magic: a way to see the current state and a way to update it.
- **Usage Example**:
    - Declare state: `const [score, setScore] = useState(0);`
    - Update state: `setScore(score + 1);`
- **Why it matters**: It allows your app to react to changes and update the UI accordingly.

For the official and detailed explanation, always refer to the React documentation on `useState`: [React Docs - useState](https://reactjs.org/docs/hooks-state.html).

*/