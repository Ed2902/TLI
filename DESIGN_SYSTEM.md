# Web Transport - Sistema de Diseño Optimizado para SEO

Un proyecto Next.js moderno con variables CSS personalizadas y componentes reutilizables diseñados para máximo rendimiento SEO.

## 🎨 Características Principales

### Variables CSS Globales

- **Colores Institucionales**: Verde (#2CAD3F) a Azul (#0A4EB6)
- **Gradientes Personalizados**: 3 gradientes predefinidos para consistencia visual
- **Escala de Espaciado**: Consistente y predecible
- **Sistema de Sombras**: Mejora de profundidad visual
- **Tipografía Optimizada**: Fuentes del sistema para mejor rendimiento

### Optimización SEO

✅ **Metadata API**: Configuración de Open Graph y meta tags  
✅ **Estructura Semántica**: HTML5 semántico para mejor indexación  
✅ **Rendimiento**: Next.js App Router con SSR/SSG  
✅ **Accesibilidad**: WCAG 2.1 compliant  
✅ **Imágenes Optimizadas**: Next/Image para lazy loading  
✅ **Velocidad**: Turbopack para builds más rápidos

## 📁 Estructura del Proyecto

```
web-transport/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal con metadata
│   │   ├── page.tsx            # Página demo del sistema
│   │   └── globals.css         # Variables CSS globales
│   ├── components/
│   │   ├── Button.tsx          # Botón personalizado
│   │   ├── Hero.tsx            # Sección hero con gradientes
│   │   ├── Card.tsx            # Tarjeta reutilizable
│   │   └── index.ts            # Exportaciones
│   └── lib/
│       └── styles.ts           # Utilidades de estilos
├── tailwind.config.js          # Configuración Tailwind personalizada
├── next.config.js              # Configuración Next.js
└── tsconfig.json               # Configuración TypeScript
```

## 🎯 Variables CSS Disponibles

### Colores

```css
/* Colores Primarios */
--primary-green: #2cad3f;
--primary-blue: #0a4eb6;
--primary-dark-blue: #042c51;

/* Gradientes */
--gradient-primary: linear-gradient(135deg, #2cad3f 0%, #0a4eb6 100%);
--gradient-secondary: linear-gradient(135deg, #042c51 0%, #0a4eb6 100%);
--gradient-accent: linear-gradient(
  90deg,
  #2cad3f 0%,
  #042c51 50%,
  #0a4eb6 100%
);
```

### Espaciado

```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
```

### Otros

- `--font-sans`: Fuentes del sistema
- `--font-mono`: Monospace para código
- `--radius-*`: Radio de bordes
- `--shadow-*`: Sombras predefinidas

## 🚀 Cómo Usar

### Instalación

```bash
cd web-transport
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### Compilación

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 🧩 Componentes Disponibles

### Button

```tsx
import { Button } from '@/components'
;<Button variant='primary' size='lg'>
  Solicitar Demo
</Button>

// Variantes: primary, secondary, outline
// Tamaños: sm, md, lg
```

### Hero

```tsx
import { Hero } from '@/components'
;<Hero
  title='Tu Título'
  subtitle='Subtítulo'
  ctaText='Botón CTA'
  backgroundType='gradient-primary'
/>
```

### Card

```tsx
import { Card } from '@/components'
;<Card title='Título' description='Descripción' highlighted={true} />
```

## 🎨 Personalización

### Agregar Nuevos Colores

Edita `tailwind.config.js` y agrega a la sección `colors`:

```js
colors: {
  'mi-color': '#hexcode',
}
```

### Crear Componentes Nuevos

1. Crea el archivo en `src/components/MiComponente.tsx`
2. Exporta desde `src/components/index.ts`
3. Usa las variables CSS del proyecto

## 📊 Optimizaciones SEO Implementadas

### Metadata

- Open Graph tags para redes sociales
- Meta description automático
- Canonical URLs

### Rendimiento

- Code splitting automático
- Image optimization
- Font subsetting
- CSS minification

### Semántica HTML

- Headings jerárquicos (h1, h2, h3...)
- Listas semánticas
- Links con contexto
- Alt text en imágenes

## 🔧 Configuración Avanzada

### Tailwind Personalizado

El archivo `tailwind.config.js` extiende Tailwind con:

- Colores institucionales
- Gradientes predefinidos
- Espaciado consistente
- Tipografía del sistema

### Variables CSS en Dark Mode

El proyecto soporta automáticamente dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0f1419;
    --foreground: #f5f7fa;
  }
}
```

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Web Performance Tips](https://web.dev)
- [SEO Best Practices](https://developers.google.com/search)

## 🚦 Estados del Proyecto

- ✅ Estructura base configurada
- ✅ Variables CSS personalizadas
- ✅ Componentes reutilizables
- ✅ Optimizaciones SEO
- ⏳ Página de inicio personalizada (próximo)
- ⏳ Sistema de rutas completo (próximo)

## 💡 Próximos Pasos

1. Personaliza `src/app/page.tsx` con tu contenido
2. Crea páginas nuevas en `src/app/`
3. Desarrolla componentes específicos de tu negocio
4. Configura analytics (Google Analytics, etc.)
5. Implementa formularios de contacto
6. Agrega blog o contenido dinámico

## ⚙️ Comando npm Disponibles

| Comando         | Descripción                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción       |
| `npm run start` | Inicia servidor de producción |
| `npm run lint`  | Ejecuta ESLint                |

---

**Diseñado para máximo rendimiento SEO y experiencia de usuario.** 🚀
