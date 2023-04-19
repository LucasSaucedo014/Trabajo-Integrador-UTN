$(document).ready(function() {
  // Variables para almacenar los datos del formulario
  var nombre, email, telefono, direccion, tarjeta, tarjetaVenc, cvv;
  
 
  
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
  });
  
  // Regresar a la sección anterior al hacer clic en Anterior
  $('.anterior').click(function() {
    var seccionActual = $(this).closest('.seccion');
    var seccionAnterior = $(this).closest('.seccion').prev('.seccion');
    
    $(seccionActual).removeClass('activa');
    $(seccionAnterior).addClass('activa');
    
    
    
   
  });
  
 
});

$(".confirmar").click(function () {
  const nombre = $("#nombre").val();
  const email = $("#email").val();
  const telefono = $("#telefono").val();
  const direccion = $("#direccion").val();
    alert(
      "Nombre del titular: " +
        nombre +
        "\n" +
        "email: " +
        email +
        "\n" +
        "telefono: " +
        telefono +
        "\n" +
        "dirección: " +
        direccion +
        "\n" +
        "tarjeta:" +
        "Precio final + impuestos(21%): $1500"
    );
  });