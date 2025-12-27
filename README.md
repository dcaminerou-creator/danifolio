https://dcaminerou-creator.github.io/danifolio/

# danifolio — Portfolio Template (Bootstrap + GSAP)

Plantilla profesional de portfolio lista para clonarse y personalizarse en futuros proyectos. Está pensada para ser clara, mantenible y fácil de adaptar (contenido, paleta, tipografías y proyectos).

## Stack

- HTML5 + CSS3 + JavaScript (ES6+)
- Bootstrap 5 (CDN)
- GSAP + ScrollTrigger (CDN)
- Deploy: GitHub Pages

## Estructura del proyecto

danifolio/
├── index.html
├── 404.html
├── README.md
├── LICENSE
├── .gitignore
├── docs/
│ └── plan1.md
└── assets/
├── css/
├── js/
└── images/

## Cómo ejecutar en local

Opción rápida:

- Abre `index.html` en el navegador.

Opción recomendada:

- Usa **Live Server** (VSCode) para evitar problemas de rutas y caché.

## Guía rápida de personalización

### 1 Contenido

- Cambia textos en `index.html` (Hero / About / Projects / Contact).
- Sustituye enlaces de proyectos y redes sociales.

### 2 Proyectos

- Edita las tarjetas en la sección Projects.
- Reemplaza las imágenes placeholder por imágenes propias en `assets/images/` (recomendado).

### 3 Identidad visual

- Ajusta variables de color y tipografía en los CSS (custom properties).
- Mantén consistencia en espaciados y componentes (botones, cards).

### 4 Animaciones

- Animaciones de scroll y reveals están en `assets/js/main.js` (GSAP + ScrollTrigger).
- Si quieres desactivar animaciones, respeta `prefers-reduced-motion`.

## Accesibilidad (básica)

- Navegación usable por teclado
- Estados de foco visibles
- Texto alternativo en imágenes
- Preferencia de movimiento reducida (`prefers-reduced-motion`)

## Uso de IA (política del curso)

He utilizado un asistente de IA (ChatGPT) siguiendo el flujo requerido:

- **Fase 1: Planificación** documentada en `docs/plan1.md`
- **Fase 2: Implementación** aplicada después del plan, con commits descriptivos

## Licencia

Este proyecto se distribuye bajo licencia MIT. Ver `LICENSE`.
