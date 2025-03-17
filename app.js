//  Parte 1
let participantes = []

// Esta funcion recibe los nombre ingresados y crea una lista que no acepta nombres vacios 
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim(); //Creo una variable que son todos los nombres (sin espacio adelante y atrás) ingresados en el campo de entrada
    
    if (nombreAmigo === ""){ 
        alert("Por favor ingrese un nombre") // si el campo esta vacio muestra mensaje

    }   else{ 
        participantes.push(nombreAmigo); // agrega el nombre a la lista

        mostrarListaAmigos(); // esto muestra la lista en la pantalla
    }
    
    document.getElementById('amigo').value="" //Se limpia el campo de entrada
    

   
    console.log(participantes); //muestra la lista en la consola

}


//Parte 2 : Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

// Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
function mostrarListaAmigos(){

    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

    lista.innerHTML="";

    // Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    // for (inicialización; condición; incremento) {}

    for (let i=0; i< participantes.length; i++){
        
        // Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
        let nuevoElemento = document.createElement("li");
        // primero creo el texto de los elementos
        nuevoElemento.textContent = participantes[i];
        //Luego agrego el elemento a la lista
        lista.appendChild(nuevoElemento);

    }

}

// Parte 3 Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.


function sortearAmigo(){
    //Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if (participantes.length ===0){
        alert ("No se han agregado participantes");
        return; // esto para la ejecución si no hay participantes
    }
    
    //Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

    indice= Math.floor(Math.random()*parseInt(participantes.length));

    // Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

    let nombreSorteado= participantes[indice];
    
   // Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
   
   document.getElementById('resultado').textContent = nombreSorteado;  
   
}


