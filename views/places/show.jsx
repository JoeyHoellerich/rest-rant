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
                {/* Edit button */}
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                {/* Delete Button */}
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form> 

                <hr></hr>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </main>
        </Def>
    )
}

module.exports = show