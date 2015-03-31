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

        //teste de chamada ajax sem jQuery
        this.loadJson();
    }

    objManipulavel.prototype.createElement = function(){
        var divCriada = document.createElement('div');
        divCriada.setAttribute('id', 'objSquare');
    }

    objManipulavel.prototype.loadJson = function(){

        var xmlhttp;
        if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
        else if(window.ActiveXObject) xmlhttp = new ActiveXObject("MSXML2.XMLHTTP.3.0");
        else throw "AJAX não suportado!";

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) { // Download concluído e a resposta não contém erros
                console.log(this.responseText); // this dentro dessa function é seu XMLHttpRequest
            }
        }

        xmlhttp.open('GET', 'http://headers.jsontest.com/', true);
        xmlhttp.send(null);

    }
  
})();