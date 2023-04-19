$(document).ready(function () {
  //Validamos los datos

 
  $(".siguiente").click(function () {
    const actual = $(".seccion.activa");
    const siguiente = actual.next();
    actual.removeClass("activa");
    siguiente.addClass("activa");
  });

  $(".anterior").click(function anteriorPaso() {
    const actual = $(".seccion.activa");
    const anterior = actual.prev();

    actual.removeClass("activa");
    anterior.addClass("activa");
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
        "Precio final + impuestos(21%): $1500"
    );
  });
});
