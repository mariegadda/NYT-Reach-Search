// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NyTimes API
var apiKey = "512519317466499b9a5ef66dee5a6294";

// Helper functions for making API Calls
var helpers = {

  runQuery: function (topic, beginYr, endYr) {
    var beginDate = "0101";
    var endDate = "1231";
    parseInt(beginDate);
    parseInt(endDate);
    beginYr = beginDate + beginYr;
    endYr = endDate + endYr;

    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=512519317466499b9a5ef66dee5a6294&q=" + topic + "&begin_date=" + beginYr + "&end_date=" + endYr;

    return axios.get(queryUrl).then(function (response) {

      var newResults = [];
      var fullResults = response.data.response.docs;

      //Gets first 5 articles that have all 3 components
      for (var i = 0; i < fullResults.length; i++) {
        newResults.push(fullResults[i]);
      }
      return newResults;
    });
  }

//close the helpers var
};

module.exports = helpers;