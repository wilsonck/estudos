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

    //Cria o objecto HttpRwequest
    objManipulavel.prototype.createObjectXML = function(){
        
        var xmlHttp = null;
        try {
            // Firefox, Opera 8.0+, Safari
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            // Internet Explorer
            try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return xmlHttp;
    }

    //Abre o Endereço do JSONs
    objManipulavel.prototype.loadJson = function(){

        var xmlhttp = this.createObjectXML();

        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4) { // Download concluído e a resposta não contém erros
                if (this.status === 200) {
                    objManipulavel.prototype.workJson(this.responseText); // this dentro dessa function é seu XMLHttpRequest
                }else{
                    console.log('Houston we have a problem! FUCK');
                };  
                
            }
        }

        xmlhttp.open('GET', 'http://api.mtgapi.com/v2/sets?code=JOU', true);
        xmlhttp.send(null);

    }

    objManipulavel.prototype.workJson = function(){
        var objData = (arguments[0]);
        console.log(JSON.parse(objData));
    }


    //--> Referencia boa https://developer.mozilla.org/pt-BR/docs/AJAX/Getting_Started
  
})();