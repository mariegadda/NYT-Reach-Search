// Include React
var React = require("react");
//var axios = require('axios');
var Form = require("./children/Form")

var Main = React.createClass({

	getInitialState: function () {
		return{
			searchTerm: "", results: [], history: [], savedArticles: [],
			topic: "",
			startYr: "",
			endYr: ""
		};
	},

render: function () {
    return (
      <div className="container">
        <div className="row">
          
            <h2 className="text-center">New York Times Article Subscriber</h2>
            <p className="text-center">
              <em>Search for and annotated articles of interest</em>
            </p>
          
          <div className="row">
            <div className="col-md-8 col-md-offset-2">

              {/* FORM - FIRST PAGE */}
              <Form setTerm={this.setTerm} />

            </div>
          </div>
        </div>
     </div>


       	
    );
  }


//close the createClass
});

module.exports = Main;