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
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input 
                            className="form-control" 
                            id="pic" 
                            name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input 
                            type="number"
                            className="form-control"
                            id="founded" 
                            name="founded" 
                            defaultValue={new Date().getFullYear()}
                            min="1700"
                            max={new Date().getFullYear() + 1}/>
                    </div>

                    <input type="submit" value = "Add Place" className="btn btn-primary"></input>                      
                </form>

            </main>
        </Def>
    )

}

//export function
module.exports = new_form;