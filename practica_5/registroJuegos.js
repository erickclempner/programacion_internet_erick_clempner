
var renglonContador = 0;

function registro1() {
    // Validar campos del formulario
    if (document.getElementById("nombre").value == false) {
        alert("Nombre vacio. Debes llenar el campo.");
        return;
    }
    if (document.getElementById("publisher").value == false) {
        alert("Publisher vacio. Debes llenar el campo.");
        return;
    }
    if (document.getElementById("fecha").value == false) {
        alert("Fecha vacia. Debes llenar el campo.");
        return;
    }
    if(document.getElementById("email").value == false) {
        alert("Email vacio. Debes llenar el campo.");
        return;
    }

    // Obtener valores
    var nombre = document.getElementById("nombre").value;
    var publisher = document.getElementById("publisher").value;
    var medio = document.querySelector('input[name="medio"]:checked').value;
    var fecha = document.getElementById("fecha").value;
    var plataformas = Array.from(document.querySelectorAll('input[name="platform"]:checked')).map(cb => cb.value).join(", ");
    var email = document.getElementById("email").value;
    var color = document.getElementById("color").value;
    var calificacion = document.getElementById("calificacion").value;

    // Crear nueva fila
    var tabla = document.getElementById("consolas").getElementsByTagName('tbody')[0];
    var fila = tabla.insertRow();
    var clase = (renglonContador % 2 === 0) ? "renglon1" : "renglon2";
    fila.className = clase;
    renglonContador++;

    fila.insertCell().textContent = nombre;
    fila.insertCell().textContent = publisher;
    fila.insertCell().textContent = plataformas;
    fila.insertCell().textContent = medio;
    fila.insertCell().textContent = fecha;
    fila.insertCell().textContent = email;
    fila.insertCell().textContent = color;
    fila.insertCell().textContent = calificacion;

    // limpiar formulario
    document.getElementById("formulario").reset();
}