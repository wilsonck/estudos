(function(){
    "use strict";

    /*Função constutora*/
    function divColorida(){

    }

    /*Função que cria a div*/
    divColorida.prototype.criaDiv = function(){
    	var divPai = document.createElement('div');
    	divPai.setAttribute('class', 'square');
    	divPai.style.backgroundColor = 'rgb(' + this.rand_col() + ',' + this.rand_col() + ',' + this.rand_col() + ')';
    	return divPai;
    }

    /*Função que escolhe um número para a escolha da cor de fundo */
    divColorida.prototype.rand_col = function(){
	 	return Math.round(Math.random() * 255);
	}

    /*Faz a criação das divs*/
    for (var i =0; i <100; i++){
    	var novaDiv = new divColorida();
	   	document.body.appendChild(novaDiv.criaDiv());	
    }

    var totalDivs = document.getElementsByClassName('square'),
    	indexDiv = 0; 

    var limpaDivsInterval = setInterval(limpaDivs,100);

    /*Limpa todas as divs */
    function limpaDivs(){
    	totalDivs[0].parentNode.removeChild(totalDivs[0]);
    	indexDiv ++;
    	if (indexDiv === 100) { 
    		clearInterval(limpaDivsInterval);
    	} 
    }

})();
