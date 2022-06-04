// require React 
const React = require("react");

// define default function for creating html wrapper
function Def (html) {
    // function will return html format below
    return (
        <html>
            <head>
                <title>Title</title>
                {/* add bootstrap css styling */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                {/* find our style sheet in /public/css/style.css */}
                <link rel="stylesheet" href= "/css/style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {/* any children of the passed in html will go here */}
                {html.children}
            </body>
        </html>
    )
}

// export default function
module.exports = Def