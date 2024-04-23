# React README

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)

## What is React?

React is a JavaScript library for building user interfaces. It is used to build single-page applications and allows us to create reusable UI components.

React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook. React is a tool for building UI components.

## How does React Work?

React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating before making the changes in the browser DOM. React only changes what needs to be changed.

You will learn the various aspects of how React does this in the rest of this tutorial.

## React.JS History

- Current version of React.JS is V18.0.0 (April 2022).
- Initial Release to the Public (V0.3.0) was in July 2013.
- React.JS was first used in 2011 for Facebook's Newsfeed feature.
- Facebook Software Engineer, Jordan Walke, created it.
- Current version of create-react-app is v5.0.1 (April 2022).
- `create-react-app` includes built tools such as webpack, Babel, and ESLint.


## Learning by Examples

Our "Show React" tool makes it easy to demonstrate React. It shows both the code and the result.

### Example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);


<br>

</br>

##explanation


This example demonstrates a basic React component `Hello`, which renders a "Hello World!" heading. The component is rendered into the HTML element with the id "root" using `ReactDOM.createRoot()` and `root.render()`.

