console.log('formulario de contacto');

let contacto = []

function mensaje () {    

let nombre = document.getElementById('nombre').value;
let apellido = document.getElementById('apellido').value;
let email = document.getElementById('email').value;
let comentario = document.getElementById('comentario').value;

contacto.push(nombre, apellido, email, comentario)

const mensajes = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    comentario: comentario,
}
console.log(mensajes);
contacto.push(mensajes);

console.log(contacto);

localStorage.setItem('contacto', JSON.stringify(contacto))


console.log('mensaje enviado');
alert ('Su mensaje ha sido enviado, lo contactaremos a la brevedad');
location.reload();
}