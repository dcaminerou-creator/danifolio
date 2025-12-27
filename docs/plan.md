# plan1 — Preparación de entrega + checklist profesional (Portfolio Template)

## Prompt (a la IA)

Necesito cumplir el brief del proyecto final (portfolio template) partiendo de una plantilla ya iniciada. Dame un plan paso a paso para:

- dejar el repositorio profesional (README, LICENSE, .gitignore, 404)
- asegurar deploy en GitHub Pages
- asegurar requisitos de responsive, semántica, accesibilidad básica
- preparar tag v1.0.0 y GitHub Release
  Quiero un orden de trabajo práctico y verificaciones concretas.

## Plan recibido (resumen operativo)

1. **Repo & Deploy**

   - Verificar GitHub Pages en URL pública y probar en incógnito.
   - Asegurar rutas relativas a assets (./assets/...).
   - Asegurar existencia de 404.html con navegación de vuelta al inicio.

2. **Documentación**

   - README con enlace al deploy en primera línea.
   - Instrucciones de ejecución local + guía de personalización.
   - Sección “Uso de IA” describiendo el flujo en dos fases.
   - LICENSE en raíz y .gitignore completo.

3. **Estructura y calidad**

   - HTML semántico (header/nav/main/section/footer), un solo h1.
   - CSS organizado y mantenible (variables, layout, components).
   - Sin errores en consola en producción.

4. **Responsive**

   - Mobile-first, sin scroll horizontal.
   - Tipografía fluida con clamp().
   - Grid de proyectos con CSS Grid auto-fit/minmax.

5. **Animación e interactividad**

   - Transiciones CSS en elementos interactivos.
   - GSAP + ScrollTrigger para reveals/parallax suave.
   - prefers-reduced-motion para desactivar animaciones si el usuario lo solicita.

6. **Accesibilidad básica**

   - Alt en imágenes, foco visible, navegación por teclado.
   - Contraste AA (aprox.) y no depender solo del color.

7. **Entrega final**
   - Commit final tipo release.
   - Tag anotado v1.0.0 y push.
   - Crear GitHub Release con notas.

## Notas de implementación (qué se aplicó)

- Se actualizó README para que el enlace del deploy esté en la primera línea y se añadió sección de uso de IA.
- Se añadió/actualizó este plan como evidencia de fase 1 antes de cambios relevantes.
- Se verificó el despliegue en GitHub Pages y la página 404.
- (Rellenar al final) Se creó tag v1.0.0 y GitHub Release.
