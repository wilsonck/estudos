(function() { 
    "use strict";

    document.addEventListener("DOMContentLoaded", function(event) {
        var app = objManipulavel.create();
        app.init();
    });

    //Função construtora do elemento que vamos usar para alterar
    function objManipulavel(){

    }

    //Cria o Objeto da aplicação que vaos fazer tudo
    objManipulavel.create = function(){
        return new objManipulavel();
    }

    //Inicializa a brincadeira
    objManipulavel.prototype.init = function(){
        var elemButton = document.getElementById('bt-pesquisar');
        elemButton.addEventListener('click', this.createElement);
    }

    objManipulavel.prototype.createElement = function(){
        var divCriada = document.createElement('div');
        divCriada.setAttribute('id', 'objSquare');
    }
  
})();