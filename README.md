# FRONT DEL PROYECTO LAT

¡Bienvenido al Frontend de la aplicación 'LAT', realizado principalmente en Angular! 
Una plataforma web que conecta profesores particulares con usuarios que buscan aprender.

## Características

### Registro de Usuarios

La aplicación permite a los usuarios registrarse proporcionando su nombre de usuario, rol, correo electrónico y contraseña. Estos datos se guardan para su almacenamiento seguro en la base de datos, si la bbdd no existe la crea.

### Inicio de Sesión de Usuarios

Los usuarios pueden iniciar sesión en el front utilizando su nombre de usuario y contraseña. El frontend envía la información de inicio de sesión al backend, que verifica las credenciales y emite un JWT válido en caso de éxito que se guardará en localStorage.

### Spring Security en el Backend

La aplicación utiliza Spring Security en el backend para reforzar la seguridad y gestionar la autenticación y autorización de los usuarios. Spring Security proporciona una capa robusta de protección para las API y recursos, garantizando un acceso seguro a los datos y funcionalidades del servidor.

---

## Instalación
1. Debes levantar el backend de la anterior aplicación, es necesario para hacer login o no tendrás acceso a muchas páginas
2. Clona el repositorio desde tu IDE (En mi caso uso Visual Studio Code): `git clone https://github.com/Obi-V/Lat-Front/`
3. En la ruta dentro del proyecto `\servidor-rtmp\app.js` se encuentra el servidor rtmp para poder hacer directos, hay que cambiar la propiedad ` trans: {
    ffmpeg:` y poner una ruta en tu disco duro para alojar el directo.
4. En la consola viajar a la ruta `cd /Lat/servidor-rtmp` e introducir `node app.js` para levantar el servidor de streaming ( Si no queremos probar la funcionalidad de directo no hace falta)
5. En la consola viajar a la ruta donde esté el proyecto `cd **/lat` e introducir `ng seve` para levantar la aplicación
6. Ejecutar la aplicación mediante el método main 'LatApplication' en la carpeta **\ProyectoLAT\src\main\java\org\lat\LatApplication.java
7. Tu aplicación ya está lista para usarse.
   
## Configuración de OBS

La aplicación utiliza una base de datos MySQL para almacenar la información. Asegúrate de seguir estos pasos para configurar la conexión con la base de datos:


## Uso

1. Regístrate como profesor o estudiante.
2. Explora la lista de profesores o publica tus habilidades como profesor.
3. Inicia sesión y comunícate con otros usuarios mediante la función de mensajería interna.
4. Asiste a clases en directo dentro de la plataforma.
5. Deja calificaciones y reseñas.

