function mostrarReceta(idReceta) {
    const panel = document.getElementById(idReceta);

    if (panel) {
        // Muestra el panel y lo centra usando flex
        panel.style.display = 'flex';
        panel.style.justifyContent = 'center';
        panel.style.alignItems = 'center';
    }
}

function cerrarReceta(idReceta) {
    const panel = document.getElementById(idReceta);

    if (panel) {
        // Oculta el panel
        panel.style.display = 'none';
    }
}