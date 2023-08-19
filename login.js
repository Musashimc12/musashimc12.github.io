

 /* formulario log-in */

 let userAdmin = 'jos@gmail.com'
 let passAdmin = 1234
 let nameAdmin = 'Jose Lopez'
 
 
 const formulario = document.getElementById('form')
 console.log(formulario);
 
 
 const validarFormulario = (e)=> {
     e.preventDefault()
     console.log(e)
     console.log(formulario.emailLogin.value)
     console.log(formulario.passwordLogin.value)
     console.log(formulario.userName.value)

     
     let user = formulario.emailLogin.value
     let pass = formulario.passwordLogin.value
     let name = formulario.userName.value

 
     if ( nameAdmin == name &&  userAdmin == user  && passAdmin == pass){
         alert ('Bienvenido a su Cuenta');
         location.href = './cuenta.html'
     } else {
         var mensaje = document.createElement("span");
         mensaje.innerHTML = "Los datos ingresados no son correctos";
         mensaje.style.color = "red";
         document.getElementById("form").appendChild(mensaje);
         document.getElementById("form").reset();
 
     }
 }
 
 formulario.onsubmit = validarFormulario



/* Avatar Aleatorio con API */

const image = document.getElementById('avatars');
const baseURL= "https://avatars.dicebear.com/api/bottts/";

let link= image.src;
const input= document.getElementById('inputusername');
const username = document.getElementById("username");

input.onchange = input.onkeyup = function(){      
const newURL =`${baseURL}${encodeURI(input.value)}${".svg"}`;
image.src = newURL;
username.textContent = input.value;
}