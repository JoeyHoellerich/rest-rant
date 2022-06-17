const React = require("react");
const Def = require("../default.jsx");

function show(data) {
    let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
      )
      if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = '';
        for (let i=0; i < averageRating; i++){
            stars += "⭐"
        }
        rating = (
          <h3>
            {stars}
          </h3>
        )
      }  
    let comments = (
        <h3 className="inavtive">
            No Comments Yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(comment => {
            return (
                <div className="border">
                    <h2 className="rant">{comment.rant ? "Rant!" : "Rave!"}</h2>
                    <h4>{comment.content}</h4>
                    <h3>
                        <strong> - {comment.author}</strong>
                    </h3>
                    <h4> Rating: {comment.stars}</h4>
                </div>
            )
        })
    }
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <h2>Rating</h2>
                <p>Currently Unrated</p>
                <h2>Description</h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <div>
                    <img src={data.place.pic} alt ={data.place.name}></img>
                </div>
                {/* Edit button */}
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
                {/* Delete Button */}
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form> 
                <h3>Rating</h3>
                {rating}
                <hr></hr>
                <h2>Comments</h2>
                {comments}
                <a href={`/places/${data.place.id}/comment`} className="btn btn-warning">Add Comment</a>
            </main>
        </Def>
    )
}

module.exports = show