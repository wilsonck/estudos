var App = App  || {};

App.objSearch = (function($) { 
    "use strict";

    //Inicia o obj application 
    function objSearch(){
        //Get input button
        this._inputSearch = $('#bt-pesquisar');
    }

    objSearch.create = function() {
        return new objSearch();
    }

    objSearch.fn = objSearch.prototype;

    //Init object
    objSearch.fn.init = function(){
        //Init event Click button serach
        this._inputSearch.on('click', $.proxy(this, 'searchVideo'));
    }

    //Search video in to API Youtube
    objSearch.fn.searchVideo = function(event){
        event.preventDefault();
        
        var strQuery = $('#inputSearch').val();
        if (strQuery === '') { return };

        var request = gapi.client.youtube.search.list({
            q: strQuery,
            part: 'snippet'
        });

        request.execute(function(response) {
            var str = JSON.stringify(response.result);
            console.log(str);
        });

    }

    return objSearch;

})(jQuery);

         
$(function() {



    var app = App.objSearch.create();
    app.init();
});
