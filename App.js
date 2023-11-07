
const parent = React.createElement("div",{id:'parent'},
[React.createElement("div",{id:"child1"},[
    React.createElement("h1",{id:"child1"},"Inside child1"),
    React.createElement("h2",{id:"sibling"},"Inside sibling")]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{id:"child2"},"Inside child1"),
    React.createElement("h2",{id:"sibling"},"Inside sibling")
])]
);

console.log(parent);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);