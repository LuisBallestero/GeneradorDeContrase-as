let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');



const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


function generar() {

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 8) {
        alert('La cantidad de caracteres tiene que ser mayor a 8');
        return;
    }

    let password = '';

    
    
    for (let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio; 
        
    }
    contrasena.value = password;

    
    let mayusculas = password.match(/[A-Z]/g);
    let minusculas = password.match(/[a-z]/g);
    let numeros = password.match(/[0-9]/g);
    let caracteresEspeciales = password.match(/[!@#$%^&*()]/g);
    
    
    if (mayusculas && minusculas && numeros && caracteresEspeciales) {
        alert('Nivel de segurida de la contraseña: Alto');
        
    } else {
        alert ('La contraseña no es segura, intente nuevamente');

    }

}


function limpiar() {
    contrasena.value = '';
}



