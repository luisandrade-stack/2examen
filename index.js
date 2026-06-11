const express = require("express");
const { listen } = require("express/lib/application");
const app = express();
const port = 3127;

app.use(express.json());

// Vulnerabilidad (Seguridad): Credencial/Secreto quemado directamente en el código
const stripeApiKey = "sk_live_1234567890abcdef"; 
const stripeApiKey2 = "sk_live_1234567890abcdasd";

function procesarPago(monto) {
    // Code Smell 1: Variable declarada pero nunca utilizada
    var variableInutil = "Esta variable no hace nada";

    // Code Smell 2: Complejidad y redundancia innecesaria
    if (monto == 100) {
        console.log("El monto es 100");
    } else {
        if (monto == 100) {
            // Bug: Código inalcanzable (Unreachable code)
            console.log("Esto nunca se imprimirá");
        }
    }

    // Code Smell 3: Retorno inconsistente y falta de manejo de errores
    // (A veces retorna algo, a veces no)
    if (monto > 0) {
        return true;
    }
}

// Extra: Un code smell clásico de Node.js (función vacía y uso de 'eval' que es un peligro de seguridad)
function otraFuncionInutil() {
    // Función vacía
}

const comandoPeligroso = "console.log('Alerta de seguridad')";
eval(comandoPeligroso); // Bug/Vulnerabilidad crítica de seguridad

// Ejecutar la función para que el archivo haga algo al correrlo
procesarPago(150);

app.listen(port, ()=>{
    console.log("el servidor esta encendido en http://localhost:"+port);
} );