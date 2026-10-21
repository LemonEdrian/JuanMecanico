document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioAsistencia');
    const modal = document.getElementById('modalConfirmacion');
    const cerrarModal = document.getElementById('cerrarModal');
    const mensajeModal = document.getElementById('mensajeModal');

    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            // Evitamos el envío real del formulario para simular la confirmación
            event.preventDefault();

            // Obtenemos los valores ingresados por el usuario
            const nombre = document.getElementById('nombre').value;
            const servicio = document.getElementById('servicio').value;
            const vehiculo = document.getElementById('vehiculo').value;

            // Personalizamos el mensaje emergente
            mensajeModal.innerHTML = `Gracias <strong>${nombre}</strong>.<br><br>Hemos registrado tu solicitud para el servicio de <strong>${servicio}</strong> en tu vehículo <strong>${vehiculo}</strong>.<br><br>Nos pondremos en contacto contigo a la brevedad.`;

            // Mostramos la ventana modal emergente
            modal.classList.add('activo');

            // Reiniciamos los campos del formulario
            formulario.reset();
        });
    }

    if (cerrarModal) {
        cerrarModal.addEventListener('click', () => {
            modal.classList.remove('activo');
        });
    }

    // Permitir cerrar el modal al hacer clic en el fondo oscuro
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('activo');
            }
        });
    }
});