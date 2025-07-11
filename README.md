# Portafolio Web - Alejandro Valera

Este es un portafolio web moderno desarrollado como una **SPA** (Single Page Application) utilizando **Next.js** y **TypeScript**. El objetivo principal es presentar tus proyectos, habilidades y experiencia con una experiencia visual dinámica y animada, cuidando la performance, la accesibilidad y la personalización para el usuario.

---

## 🚀 Tecnologías y Librerías

- **Next.js**: Framework de React con funcionalidades de SSR/SSG, usado aquí como SPA.
- **TypeScript**: Tipado robusto y autocompletado seguro.
- **TailwindCSS**: Utilidad para estilos rápidos, diseño responsivo y bajo acoplamiento.
- **GSAP** + **ScrollTrigger**: Animaciones avanzadas en cada sección.
- **Lenis**: Scroll suavizado y controlado.
- **React Context**: Dos contextos globales (`AnimationContext` y `LanguageContext`) para preferencia de animaciones e idioma.
- **Custom Hooks**: Para manejo de scroll, secciones activas, estrellas animadas en el fondo, etc.
- **CSS Nativo**: Animaciones visuales (glitch, fondo, scanlines, etc).
- **Persistencia en LocalStorage**: Guarda la preferencia de idioma y animaciones para el usuario.

---

## ✨ Funcionalidades

- **Secciones animadas:** `Hero`, `Sobre Mí`, `Habilidades`, `Mi Camino`, `Proyectos`, `Contacto`.
- **Animaciones GSAP:** Cada sección utiliza animaciones de entrada/desplazamiento avanzadas y sincronizadas con el scroll.
- **Background animado:** Elementos retro-futuristas animados puramente con CSS (`/styles/background.css`).
- **Cambio de idioma:** Soporte para Español e Inglés. Persistencia con LocalStorage.
- **Preferencia de animaciones:** Botón para activar o reducir animaciones (detecta "prefer-reduced-motion").
- **Scroll Suave:** Navegación fluida entre secciones usando Lenis y scroll programático.
- **Accesibilidad:** Navegación por teclado y componentes optimizados.
- **Responsive:** Adaptado para móviles y escritorio.

---

## 📂 Estructura del Proyecto

```
src/
  app/
    page.tsx         // Entrada principal SPA
    layout.tsx       // Providers globales, fuentes y estilos
  components/
    sections/        // Componentes de cada sección principal
    ui/              // UI reusables (NavBar, Toggles, etc)
    items/           // Tarjetas de habilidades/proyectos
    extras/          // Overlays, loading, city, etc
    lenis/           // Proveedor de scroll Lenis
  context/
    AnimationContext.tsx // Manejo global de animaciones
    LanguageContext.tsx  // Manejo global de idioma
  hooks/
    useActiveSection.tsx // Detecta sección visible
    useScrollToSection.tsx // Navegación fluida con Lenis
    useStars.tsx           // Estrellas animadas en fondo
    useLenisScrollTrigger.tsx // Sincroniza scroll Lenis con GSAP
  data/
    skills.ts       // Datos de skills
    projects.ts     // Datos de proyectos
    langs.ts        // Textos en ambos idiomas
  styles/
    ...             // Archivos CSS de fondo, glitch, etc.
public/
  assets/           // Imágenes y SVGs usados en el portafolio
```

---

## 🛠️ Personalización

- **Habilidades y proyectos:** Edita [`src/data/skills.ts`](src/data/skills.ts) y [`src/data/projects.ts`](src/data/projects.ts).
- **Textos y traducción:** Modifica o amplía [`src/data/langs.ts`](src/data/langs.ts).
- **Animaciones:** Puedes editar los hooks, GSAP timelines, o los archivos en [`src/styles/`](src/styles/) para personalizar los efectos visuales y el background.
- **Imágenes:** Agrega tus imágenes o SVGs a [`public/assets/`](public/assets/).

---

## 🧩 Arquitectura

El proyecto está guiado por una arquitectura modular y desacoplada:

- **Contexts React:** Controlan globalmente idioma y animaciones, permitiendo personalización instantánea en todos los componentes.
- **Hooks personalizados:** Centralizan la lógica de scroll, secciones, y animaciones para evitar código duplicado.
- **Componentes desacoplados:** Cada sección, tarjeta o elemento visual es su propio componente reutilizable y fácil de mantener.
- **Persistencia:** Preferencias de idioma y animaciones guardadas vía LocalStorage (ver [`AnimationContext`](src/context/AnimationContext.tsx) y [`LanguageContext`](src/context/LanguageContext.tsx)).
- **Animaciones y scroll:** Uso integrado GSAP + Lenis para sincronizar animaciones intensivas con una experiencia de scroll ultra-fluida.

---

## 📋 Accesibilidad y buenas prácticas

- Navegación en la barra de navegación.
- Contrastes y tamaño de fuente pensados para lectura óptima.
- Código tipado y estricto con TypeScript.

---

## 📄 Licencia

Este proyecto es personal y no tiene licencia explícita de distribución.

