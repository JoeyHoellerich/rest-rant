const React = require("react");
const Def = require("../default.jsx");

function show(data) {
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <h2>Rating</h2>
                <p>Currently Unrated</p>
                <h2>Description</h2>
                <h3>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h3>
                <div>
                    <img src={data.place.pic} alt ={data.place.name}></img>
                </div>
                <hr></hr>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </main>
        </Def>
    )
}

module.exports = show