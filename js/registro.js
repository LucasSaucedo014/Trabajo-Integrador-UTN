  const form = document.querySelector('.form-register');
  const submitButton = document.querySelector('#registrarse');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    alert('Cuenta creada exitosamente!');
    form.reset();
  });

  function validarFormulario() {
    const usuario = document.querySelector('#Usuario');
    const email = document.querySelector('#email');
    const contraseña = document.querySelector('#contraseña');
    const contraseña1 = document.querySelector('#contraseña1');

    if (usuario.value === '' || email.value === '' || contraseña.value === '' || contraseña1.value === '') {
      alert('Por favor completa todos los campos');
      return false;
    }

    if (!validarEmail(email.value)) {
      alert('El correo electrónico no es válido');
      return false;
    }

    if (contraseña.value !== contraseña1.value) {

alert('Las contraseñas no coinciden');
return false;
}

if (contraseña.value.length < 6) {
  alert('La contraseña debe tener al menos 6 caracteres');
  return false;
}

return true;
}

function validarEmail(email) {
const expresionRegular = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return expresionRegular.test(email);
}

