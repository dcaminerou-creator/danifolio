# plan1 — Planificación y preparación de entrega

Portfolio Template (Bootstrap + GSAP)

Este documento recoge la **fase de planificación previa** del proyecto y sirve como
evidencia del enfoque metodológico seguido antes de la implementación final del portfolio.

El objetivo del plan fue definir un **flujo de trabajo profesional**, alineado con los
requisitos del proyecto, el despliegue en GitHub Pages y los criterios de calidad esperados
en una entrega real de frontend.

---

## Objetivo del proyecto

Desarrollar una **plantilla de portfolio profesional**, clara y reutilizable, que pueda
servir como base para futuros proyectos personales o profesionales, cumpliendo criterios de:

- estructura semántica
- responsive design
- accesibilidad básica
- animaciones cuidadas
- control de versiones y despliegue profesional

---

## Plan de trabajo definido

### 1. Repositorio y despliegue

- Configurar un repositorio público con nombre claro y estructura limpia.
- Verificar el despliegue correcto en GitHub Pages mediante una URL pública.
- Probar el sitio en modo incógnito para evitar falsos positivos por caché.
- Asegurar rutas relativas correctas a todos los assets.
- Incluir una página `404.html` personalizada con navegación de retorno al inicio.

---

### 2. Documentación del proyecto

- Redactar un `README.md` claro, con:
  - enlace visible al sitio desplegado
  - descripción del stack tecnológico
  - instrucciones de ejecución local
  - guía básica de personalización
- Incluir licencia (`LICENSE`) y archivo `.gitignore` adecuados al stack utilizado.

---

### 3. Estructura y calidad de código

- Uso correcto de HTML semántico (`header`, `nav`, `main`, `section`, `footer`).
- Jerarquía lógica de encabezados, con un solo `<h1>` por página.
- Organización del CSS basada en:
  - variables (custom properties)
  - secciones y componentes
- Comprobación de ausencia de errores de consola en producción.

---

### 4. Diseño responsive

- Enfoque mobile-first.
- Comprobación de layout en distintos breakpoints (móvil, tablet, escritorio).
- Prevención de scroll horizontal no deseado.
- Tipografía fluida y escalable cuando procede.

---

### 5. Animación e interactividad

- Uso de transiciones CSS en elementos interactivos.
- Implementación de animaciones de entrada y scroll mediante GSAP y ScrollTrigger.
- Animaciones suaves y no intrusivas, priorizando la legibilidad del contenido.
- Implementación de `prefers-reduced-motion` para respetar las preferencias del usuario.

---

### 6. Accesibilidad básica

- Inclusión de texto alternativo en imágenes.
- Estados de foco visibles en elementos interactivos.
- Navegación usable mediante teclado.
- Contraste suficiente para una lectura cómoda (nivel básico).

---

### 7. Preparación de la entrega final

- Revisión completa del despliegue y del comportamiento responsive.
- Limpieza del repositorio y verificación del historial de commits.
- Creación de un tag de versión `v1.0.0`.
- Publicación de una GitHub Release asociada a dicha versión, con notas descriptivas.

---

## Notas de implementación

- El `README.md` fue actualizado para incluir el enlace de despliegue y la información
  necesaria para comprender y reutilizar la plantilla.
- La estructura final del proyecto se ajustó al plan definido inicialmente.
- El despliegue en GitHub Pages y la página 404 personalizada fueron verificados.
- La versión final del proyecto fue etiquetada como `v1.0.0` y publicada mediante GitHub Release.
