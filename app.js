// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Crear un array para almacenar los nombres

let amigos = []

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value
    
    if(nombre === ""){
        alert("Por favor, inserte un nombre")
    } else {
        amigos.push(nombre)
        document.querySelector("#amigo").value = ""
        actualizarLista()
        console.log("Agregado exitosamente")
    }
    return
}

//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

function crearLi(id, contenido){
    let parrafo = document.createElement('Li')
    let textoParrafo = document.createTextNode(contenido)
    parrafo.appendChild(textoParrafo)
    document.getElementById(id).appendChild(parrafo)
}

function limpiarLi(id){
    let lista = document.querySelector(`#${id}`)
    lista.innerHTML= ""
}

function actualizarLista(){
    limpiarLi("listaAmigos")
    for(let i = 0; i < amigos.length; i++){
        crearLi("listaAmigos",amigos[i])
    } 
}

//Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

function sortearAmigo(){
    let aleatorio = Math.floor((Math.random()*amigos.length))
    if (amigos.length === 0){
        alert("Lo siento. No hay amigos para sortear")
    } else {
        limpiarLi("resultado")
        crearLi("resultado", `Su amigo secreto es ${amigos[aleatorio]}`)
    }
}