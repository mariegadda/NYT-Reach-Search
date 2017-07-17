// Include React
var React = require("react");
//var axios = require('axios');
var Form = require("./children/Form")
var Results = require("./children/Results");
// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");
var Main = React.createClass({

	getInitialState: function () {
		return{
			searchTerm: "", results: [], history: [], savedArticles: [],
			topic: "",
			startYr: "",
			endYr: ""
		};
	},


  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function () {
    // Run the query for the Articles
    helpers.runQuery(this.state.topic, this.state.startYr, this.state.endYr).then(function (data) {
      if (data !== this.state.results) {
        console.log("Articles", data);


        this.setState({ results: data });

      }
    }.bind(this));
  },

 // This function allows childrens to update the parent.
  setTerm: function (topic, startYr, endYr) {
    this.setState({
      topic: topic,
      startYr: startYr,
      endYr: endYr
    });
  },
render: function () {
    return (
    <div>	
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

     <div className="container">
     	<div className="row">
               <h3>Search Results</h3>
         

                {/* RESULTS - SECOND PAGE */}

                <Results results={this.state.results} saveArticle={this.saveArticle} />
              </div>
            </div>
      </div>
        

       	
    );
  }


//close the createClass
});

module.exports = Main

