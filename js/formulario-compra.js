  // Variables para almacenar los datos del formulario
  var nombre, email, telefono, direccion, tarjeta, tarjetaVenc, cvv;
  
  function validarEmail(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return expresionRegular.test(email);
    }
 
  
  // Validar el formulario al hacer clic en Siguiente
  $('.siguiente').click(function() {
    var seccionActual = $(this).closest('.seccion');
    var siguienteSeccion = $(this).closest('.seccion').next('.seccion');
    var formularioValido = true;
    
    // Validar los campos requeridos de la sección actual
    $(seccionActual).find('input, textarea').each(function() {
      if ($(this).prop('required') && $(this).val() === '') {
        $(this).addClass('is-invalid');
        formularioValido = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    
    // Si el formulario es válido, avanzar a la siguiente sección
    if (formularioValido) {
      $(seccionActual).removeClass('activa');
      $(siguienteSeccion).addClass('activa');
      $('.anterior').show();
    }  
  // Regresar a la sección anterior al hacer clic en Anterior
  $('.anterior').click(function() {
    var seccionActual = $(this).closest('.seccion');
    var seccionAnterior = $(this).closest('.seccion').prev('.seccion');
    
    $(seccionActual).removeClass('activa');
    $(seccionAnterior).addClass('activa'); 
  });
  });

//Función para validar el nombre
function validarNombre() {
  var nombreInput = document.getElementById("nombre");
  var nombreValue = nombreInput.value.trim();

  if (nombreValue.length < 3) {
    nombreInput.setCustomValidity("El nombre debe tener al menos 3 caracteres.");
    return false;
  } else {
    nombreInput.setCustomValidity("");
    return true;
  }
}

// Función para validar el correo electrónico
function validarEmail() {
  var emailInput = document.getElementById("email");
  var emailValue = emailInput.value.trim();
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.setCustomValidity("Ingrese una dirección de correo electrónico válida.");
    return false;
  } else {
    emailInput.setCustomValidity("");
    return true;
  }
}

// Función para validar el teléfono
function validarTelefono() {
  var telefonoInput = document.getElementById("telefono");
  var telefonoValue = telefonoInput.value.trim();
  var telefonoRegex = /^\d{10}$/;

  if (!telefonoRegex.test(telefonoValue)) {
    telefonoInput.setCustomValidity("Ingrese un número de teléfono válido de 10 dígitos.");
    return false;
  } else {
    telefonoInput.setCustomValidity("");
    return true;
  }
}

// Función para validar el número de tarjeta
function validarTarjeta() {
  var tarjetaInput = document.getElementById("tarjeta");
  var tarjetaValue = tarjetaInput.value.trim();
  var tarjetaRegex = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;

  if (!tarjetaRegex.test(tarjetaValue)) {
    tarjetaInput.setCustomValidity("Ingrese un número de tarjeta válido separado por guiones.");
    return false;
  } else {
    tarjetaInput.setCustomValidity("");
    return true;
  }
}

// Función para validar todos los campos del formulario
function validarFormulario() {
  var esValido = true;
  esValido = esValido && validarNombre();
  esValido = esValido && validarEmail();
  esValido = esValido && validarTelefono();
  esValido = esValido && validarTarjeta();

  return esValido;
}

// Obtener los botones de siguiente y confirmar
var botonSiguiente = document.querySelector(".siguiente");
var botonConfirmar = document.querySelector(".confirmar");

// Agregar controladores de eventos a los botones
botonSiguiente.addEventListener("click", function(event) {
  if (validarFormulario()) {
    var secciones = document.querySelectorAll(".seccion");
    secciones[0].classList.remove("activa");
    secciones[1].classList.add("activa");
  } else {
    alert("Por favor, corrija los campos en rojo antes de continuar.");
  }
});

botonConfirmar.addEventListener("click", function(event) {
  if (validarFormulario()) {
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var tarjeta = document.getElementById("tarjeta").value.trim();
    var fechaVencimiento = document.getElementById("fecha-vencimiento").value.trim();
    var cvv = document.getElementById("cvv").value.trim();
    var mensaje = "Los datos ingresados son:\n\n" +
    "Nombre: " + nombre + "\n" +
    "Email: " + email + "\n" +
    "Teléfono: " + telefono + "\n" +
    "Dirección: " + direccion + "\n" +
    "Número de tarjeta: " + tarjeta + "\n" +
    "Fecha de vencimiento: " + fechaVencimiento + "\n" +
    "Precio final + impuestos(21%): $1500" + "\n"; 
    "CVV: " + cvv + "\n";
    alert(mensaje);
    }
    });
    
    function validarNombre(nombre) {
    return nombre.length >= 3;
    }
    
    function validarEmail(email) {
    var regex = /\S+@\S+.\S+/;
    return regex.test(email);
    }
    
    function validarTelefono(telefono) {
    var regex = /^[0-9]{10,}$/;
    return regex.test(telefono);
    }
    
    function validarTarjeta(tarjeta) {
    var regex = /^[0-9]{4}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
    return regex.test(tarjeta);
    }
    
    function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var tarjeta = document.getElementById("tarjeta").value.trim();
    
    var errores = [];
    
    if (!validarNombre(nombre)) {
    errores.push("El nombre debe tener al menos 3 caracteres");
    }
    
    if (!validarEmail(email)) {
    errores.push("El email ingresado no es válido");
    }
    
 
    
    if (errores.length > 0) {
    var mensaje = "Por favor corrija los siguientes errores:\n\n";
    for (var i = 0; i < errores.length; i++) {
    mensaje += "- " + errores[i] + "\n";
    }
    alert(mensaje);
    return false;
    } else {
    return true;
    }
    }
// Obtenemos los elementos del formulario
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var direccion = document.getElementById("direccion");
var tarjeta = document.getElementById("tarjeta");
var fechaVencimiento = document.getElementById("fecha-vencimiento");
var cvv = document.getElementById("cvv");

// Obtenemos el botón "Comprobante"
var botonComprobante = document.querySelector(".comprobante");

botonComprobante.addEventListener("click", function() {
  // Creamos un objeto jsPDF
  var doc = new jsPDF();
  
  // Agregamos el contenido al PDF
  doc.text("Datos de la compra", 10, 10);
  doc.text("Nombre: " + nombre.value, 10, 20);
  doc.text("Email: " + email.value, 10, 30);
  doc.text("Teléfono: " + telefono.value, 10, 40);
  doc.text("Dirección: " + direccion.value, 10, 50);
  doc.text("Tarjeta: " + tarjeta.value, 10, 60);
  doc.text("Fecha de vencimiento: " + fechaVencimiento.value, 10, 70);
  doc.text("CVV: " + cvv.value, 10, 80);
  doc.text("Precio final + impuestos(21%): $1500 ", 10, 90);
  
  // Descargamos el PDF con el nombre "comprobante.pdf"
  doc.save("comprobante.pdf");
});
