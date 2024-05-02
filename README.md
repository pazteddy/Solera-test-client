# Solera Frontend

Este proyecto consiste en construir una aplicación, donde el usuario inicialmente puede ver todos sus servicios, también puede filtrar los servicios por categoría. Además, el usuario puede agregar, editar y eliminar un servicio.

- Demo: [Solera](https://solera-app.vercel.app/)

<img src="https://github.com/jhosepct/Solera-test-client/blob/main/Design.png" title="Diseño Solera">

- Diseño Movil
<div align="center" style="display:flex;" >
  
<img src="https://github.com/jhosepct/Solera-test-client/blob/main/iPhone13ProMax-1.png" title="Diseño Movil Solera 1" width="250">
<img src="https://github.com/jhosepct/Solera-test-client/blob/main/iPhone13ProMax-2.png" title="Diseño Movil Solera 3" width="250">
<img src="https://github.com/jhosepct/Solera-test-client/blob/main/iPhone13ProMax-3.png" title="Diseño Movil Solera 3" width="250">
  
 </div>

- Filtrar servicio

#### ![Agregar](https://github.com/jhosepct/Solera-test-client/blob/main/filtrarSolera.gif)

- Agregar servicio

#### ![Agregar](https://github.com/jhosepct/Solera-test-client/blob/main/agregarSolera.gif)

- Editar servicio

#### ![Agregar](https://github.com/jhosepct/Solera-test-client/blob/main/editarSolera.gif)

- Eliminar servicio

#### ![Agregar](https://github.com/jhosepct/Solera-test-client/blob/main/eliminarSolera.gif)

## Paquetes usados:

- react-router-dom(^6.4.2): [link](https://reactrouter.com/docs/en/v6/getting-started/overview)
- storybook: [link](https://storybook.js.org/)
- emotion: [link](https://emotion.sh/docs/introduction)
- react-icons: [link](https://react-icons.github.io/react-icons/)
- uuidv4: [link](https://github.com/thenativeweb/uuidv4)

## Instalación

- Asegúrese de que sus versiones de NodeJS y npm estén actualizadas para `React ^18.2.0`

- Instalar dependencias: `npm install` or `yarn`
  Una pequeña introducción sobre la instalación.

```
$ npm install
```

- Inicie el servidor: `npm run start`

```
$ npm run start
```

- Las vistas están en: `localhost:3000`

- Inicie storybook: `npm run storybook`

```
$ npm run storybook
```

- Las vistas están en: `localhost:6006`

## Componentes y respectivos props

#### Navbar

| Prop            | Tipo     | Defecto | Requerido | Descripción                                                                 |
| --------------- | -------- | ------- | --------- | --------------------------------------------------------------------------- |
| data            | `array`  | no      | yes       | Genera la barra de navegación con sus enlaces                               |
| logo            | `String` | `false` | no        | Establecer valores `verdaderos` revelará el logo y `falso` ocultará el logo |
| backgroundColor | `string` | `false` | no        | Cambiar el fondo de la barra de navegación                                  |

#### Card

| Prop        | Tipo       | Defecto | Requerido | Descripción                                                                                   |
| ----------- | ---------- | ------- | --------- | --------------------------------------------------------------------------------------------- |
| name        | `String`   | no      | si        | Title del component Card                                                                      |
| description | `String`   | no      | si        | Descripción de la carta                                                                       |
| edit        | `Function` | ()=>{}  | no        | Realiza una animación y manda a llamar al metodo onClick con parametro id del componente Card |
| remove      | `Function` | ()=>{}  | no        | Realiza una animación y manda a llamar al metodo onClick con parametro id del componente Card |

### Input

| Prop        | Tipo     | Defecto | Requerido | Descripción                              |
| ----------- | -------- | ------- | --------- | ---------------------------------------- |
| type        | `String` | `text`  | no        | Valor del tipo del input que se generara |
| placeholder | `String` | Vacio   | no        | Genera el texto provisional del input    |

### InputSelect

| Prop        | Tipo       | Defecto       | Requerido | Descripción                           |
| ----------- | ---------- | ------------- | --------- | ------------------------------------- |
| options     | `array`    | Array vacio   | si        | Genera las opciones a seleccionar     |
| placeholder | `String`   | `Select`      | no        | Genera el texto provisional del input |
| onChange    | `Function` | ()=>{}        | no        | Recupera los datos del input          |
| width       | `String`   | `fit-content` | no        | Tamaño del componente                 |

### FormInput

| Prop  | Tipo     | Defecto | Requerido | Descripción                              |
| ----- | -------- | ------- | --------- | ---------------------------------------- |
| label | `String` | `Label` | no        | Genera el label del input                |
| type  | `String` | `text`  | no        | Valor del tipo del input que se generara |

### Button

| Prop  | Tipo     | Defecto | Requerido | Descripción                    |
| ----- | -------- | ------- | --------- | ------------------------------ |
| label | `String` | `Label` | no        | Contenido del component button |
| color | `String` | `#000`  | no        | Color del borde y texto        |

Copyright © [Jhosep Ct](https://github.com/jhosepct)
