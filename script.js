document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioAsistencia');
    const modal = document.getElementById('modalConfirmacion');
    const cerrarModal = document.getElementById('cerrarModal');
    const mensajeModal = document.getElementById('mensajeModal');

    // Comprobar si ya existen datos guardados previamente en el localStorage al cargar la página
    const datosGuardados = localStorage.getItem('ultimaSolicitudMecanico');
    if (datosGuardados) {
        console.log("Datos recuperados del localStorage:", JSON.parse(datosGuardados));
    }

    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            // Evitamos el envío real del formulario
            event.preventDefault();

            // Obtenemos los valores ingresados por el usuario
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const telefono = document.getElementById('telefono').value;
            const vehiculo = document.getElementById('vehiculo').value;
            const servicio = document.getElementById('servicio').value;

            // Creamos un objeto con los datos del formulario final
            const solicitudActual = {
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                vehiculo: vehiculo,
                servicio: servicio,
                fechaRegistro: new Date().toLocaleString()
            };

            // Almacenamos el objeto convertido a cadena JSON en el localStorage
            localStorage.setItem('ultimaSolicitudMecanico', JSON.stringify(solicitudActual));

            // Personalizamos el mensaje emergente
            mensajeModal.innerHTML = `Gracias <strong>${nombre}</strong>.<br><br>Hemos registrado tu solicitud para el servicio de <strong>${servicio}</strong> en tu vehículo <strong>${vehiculo}</strong>.<br><br>Los datos se han guardado localmente en tu navegador.`;

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