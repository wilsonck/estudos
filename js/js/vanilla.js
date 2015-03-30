(function() { 
    "use strict";

    document.addEventListener("DOMContentLoaded", function(event) {
        var app = objManipulavel.create();
        app.init();
    });

    //Função construtora do elemento que vamos usar para alterar
    function objManipulavel(){

    }

    objManipulavel.create = function(){
        return new objManipulavel();
    }

    objManipulavel.prototype.init = function(){
        var elemButton = document.getElementById
        console.log('sdfds');
    }
  

})();