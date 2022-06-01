// require React
const React = require("react");

// require the default html wrapper
const Def = require("../default.jsx");

// create function to return places content 
// pass in places data
function index(data) {
    // map through the passed in data (place data = {name, city, state, cuisines, pic})
    let palcesFormatted = data.places.map((place, index) => {
        return (
            // return html content (add unique key based on index)
            <div className="col-sm-6" key = {index}>
                {/* place name */}
                <h2>{place.name}</h2>
                {/* image of place */}
                <p className="text-left">
                    {place.cuisines}
                </p>
                <img src = {place.pic} alt = {place.name}></img>
                <p className="text-left">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })

    // return the places content wrapped in default wrapper 
    return (
        <Def>
            <main>
                {/* Places Title */}
                <h1>PLACES</h1>
                {/* Below Title is the html data returned from data source */}
                <div className="row">
                    {palcesFormatted}
                </div>
            </main>
        </Def>
    )
}

// export places html generation function
module.exports = index;