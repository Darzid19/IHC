// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".menu-horizontal");

// Al hacer clic en el botón de hamburguesa
btn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú
  // Esto hace que se muestre o se oculte
  menu.classList.toggle("active");

  // (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia
  // btn.classList.toggle("open");
});

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();

  // REGEX estándar para validar correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validación del email
  if (!emailRegex.test(email)) {
    alert("Por favor ingresa un correo electrónico válido.");
    return;
  }

  // Si es válido → mensaje de confirmación
  alert("Tu mensaje ha sido enviado correctamente. ¡Gracias por contactarnos!");

  formulario.reset(); // Limpia los campos
});
