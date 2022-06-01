// require React
const React = require("react");

// get the default html format function from default.jsx file
const Def = require("./default.jsx");

// create default home function to generate html for homepage
function home() {
    return (
        // Use the default wrapper from default.jsx
        <Def>
            {/* Add the children elements -> Main */}
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

// export the home function
module.exports = home;