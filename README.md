# Ikaruna

This project is the initial front end development of the page of a startup called Ikaru-Na, which offers holistic services.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## USER STORIES
-: TODO     +: DONE     ?: MIDDLE       X: FAIL

SIN IMPORTAR MI CONDICIÓN DEBO PODER:
	+acceder al listado de terapias.
	+acceder al listado de talleres.
	?acceder al enlace para comunicarme vía whataspp con las administradoras.
	+darme de alta como nuevo usuario.
	+loguearme.

COMO USUARIO LOGUEADO DEBO PODER:
	+hacer una consulta.
	Xsacar un turno.
	-ver mis turnos pendientes y aceptados.
	?solicitar hacer un taller.
	-ver mis notificaciones.
	-eliminar mis notifcaciones de una en una.
	-eliminar todas mis notificaciones a la vez.
	-editar mis datos de contacto.
	
COMO ADMIN DEBO PODER:
	+agregar, eliminar y editar terapias.
	+agregar, eliminar y editar los talleres.
	+acceder al listado de preguntas.
	?acceder al listado completo de turnos.
	-agregar un turno ya confirmado (status = 1).
	-confirmar un turno solicitado. (cambiar el status=0->1).
	-cambiar la fecha y hora de un turno. Si el turno tenía status=0, al cambiar la fecha y hora se confirma.
	+acceder al listado de usuarios.
	-eliminar un usuario.

## Ingreso user de prueba

    email: usuario1@gmail.com
    password: 1234

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
