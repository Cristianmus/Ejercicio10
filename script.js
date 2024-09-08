function validarFormulario() {
    const email = document.getElementById('correo').value.trim();
    const password = document.getElementById('contra').value.trim();
    let isValid = true;

    // Validar formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        isValid = false;
    }

    // Validar longitud de la contraseña
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        isValid = false;
    }

    return isValid;
}

document.getElementById('btnValidar').addEventListener('click', function(event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});