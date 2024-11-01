const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div", {id:"child"}, 
        [React.createElement("h1", {id:"heading"}, "im an h1 tag with color red" ),React.createElement("h2",{id:"h23"}, "im an h2 with green")]
    ),React.createElement("div", {id:"child"}, 
        [React.createElement("h1", {id:"heading"}, "im an h1 tag with color red" ),React.createElement("h2",{id:"h23"}, "im an h2 with green")]
    )]
)
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

