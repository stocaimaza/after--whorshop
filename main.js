/****** Saludable.com -- Calculadora de Indice de Masa Coorporal *******/

// Creamos clases. 

class Persona {
    constructor (nombre, email, peso, altura) {
        this.nombre = nombre;
        this.email = email;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
}

//Creamos un array de objetos. 

const personas = [];

//Necesitamos tomar los datos del formulario: 

//Creamos las variables necesarias: 

const idFormulario = document.getElementById('formulario');

idFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    //Creamos el objeto persona
    const persona = new Persona (nombre, email, peso, altura);
    //Agregamos los datos en el array
    personas.push(persona);
    //Guardamos los datos en el localStorage. 
    localStorage.setItem('Persona', JSON.stringify(personas));
    //Limpiamos el formulario
    idFormulario.reset();

    //Muestro el resultado con la siguiente función: 
    mostrarInfo(persona);
})


const resultado = document.getElementById('infoUsuarios');

const mostrarInfo = (persona) => {
    let aux = '';
    aux += `<p class="resultado"> ${persona.nombre} tu IMC es el siguiente: </p>
            <p class="resultado"> IMC: ${persona.calcularIMC()} </p>`;
    resultado.innerHTML = aux;
}

//Muestro el localStorage. 

const botonAdmin = document.getElementById('admin');
const datosAdmin = document.getElementById('datosAdmin');

botonAdmin.addEventListener('click', () => {
    const personas = JSON.parse(localStorage.getItem('Persona'));
    let aux = '';
    personas.forEach(persona => {
        aux += `<p class="resultado"> Nombre: ${persona.nombre} </p>
                <p class="resultado"> Correo Electrónico: ${persona.email}</p><hr>`
    });
    datosAdmin.innerHTML = aux;
});



/* function calcularIMC(peso, altura) {
    return peso / (altura * altura);
} */