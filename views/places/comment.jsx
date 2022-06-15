const React = require('react')
const Def = require('../default.jsx')

function newComment (data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.place.id}/comment`}>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Comment</label>
                        <textarea className="form-control" id="content" name="content" type="textarea" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Stars</label>
                        <input className="form-control" id="stars" name="stars" type="number" step="0.5" required/>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rant">Rant?</label>
                        <input type="checkbox" className="form-check-input" id="rant" name="rant" />
                    </div>
                    <input type="submit" value = "Add Comment" className="btn btn-primary"></input>                      
                </form>

            </main>
        </Def>
    )
}

module.exports = newComment
