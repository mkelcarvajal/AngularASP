## AngularJS - ASP.NET Core.

[![fcab](https://www.hssanesteban.cl//fotos/galeria/4e6aad22772be1cdbda3de62b1588d62.png "fcab")](https://www.hssanesteban.cl//fotos/galeria/4e6aad22772be1cdbda3de62b1588d62.png "fcab")

#### *Herramientas necesarias para correr el Backend*
- Visual Studio 2019
- Paquetes de Desarrollo ASP.NET Core y web. (Como se ve en la imagen)
[![Imagen](https://i.ibb.co/Njqc6PK/Screenshot-2021-03-12-035731.png "Imagen")](https://i.ibb.co/Njqc6PK/Screenshot-2021-03-12-035731.png "Imagen")

- Modificar el archivo 'appsettings.json' que se encuentra en la carpeta 'Project 1' y cambiar la variable DevConnection, por la cadena de conexion con la base de datos que tenemos nosotros. El proyecto actualmente esta ambientado con **SQL SERVER.**

#### *Herramientas necesarias para correr el Frontend*
- Instalar NodeJS desde [aqui](https://nodejs.org/es/download/ "aqui") (Descargar la version LTS, que es la ultima mas estable).
- Instalar Angular CLI a traves del comando `npm install -g @angular/cli`
- Ir a la carpeta del frontend en el proyecto (carpeta 'frontend') desde el terminal y ejecutar el comando npm install para instalar node_modules para la inyeccion de librerias y dependencias.

#### *Como ejecutar el backend y el frontend*

##### *Backend*
- Abrir la solucion archivo 'AngularASP.sln' con Visual Studio 2019 y en presionar F5 para iniciar el backend.

 ##### *Frontend*
 - Ir desde la consola de comando hacia la carpeta del frontend en el proyecto y ejecutar el comando `ng serve --o`
