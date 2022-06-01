// require React 
const React = require("react");

// define default function for creating html wrapper
function Def (html) {
    // function will return html format below
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {/* any children of the passed in html will go here */}
                {html.children}
            </body>
        </html>
    )
}

// export default function
module.exports = Def