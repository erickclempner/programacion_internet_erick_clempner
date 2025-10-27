# Programación para Internet – Prácticas y Proyectos

Repositorio de prácticas y proyectos de la materia “Programación para Internet” (Universidad Anáhuac).

README.md generado con AI.

Descripción del repo: “Practicas y proyectos de la materia de programación para internet de la anáhuac”.

Estado: público, rama principal `main`.

## Tecnologías y composición del repositorio

Este repositorio combina front‑end y back‑end ligero orientado a web:

- HTML: 66.9%
- JavaScript: 14.5%
- CSS: 12.7%
- PHP: 5.9%

Estas proporciones sugieren que la mayoría de los ejercicios son páginas y componentes estáticos (HTML/CSS), con interactividad mediante JavaScript y algunas prácticas/proyectos con lógica de servidor en PHP.

## Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari).
- Editor de código (recomendado: VS Code + extensión Live Server).
- Opcional para prácticas/proyectos con PHP:
  - PHP 8+ instalado localmente, o
  - Suite local como XAMPP/MAMP/Laragon.

## Cómo clonar y ejecutar

1) Clonar:
```bash
git clone https://github.com/erickclempner/programacion_internet_erick_clempner.git
cd programacion_internet_erick_clempner
```

2) Ejecutar prácticas/proyectos estáticos (HTML/CSS/JS):
- Abre el archivo `index.html` de la carpeta de la práctica/proyecto directamente en el navegador, o
- Con VS Code, botón “Go Live” (Live Server) sobre el `index.html`.

3) Ejecutar prácticas/proyectos con PHP:
- Con PHP nativo:
  ```bash
  # Dentro de la carpeta que contiene los .php (donde esté el index.php)
  php -S localhost:8000 -t .
  ```
  Luego visita http://localhost:8000 en el navegador.

- Con XAMPP/MAMP:
  - Mueve la carpeta al directorio de documentos del servidor (p. ej. `htdocs`).
  - Inicia Apache (y MySQL si aplica).
  - Accede vía http://localhost/nombre-de-la-carpeta

## Índice de prácticas y proyectos

A continuación se listan todas las prácticas y proyectos. Cada entrada debe incluir: carpeta, título, objetivo, temas clave, y cómo ejecutar.

Importante: completa los datos de cada ítem según las carpetas reales del repositorio (por ejemplo, `practicas/practica-01`, `proyectos/proyecto-final`, etc.). Las rutas y títulos que se muestran son ejemplos/plantillas.

### Prácticas

- [Práctica 01: Título de la práctica](/ruta/a/practica-01)
  - Objetivo: …
  - Temas clave: …
  - Cómo ejecutar: abrir `index.html` | `php -S …` si aplica
- [Práctica 02: Título de la práctica](/ruta/a/practica-02)
  - Objetivo: …
  - Temas clave: …
  - Cómo ejecutar: …
- [Práctica 03: Título de la práctica](/ruta/a/practica-03)
  - Objetivo: …
  - Temas clave: …
  - Cómo ejecutar: …
- [Práctica 04: Título de la práctica](/ruta/a/practica-04)
  - Objetivo: …
  - Temas clave: …
  - Cómo ejecutar: …
- [Práctica 05: Título de la práctica](/ruta/a/practica-05)
  - Objetivo: …
  - Temas clave: …
  - Cómo ejecutar: …
- [Práctica 06: Título de la práctica](/ruta/a/practica-06)
  - Objetivo: …
  - Temas clave: …
  - Cómo ejecutar: …
- [Práctica 07: Título de la práctica](/ruta/a/practica-07)
  - Objetivo: …
  - Temas clave: …
  - Cómo ejecutar: …
- [Práctica 08: Título de la práctica](/ruta/a/practica-08)
  - Objetivo: …
  - Temas clave: …
  - Cómo ejecutar: …

(Agrega/ajusta la cantidad de prácticas reales conforme a las carpetas del repositorio.)

### Proyectos

- [Proyecto 01: Título del proyecto](/ruta/a/proyecto-01)
  - Objetivo: …
  - Stack: HTML, CSS, JS, (PHP si aplica)
  - Características principales: …
  - Cómo ejecutar: abrir `index.html` | `php -S …` si aplica
- [Proyecto 02: Título del proyecto](/ruta/a/proyecto-02)
  - Objetivo: …
  - Stack: …
  - Características principales: …
  - Cómo ejecutar: …

(Agrega/ajusta la cantidad de proyectos reales.)

## Plantilla de documentación por práctica/proyecto

Copia esta estructura dentro de cada carpeta (o documenta aquí en el README) para dejar clara la intención y uso.

### [Nombre de la práctica/proyecto]

- Carpeta: `ruta/relativa`
- Objetivo de aprendizaje:
  - …
- Requisitos previos:
  - …
- Temas y criterios:
  - HTML: (semántica, formularios, multimedia, SEO básico)
  - CSS: (selectores, layout con Flexbox/Grid, responsive)
  - JS: (DOM, eventos, Fetch API, módulos, almacenamiento)
  - PHP (si aplica): (ruteo básico, formularios, sesiones, CRUD)
- Estructura de archivos (resumen):
  ```
  carpeta/
  ├─ index.html | index.php
  ├─ assets/               # imágenes, íconos
  ├─ css/                  # estilos
  ├─ js/                   # scripts
  └─ php/ o includes/      # lógica de servidor (si aplica)
  ```
- Instrucciones de ejecución:
  - Estático: abrir `index.html` o usar Live Server.
  - PHP: `php -S localhost:8000 -t .`
- Casos de prueba / comprobaciones:
  - …
- Resultados esperados (capturas o GIF): …
- Notas y aprendizajes: …

## Guía rápida por temas (referencia)

- HTML
  - Estructura semántica (`header`, `nav`, `main`, `section`, `article`, `footer`)
  - Formularios, validación nativa, inputs avanzados
  - Accesibilidad (atributos `alt`, roles ARIA básicos)
- CSS
  - Box model, especificidad, variables CSS
  - Flexbox y Grid para layout responsivo
  - Media queries y diseño mobile-first
- JavaScript
  - Manipulación del DOM, eventos, delegación
  - Fetch API, JSON, consumo de APIs
  - Storage (localStorage/sessionStorage), manejo básico de estado
  - Módulos ES, buenas prácticas (linting, nombres, funciones puras)
- PHP (si aplica)
  - Estructura mínima (enrutamiento muy básico usando `index.php`)
  - Manejo de formularios (GET/POST), sanitización
  - Sesiones y autenticación básica
  - CRUD contra archivos/JSON o base de datos (si se incluyó)

## Convenciones recomendadas

- Nombres de carpetas:
  - `practicas/practica-01-*`, `practicas/practica-02-*`, …
  - `proyectos/proyecto-01-*`, `proyectos/proyecto-final`, …
- Nombres de archivos:
  - `index.html` / `index.php` en la raíz de cada práctica/proyecto.
  - `styles.css` en `css/`, `main.js` en `js/`.
- Formato y calidad:
  - Valida HTML/CSS (W3C), usa linters para JS/PHP si es posible.
  - Mantén comentarios breves y útiles.

## FAQ

- ¿Cómo sé si una carpeta requiere PHP?
  - Si contiene archivos `.php` o instrucciones de servidor. En ese caso, NO abras el archivo directamente en el navegador (file://), sino levanta un servidor local.

- ¿Puedo abrir una práctica en un puerto diferente?
  - Sí, cambia el puerto en `php -S localhost:8080 -t .` o configura Live Server.

## Autor

- Erick Clempner — [perfil de GitHub](https://github.com/erickclempner)

---

Nota: este README incluye la estructura y guías para documentar todas las prácticas y proyectos. Completa los títulos, rutas y detalles de cada ítem con base en las carpetas reales del repositorio y los objetivos de cada ejercicio/proyecto.
