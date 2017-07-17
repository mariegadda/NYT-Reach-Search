// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

 getInitialState: function () {
    return {
      term: "",
      startYr: "",
      endYr: ""
    };
  },

render: function () {
    return (

      <div className="bigdiv">
      <br />
          <form onSubmit={this.handleSubmit}>

            {/* INPUT ONE  */}

              <h5>
                <strong>Topic</strong>
              </h5>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />          

            {/* INPUT TWO */}
         
              <h5 className="">
                <strong>Start Year</strong>
              </h5>
              <input
                value={this.state.startYr}
                type="text"
                className="form-control text-center"
                id="startYr"
                onChange={this.handleChange}
                required
              />
          
            {/* INPUT THREE */}
       
              <h5 className="">
                <strong>End Year</strong>
              </h5>

              <input
                value={this.state.endYr}
                type="text"
                className="form-control text-center"
                id="endYr"
                onChange={this.handleChange}
                required
              />
            {/* button */}

            <button
              className="btn btn-primary"
              type="submit"
            >
              Search
            </button>
            {/* form handlesubmit */}
          </form>
        </div>
     
    );
  }

//close the createClass
});

module.exports = Form;







