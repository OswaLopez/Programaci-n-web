  // Función para mostrar el contenido completo de la noticia al hacer clic en la imagen
        function mostrarContenido(noticia) {
            var contenido = document.querySelector('.' + noticia + ' .contenido').innerHTML;
            document.getElementById('contenidoNoticia').innerHTML = contenido;
            document.getElementById('modalNoticia').style.display = 'block';
        }

        function mostrarContenido2(noticia2) {
            var contenido = document.querySelector('.' + noticia2 + ' .contenido').innerHTML;
            document.getElementById('contenidoNoticia').innerHTML = contenido;
            document.getElementById('modalNoticia').style.display = 'block';
        }

        function mostrarContenido3(noticia3) {
            var contenido = document.querySelector('.' + noticia3 + ' .contenido').innerHTML;
            document.getElementById('contenidoNoticia').innerHTML = contenido;
            document.getElementById('modalNoticia').style.display = 'block';
        }

        function mostrarContenido4(noticia4) {
            var contenido = document.querySelector('.' + noticia4 + ' .contenido').innerHTML;
            document.getElementById('contenidoNoticia').innerHTML = contenido;
            document.getElementById('modalNoticia').style.display = 'block';
        }
        function mostrarContenido5(noticia5) {
            var contenido = document.querySelector('.' + noticia5 + ' .contenido').innerHTML;
            document.getElementById('contenidoNoticia').innerHTML = contenido;
            document.getElementById('modalNoticia').style.display = 'block';
        }

        function mostrarContenido6(noticia6) {
            var contenido = document.querySelector('.' + noticia6 + ' .contenido').innerHTML;
            document.getElementById('contenidoNoticia').innerHTML = contenido;
            document.getElementById('modalNoticia').style.display = 'block';
        }
        // Función para cerrar la pantalla emergente
        function cerrarModal() {
            document.getElementById('modalNoticia').style.display = 'none';
        }