


function Pokemon (nombre, tipo, puntosAtaque){
	  this.nombre = nombre;
    this.tipo = tipo;
    this.vida = 100;
    this.puntosAtaque = puntosAtaque;

	};	

//function pelear(){ 
		//var pokemon.vida = pokemon.vida - this.puntosAtaque;

	//};


var pokemons= [ ];

function crearPokemon(){
	var nombrePokemon = document.getElementById("nombrePokemon");
	var tipoPokemon = document.getElementById("tipoPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");
	var pokemon = new Pokemon (nombrePokemon.value,
                             tipoPokemon.value,
                             parseInt(puntosAtaque.value));
     pokemons.push(pokemon);
     mostrarPokemon();
     nombrePokemon.value=" ";
     tipoPokemon.value=" ";
     puntosAtaque.value=" ";

}

function mostrarPokemon(){
   var jugador1 = document.getElementById("jugador1");
   jugador1.innerHTML= " ";

   
pokemons.forEach(function(pokemon){
   	var lista1 = document.createElement("option");
    
    lista1.innerText = pokemon.nombre;
    jugador1.appendChild(lista1);

  });
}

function mostrarPokemon2(){
   var jugador2 = document.getElementById("jugador2");
   jugador2.innerHTML= " ";

   
   
  pokemons.forEach(function(pokemon){
  var lista2 = document.createElement("option");
  

  lista2.innerText = pokemon.nombre;
  jugador2.appendChild(lista2);
  
  });
}

  


