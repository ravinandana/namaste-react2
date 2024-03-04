const heading = React.createElement(
    "h1",
     {}, 
     "Hello world from React Library"
);

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement(
                    "h1",
                    {},
                    "This is heading 1 in child"
                ),
                React.createElement(
                    "h2",
                    {},
                    "This is heading 2 in child"
                )
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement(
                    "h1",
                    {},
                    "This is heading 1 in child"
                ),
                React.createElement(
                    "h2",
                    {},
                    "This is heading 2 in child"
                )
            ]
        )
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent)




/*

<div id="parent">
<div id="child">
<h1></h1>
</div>
<div>

*/
