
function mostrarNombre() {
    const nombre = sessionStorage.getItem("nombre");
    const ciudad = sessionStorage.getItem("ciudad");

    if (nombre === null) {
        document.getElementById("saludo").textContent =
            "No hay ningún nombre guardado.";
    } else {
        document.getElementById("saludo").textContent =
            "Hola, " + nombre + ", de " + ciudad + ".";
    }
}

function borrar() {
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("ciudad");
    mostrarNombre();
}

function limpiarTodo() {
    sessionStorage.clear();
    mostrarNombre();
}

document.addEventListener("DOMContentLoaded", mostrarNombre);

document.getElementById("btn-borrar").addEventListener("click", borrar);
document.getElementById("btn-limpiar").addEventListener("click", limpiarTodo);

