const urlNombre = "https://jsonplaceholder.typicode.com/users";
const urlComentarios = "https://jsonplaceholder.typicode.com/comments";

$(document).ready(function () {
  // Obtener la lista de usuarios
  $.get(urlNombre, guardarUsuarios);

  // Colocar el nombre de usuario en el carrousel
  function guardarUsuarios(data, status) {
    let usuarios = data.map((user) => user.name);
    for (i = 0; i <= 3; i++) {
      $(`#slide-${i}`).html(usuarios[i]);
    }
  }
  // Obtener la lista de comentarios
  $.get(urlComentarios, guardarComentario);
  // Colocar el comentario en el carrousel
  function guardarComentario(data, status) {
    let comentarios = data.map((comment) => comment.body);
    for (i = 0; i <= 3; i++) {
      $(`#comentario-${i}`).html(comentarios[i]);
    }
  }

  // Obtengo el archivo filtro.html para cargarlo e inmediatamente lo oculto asignandole la clase d-none
  $.get("filtro.html", function (filtro) {
    $(".filtro").addClass("d-none");
    $(".filtro").html(filtro);
  });
  $(".all-products").click(function () {
    $(".filtro").removeClass("d-none");
    $("#carouselExampleCaptions").addClass("d-none");
    $(".acercade").addClass("d-none");
    $(".cuerpo").addClass("d-none");
    $("#contacto").addClass("d-none");
    $(".registro").addClass("d-none");
  });

  $(".inicio").click(function () {
    $(".filtro").addClass("d-none");
    $("#carouselExampleCaptions").removeClass("d-none");
    $(".acercade").addClass("d-none");
    $(".cuerpo").removeClass("d-none");
    $("#contacto").removeClass("d-none");
    $(".registro").addClass("d-none");
  });

  // Obtengo el archivo acerca-de.html para cargarlo a traves de ajax
  $.get("acerca-de.html", function (acercade) {
    $(".acercade").html(acercade);
    $(".acercade").addClass("d-none");
  });
  $("#acercade").click(function () {
    $(".acercade").removeClass("d-none");
    $("#carouselExampleCaptions").addClass("d-none");
    $(".filtro").addClass("d-none");
    $(".cuerpo").addClass("d-none");
    $("#contacto").addClass("d-none");
    $(".registro").addClass("d-none");
  });

  // Obtengo el archivo acerca-de.html para cargarlo a traves de ajax
  $.get("registro.html", function (registro) {
    $(".registro").html(registro);
    $(".registro").addClass("d-none");
  });
  $("#registro").click(function () {
    $(".registro").removeClass("d-none");
    $("#carouselExampleCaptions").addClass("d-none");
    $(".acercade").addClass("d-none");
    $(".filtro").addClass("d-none");
    $(".cuerpo").addClass("d-none");
    $("#contacto").addClass("d-none");
  });
});
const form = document.getElementById('contact-form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (validateForm()) {
    alert(`Nombre completo: ${fullNameInput.value}\nCorreo electrónico: ${emailInput.value}\nTeléfono: ${phoneInput.value}\nAsunto: ${subjectInput.value}\nMensaje: ${messageInput.value}`);
  }
});

function validateForm() {
  let isValid = true;

  if (fullNameInput.value.trim() === '') {
    fullNameInput.classList.add('is-invalid');
    isValid = false;
  } else {
    fullNameInput.classList.remove('is-invalid');
  }

  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
    emailInput.classList.add('is-invalid');
    isValid = false;
  } else {
    emailInput.classList.remove('is-invalid');
  }

  if (phoneInput.value.trim() === '' || !isValidPhone(phoneInput.value)) {
    phoneInput.classList.add('is-invalid');
    isValid = false;
  } else {
    phoneInput.classList.remove('is-invalid');
  }

  if (subjectInput.value.trim() === '') {
    subjectInput.classList.add('is-invalid');
    isValid = false;
  } else {
    subjectInput.classList.remove('is-invalid');
  }

  if (messageInput.value.trim() === '') {
    messageInput.classList.add('is-invalid');
    isValid = false;
    } else {
    messageInput.classList.remove('is-invalid');
    }
    
    return isValid;
    }
    
    function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
    }
    
    submitBtn.addEventListener('click', () => {
    if (!validateForm()) {
    alert('Por favor, complete todos los campos correctamente.');
    }
    });
