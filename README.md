<div align='center'>
  <img height="60" src="https://res.cloudinary.com/practicaldev/image/fetch/s--DYfpZirq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/990/1%2AOc2PsJ-QKOUG2I8J3HNmWQ.png">
  <h1>Template Angular MegaLinea</h1>

<i> Este templete es una guía para desarrollar proyectos de MegaLinea, para el fontend se usa Angular y el Backend va acorde con lo estipulado por el equipo de desarrollo..
</i>

<strong>Azure DepOps</strong>: [administracion-proveedores-angular](https://megatask001/MegalineaCollection/Proveedores/_git/AdministracionProveedoresAngular)<br />

</div>

---

## Index

- [Index](#index)
  - [Informacion Proyecto](#informacion-proyecto)
    - [Historial Actualizaciones](#historial-actualizaciones)
    - [Instalación Package Modules](#instalación-package-modules)
    - [Despliegue Servidor](#despliegue-servidor)
    - [Construcción Proyecto Produccion](#construcción-proyecto-produccion)
  - [Manejo Angular CLI](#manejo-angular-cli)
    - [Creación Componentes](#creación-componentes)
    - [Creación Pipes And Directivas](#creación-pipes-and-directivas)
    - [Creación Servicios Guards Interceptors Entre Otros](#creación-servicios-guards-interceptors-entre-otros)
    - [Direccionar Archivo En Directorio And Reglas](#direccionar-archivo-en-directorio-and-reglas)
  - [Estructura Carpetas](#estructura-carpetas)
  - [Logica General Proyecto](#logica-general-proyecto)

--- Direccionar Archivo En Directorio & Reglas

## Informacion Proyecto

Este proyecto fue generado con el [Angular CLI](https://github.com/angular/angular-cli) version 15.0, sin embargo se han realizado las siguientes Actualizaciones:

#### **Historial Actualizaciones**

- Angular CLI 15.0 -> 2022/12/01
- Angular CLI 15.1.3 -> 2023/01/27

En las versiones de Angular >= 14.0 se implementó los Standalone Component haciendo más sencillo el desarrollo de aplicaciones con Angular, por lo cual se adoptó esta nueva forma de estructurar y programar las aplicaciones prescindiendo de módulos que usaban las versiones anteriores. Es necesario resaltar que no es un requisito saber que es la programacion modular; sin embargo, sería oportuno saber las bases de esta forma de programar en Angular.

#### **Instalación Package Modules**

Ejecute el siguiente comando para la descarga de los módulos necesario para el funcionamiento de la aplicación. `npm install` o `npm i`. Los módulos o también llamados dependencias se dividen en dos grupos, las dependencias de producción ("dependencies") y las dependencias de desarrollo ("devDependencies"), las dependencias de producción como su nombre lo dice, únicamente son necesarias para que funcione la aplicación en producción, por otra parte, las de desarrollo son para funcionalidades netamente para el desarrollo por lo cual estas no se tomaran en cuenta en producción.

- Dependencias de producción

  - @angular/animations
  - @angular/cdk
  - @angular/common
  - @angular/compiler
  - @angular/core
  - @angular/forms
  - @angular/material
  - @angular/platform-browser
  - @angular/platform-browser-dynamic
  - @angular/router
  - @ng-bootstrap/ng-bootstrap
  - @popperjs/core
  - bootstrap
  - bootstrap-icons
  - rxjs
  - tslib
  - zone.js

- Dependencias de desarrollo
  - @angular-devkit/build-angular
  - @angular-eslint/builder
  - @angular-eslint/eslint-plugin
  - @angular-eslint/eslint-plugin-template
  - @angular-eslint/schematics
  - @angular-eslint/template-parser
  - @angular/cli
  - @angular/compiler-cli
  - @angular/localize
  - @typescript-eslint/eslint-plugin
  - @typescript-eslint/parser
  - eslint
  - eslint-config-prettier
  - eslint-plugin-prettier
  - prettier
  - prettier-eslint
  - typescript

#### **Despliegue Servidor**

Ejecute el siguiente comando en el puerto 3000 `ng serve --port=3000` para el despliegue del servidor de desarrollo. Posteriormente, diríjase al `http://localhost:3000/`. La aplicación automáticamente se recargará si hace un cambio en el código.

#### **Construcción Proyecto Produccion**

Ejecute el siguiente comando para construir la Aplicación `ng build --configuration production --base-href /********example********/`. Los archivos construidos estarán en la carpeta `dist/` del directorio actual. Es necesario aclarar que el nombre que va en la configuración (`--base-href /********Nombre********/`) es cambiante, según el proyecto, corrobore la ruta del servidor donde va a estar alojado la aplicación, guíese del siguiente ejemplo.

- Nombre servidor -> `https://megaiisdes901:2402/ProveedoresAngular`
- Nombre de referencia -> `ProveedoresAngular`
- Nombre de Configuración -> `--base-href /ProveedoresAngular/`
- Comando buidl -> `ng build --configuration production --base-href /ProveedoresAngular/`

**[⬆ Return to Index](#index)**

## Manejo Angular CLI

EL CLI de Angular es una herramienta de interfaz de línea de comandos que se utiliza para inicializar, desarrollar, montar y mantener aplicaciones de Angular directamente desde un shell de comandos.

#### **Creación Componentes**

El CLI de Angular en la creación de componentes nos ofrece varias alternativas, según como se estructure nuestro programa, por defecto el comando `ng generate component` o `ng generate c` nos genera un componente con **cuatro archivos**, el HTML, el TypeScript, el CSS y el archivo de pruebas unitarias; sin embargo, notarán que al ejecutar el comando solo se genera el HTML y el TypeScript esto es porque se configuró en el **Angular.json** que omitiera estos archivos. Por otra parte, como estamos usando **Standalone Component** es necesario adicionar una opción en nuestro comando de forma que quedaría de la siguiente forma `ng generate c --standalone`, si no sé coloca `--standalone` el CLI identificará que queremos generar un componente según las métricas de la programación modular la cual no es el paradigma que se está utilizando en el proyecto.

```json
"schematics": {
        "@schematics/angular:component": {
          "inlineStyle": true,
          "skipTests": true
        },
        "@schematics/angular:class": {
          "skipTests": true
        },
        "@schematics/angular:directive": {
          "skipTests": true
        },
        "@schematics/angular:guard": {
          "skipTests": true
        },
        "@schematics/angular:interceptor": {
          "skipTests": true
        },
        "@schematics/angular:pipe": {
          "skipTests": true
        },
        "@schematics/angular:resolver": {
          "skipTests": true
        },
        "@schematics/angular:service": {
          "skipTests": true
        }
      },
```

#### **Creación Pipes And Directivas**

En la creación de Pipes y Directivas hacemos uso del siguiente comando respectivamente `ng generate p --standalone` y `ng generate d --standalone` se usa la opción `--standalone` por lo mencionado anteriormente en la creación de componentes.

#### **Creación Servicios Guards Interceptors Entre Otros**

Como los Servicios, Guards e Interceptors son agnósticos si la programación es modular o no, por lo cual no es necesario adicionar ninguna opción al momento de escribir este Readme, por ende los comandos serían los siguientes, respectivamente, `ng generate s`, `ng generate g` y `ng generate i`. Por otro lado existen distintos comandos para otras funcionalidades como lo son:

- app-shell
- application
- class
- config
- enum
- environments
- interface
- library
- module
- pipe
- resolver
- service-worker
- web-worker

#### **Direccionar Archivo En Directorio And Reglas**

Si se requiere insertar un servicio, componente, etc en una ruta o carpeta, especifica la forma correcta por medio de Angular CLI es definir la dirección desde el src del directorio, un ejemplo sería el siguiente:

- `ng g c pages/ReporteGeneral --standalone`
- `ng g g core/guards/Autentificacion`
- `ng g s pages/administrar-proveedores/services/AdministrarProveedores`

Es necesario aclarar que para la implementación de cualquier funcionalidad el nombre del archivo deber ser sin espacios, guiones o caracteres espaciales y así mismo cada nueva palabra, su inicial debe ir en mayúscula.

**[⬆ Return to Index](#index)**

## Estructura Carpetas

La estructura de las capetas es una parte fundamental para las aplicaciones, con ello se define como va a quedar la organización de los archivos y carpetas con la finalidad de que sea escalable en el tiempo y de fácil comprensión. En la siguiente imagen se muestra la estrcutra que deberia tener.

<center>

![FolderStructure.drawio.png](./images%20drawio/FolderStructure.drawio.png)

</center>

La carpeta **core** es utilizada para almacenar todo lo relacionado con las funcionalidades que permiten el adecuado funcionamiento de la aplicación, involucrando carpetas como las rutas, los guardianes, los interceptores, entre otros.

La carpeta **shared** es utilizada para almacenar servicios, componentes, directivas, pipes y modelos que son compartidos por varios componentes, respeto a los modelos, estos son interfaces de TypeScript que definen las propiedades y tipos que tiene un "objeto"

La carpeta **pages** es utilizada para almacenar los componentes que representan las diferentes páginas de la aplicación.

La carpeta **assets** es utilizada para almacenar los recursos estáticos de la aplicación como las imágenes, estilos, iconos, archivos de idioma, entre otros.

**[⬆ Return to Index](#index)**

## Logica General Proyecto

**[⬆ Return to Index](#index)**
