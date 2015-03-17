var App = App  || {};

App.objSearch = (function($) { 
    "use strict";

    function objSearch(){

    }

    objSearch.create = function() {
        return new objSearch();
    }

    objSearch.fn = objSearch.prototype;

    objSearch.fn.init = function(){
        
    }

    return objSearch;

})(jQuery);

         
$(function() {
    var app = App.objSearch.create();
    app.init();
});



$(function() {

    // After the API loads, call a function to enable the search box.
    function handleAPILoaded() {
      $('#search-button').attr('disabled', false);
    }

    // Search for a specified string.
    function search() {
      var q = $('#query').val();
      var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
      });

      request.execute(function(response) {
        var str = JSON.stringify(response.result);
        $('#search-container').html('<pre>' + str + '</pre>');
      });
    }



  });