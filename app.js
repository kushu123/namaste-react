      import React from "react";
      import ReactDOM from "react-dom/client";      
            
            const heading = React.createElement(
                "h1", 
                {id : "heading"}, 
                "Hello Mr.!"
                );
            
            

            const parent = React.createElement("div",{id: "parent"},
                [React.createElement("div",{id: "child1"},
                [React.createElement("h1",{},"My Name is Kushagra",), React.createElement("h2",{},"Mishra")
                ]),
                React.createElement("div",{id: "child2"},
                    [React.createElement("h1",{},"My Name is Kushagra",), 
                    React.createElement("h2",{},"Mishra")
                ])]
            );
            console.log(parent);
            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(parent);
            