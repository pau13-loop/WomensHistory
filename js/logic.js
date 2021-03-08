//Creamos las variables globales
var el;  
el = document.getElementById('textArea');                   
el.addEventListener('keyup', countCharacters, false);
var commentario = document.getElementById('comment');

// VALIDACIÓN del formulario
function validar() {
    if(el.value.length > 35) {
        alert('El comentario excede el número de carácteres permitido !')
    }else{
        document.getElementById('form').submit();
    }
}

// RESET del formulario
function reset() {
    document.getElementById('form').reset();
}

function añadir() {    
    //Elementos que necesitamos añadir para crear el comentario y le añadimos una clase a cada elemento
    var header = document.createElement('h6');
    header.className = 'nombreComent'
    var paragraph = document.createElement('p');
    paragraph.className = 'contenidoComent'
    //Contenido del comentario añadido
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var texto = document.getElementById('textArea').value;

    if(el.value.length > 35) {
        alert('El comentario excede el número de carácteres permitido !')
    }else{
        commentario.appendChild(header);
        header.innerHTML = nombre + ' ' + apellidos;
        commentario.appendChild(paragraph);
        paragraph.innerHTML = texto;
    }
}

// Cuenta carácteres restantes del text area
function countCharacters()  {
    //creamos las variables necesarias 
    var textEntered, countRemaining, counter;          
    //Accedemos al contenido del text area
    textEntered = document.getElementById('textArea').value;
    // Restamos su longitud por el nivel máximo de carácteres
    counter = (35 - (textEntered.length));
    //Accedemos al número de carácteres restantes y actualizamos su resutlado
    countRemaining = document.getElementById('letrasRestantes'); 
    countRemaining.textContent = counter;       
}