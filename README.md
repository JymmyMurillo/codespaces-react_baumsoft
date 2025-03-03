# Documentación del Proyecto

## Descripción General
Este proyecto es una aplicación web desarrollada con **ReactJS** y **Vite**, que incluye un sistema de autenticación y una interfaz para visualizar datos obtenidos de una API externa. Utiliza **React Router** para la navegación y **Tailwind CSS** para los estilos.

## Tecnologías Utilizadas
### Dependencias principales:
- **React** (`react`, `react-dom`) – Biblioteca principal para la interfaz.
- **React Router DOM** (`react-router-dom`) – Manejo de rutas en la aplicación.
- **npx** – Utilidad para ejecutar paquetes de npm.

### Dependencias de desarrollo:
- **Vite** (`vite`, `@vitejs/plugin-react`) – Herramienta de construcción y desarrollo rápido.
- **Tailwind CSS** (`tailwindcss`, `autoprefixer`, `postcss`) – Framework de estilos CSS.

## Instalación y Ejecución
Si deseas ejecutar el proyecto localmente, sigue estos pasos:
```sh
# Clonar el repositorio
$ git clone https://github.com/JymmyMurillo/codespaces-react_baumsoft

# Navegar al directorio del proyecto
$ cd nombre-del-proyecto

# Instalar dependencias
$ npm install

# Ejecutar el servidor de desarrollo
$ npm run start
```

## Credenciales de Acceso
Para iniciar sesión en la aplicación, utiliza las siguientes credenciales:
- **Usuario:** `admin`
- **Contraseña:** `1234`

## Consumo de API
La aplicación obtiene datos desde la siguiente API externa:
- **Endpoint:** `https://jsonplaceholder.typicode.com/albums`
- **Uso:** Se consumen los datos de álbumes y se presentan en una tabla con paginación progresiva.

## Estructura del Proyecto
```
src/
│── App.jsx                # Componente principal de la aplicación
│── App.css                # Estilos principales
│── App.test.jsx           # Pruebas unitarias de la aplicación
│── index.jsx              # Punto de entrada de la aplicación
│── index.css              # Estilos globales
│── reportWebVitals.js     # Métricas de rendimiento
│── setupTests.js          # Configuración de pruebas
│
├── components/            # Componentes reutilizables
│   ├── AlbumRow.jsx       # Componente para representar un álbum en la tabla
│   ├── Dashboard.jsx      # Vista principal después de iniciar sesión
│   ├── Error.jsx          # Indicador de error
│   ├── Login.jsx          # Formulario de inicio de sesión
│   ├── Spinner.jsx        # Indicador de carga
│
├── context/               # Contexto global de autenticación
│   ├── AuthContext.jsx    # Proveedor y manejador de estado de autenticación
│
├── routes/                # Configuración de rutas de la aplicación
│   ├── AppRouter.jsx      # Definición de rutas principales
│   ├── PrivateRoute.jsx   # Control de acceso a rutas privadas
│
└── service/               # Servicios y consumo de APIs
    ├── api.js             # Funciones para obtener datos de la API
```

## Descripción de la Solución
### 1. Sistema de Autenticación
- Se ha implementado un formulario de inicio de sesión con los siguientes campos:
  - Usuario
  - Contraseña
  - Botón de "Ingresar"
- Validaciones incluidas:
  - Campos obligatorios.
  - Verificación de credenciales (Usuario: `admin`, Contraseña: `1234`).
  - Mensajes de error adecuados.
  - Estado de "cargando" mientras se procesa la autenticación.
- Al iniciar sesión correctamente, se redirige a la pantalla de visualización de datos.

### 2. Visualización de Datos
- Se obtienen datos de `https://jsonplaceholder.typicode.com/albums`.
- Se implementa una tabla para mostrar la información obtenida.
- Se ha agregado paginación:
  - Se muestran 10 registros iniciales.
  - Un botón "Ver más" permite cargar los siguientes 10 registros.
  - Los nuevos registros se agregan a la lista existente.
- Se ha incluido un botón "Cerrar sesión" que regresa al usuario a la pantalla de inicio de sesión.
- Se maneja un estado de "cargando" mientras se obtiene la información.


---
© 2025 - Proyecto de Evaluación Técnica Frontend con ReactJS

