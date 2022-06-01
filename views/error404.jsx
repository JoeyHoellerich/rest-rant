// require React
const React = require("react");

// get default html wrapper (from views/default.jsx)
const Def = require("./default.jsx");

// create function to return html content for error 404 page
function error404() {
    return (
        // use default wrapper
        <Def>
            {/* create generic 404 content */}
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

// export function
module.exports = error404;