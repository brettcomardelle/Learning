import React from "react";
import ReactDOM from "react-dom";

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const user = {
    firstName: 'Brett',
    lastName: 'Comardelle'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);
// OTHER JSX EXAMPLES
// ==================
// const element = <a href="https://www.reactjs.org">link</a>;  // use quotes like standard HTML
// const element = <img src={user.avatarUrl}></img>;    // curly braces to use JS logic

// JSX CHILDREN
// ============
// const element = (
//     <div>
//         <h1>Hello!</h1>
//         <h2>Good to see you here.</h2>
//     </div>
// );

// JSX REPRESENTS OBJECTS
// ======================
// const element = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );

// -- is similar to --

// const element = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world!'
// );

// -- it essentially creates an object like --

// const element = {
//     type: 'h1',
//     props: {
//         className: 'greeting',
//         children: 'Hello, world!'
//     }
// };

ReactDOM.render(
    element,
    document.getElementById('root')
);