// require React
const React = require("react");

// require the default html wrapper
const Def = require("../default.jsx");

// define html format for form
function new_form() {
    return(
        <Def>
            <main>
                <h1>Add a New Place</h1>
            </main>
        </Def>
    )

}

//export function
module.exports = new_form;