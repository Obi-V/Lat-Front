# FRONT DEL PROYECTO LAT

¡Bienvenido al Frontend de la aplicación 'LAT', realizado principalmente en Angular! 
Una plataforma web que conecta profesores particulares con usuarios que buscan aprender.

## Características

### Registro de Usuarios

La aplicación permite a los usuarios registrarse proporcionando su nombre de usuario, rol, correo electrónico y contraseña. Estos datos se guardan para su almacenamiento seguro en la base de datos, si la bbdd no existe la crea.

### Inicio de Sesión de Usuarios

Los usuarios pueden iniciar sesión en la página de login utilizando su nombre de usuario y contraseña. El frontend envía la información de inicio de sesión al backend, que verifica las credenciales y emite un JWT válido en caso de éxito que se guardará en localStorage.

### Actualización del perfil

Se puede personalizar el perfil incluso cambiar de imagenes en la pestaña de 'mi perfil' en tiempo real y con persistencia en la base de datos.

### Navegación y directos

La aplicación está habilitada para poder navegar entre todas las páginas desde cualquiera gracias a su menú desplegable y personalizado ( Depende si estás logeado o no), además también es posible realizar directos mediante OBS

### Securización con Guards

Los guards en Angular desempeñan un papel crucial en la seguridad del frontend al gestionar la autenticación y autorización de los usuarios, en esta ocasión filtro por roles. Estos guards son implementados para proteger las rutas de la aplicación, asegurando que solo los usuarios autenticados tengan acceso a ciertas vistas o funcionalidades. Similar a Spring Security en el backend

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

Para poder realizar directos en la plataforma necesitaremos el programa OBS.
Dentro del programa necesitaremos ir a ajustes > emisión y en servidor ponemos `rtmp://localhost/live/` y en clave de retransmisión `directo`
ya que es la ruta de la página donde se hace el directo, la idea es que cada usuario que haga directo tenga su propia url que acabe con su nombre y este sea la clave del directo, así se gestionarían varios directos en diferentes url.


## Uso

1. Regístrate como profesor o estudiante.
2. Explora la lista de profesores o publica tus habilidades como profesor.
3. Inicia sesión y comunícate con otros usuarios mediante la función de mensajería interna.
4. Asiste a clases en directo dentro de la plataforma.
5. Deja calificaciones y reseñas.

## Cosas que se podrían implementar
Puntos adicionales para la aplicación, que puede ser que implemente en el futuro pero que actualmente lo veo complicado y no se si merece la pena el tiempo y el esfuerzo.

### Sistema de puntuación

Me gustaría implementar un sistema de puntuación entre usuarios.

### Chat en directo

Añadir un chat funcional, no solo maqueta, en la página de directos, todavía no sabría como hacerlo de manera eficiente y con resultados límpios.

### Mensajería privada

Quizá añadir un sistema de chat privado para que los usuarios puedan interaccionar entre ellos de manera privada.

### Comentarios y opiniones

Me gustaría añadir comentarios y opiniones de los usuarios en las páginas de cursos y profesores, quizá la solución a estos tres últimos puntos sea parecida.


