# CSS Styling Guide - MRONCY School of Welding

## Overview
This document outlines the CSS architecture, styling conventions, and best practices used in the MRONCY School of Welding website.

## Color System

### Primary Colors
\`\`\`css
:root {
  --steel-blue: #36454f;      /* Primary brand color */
  --welding-orange: #ff6600;  /* Accent/CTA color */
  --light-grey: #f4f4f4;      /* Background color */
}
\`\`\`

### Usage Guidelines
- **Steel Blue**: Headers, navigation, text emphasis
- **Welding Orange**: Call-to-action buttons, highlights, links
- **Light Grey**: Section backgrounds, subtle separators

## Button System

### Primary Button (.btn-primary)
\`\`\`css
.btn-primary {
  @apply px-8 py-4 bg-gradient-to-r from-welding-orange to-yellow-500 
         text-white font-bold rounded-full hover:from-orange-600 
         hover:to-yellow-400 transition-all duration-300 shadow-xl 
         hover:shadow-2xl inline-flex items-center transform 
         hover:scale-105 hover:-translate-y-1 border border-white/20;
}
\`\`\`

### Secondary Button (.btn-secondary)
\`\`\`css
.btn-secondary {
  @apply px-8 py-4 bg-transparent border-2 border-white text-white 
         font-bold rounded-full hover:bg-white hover:text-steel-blue 
         transition-all duration-300 shadow-xl hover:shadow-2xl 
         inline-flex items-center transform hover:scale-110 hover:-translate-y-1;
}
\`\`\`

## Responsive Design

### Breakpoints
- **sm**: 640px and up
- **md**: 768px and up  
- **lg**: 1024px and up
- **xl**: 1280px and up

### Mobile-First Approach
All styles are written mobile-first, then enhanced for larger screens:

\`\`\`css
/* Mobile base styles */
.hero-title {
  @apply text-4xl;
}

/* Tablet and up */
@screen md {
  .hero-title {
    @apply text-6xl;
  }
}

/* Desktop and up */
@screen lg {
  .hero-title {
    @apply text-8xl;
  }
}
\`\`\`

## Animation System

### Performance Guidelines
- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left` (causes layout shifts)
- Use `will-change` property sparingly and remove after animation

### Custom Animations
\`\`\`css
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
\`\`\`

## Component-Specific Styles

### Hero Section
- Full viewport height with background image overlay
- Gradient text effects for brand emphasis
- Responsive button layout with proper spacing

### Cards
- Consistent hover effects with subtle elevation
- Backdrop blur for glassmorphism effects
- Proper image aspect ratios

### Forms
- Focus states with brand color outlines
- Consistent padding and spacing
- Error state styling

## Accessibility

### Focus States
\`\`\`css
:focus-visible {
  @apply outline-welding-orange outline-2 outline-offset-2 rounded-sm;
}
\`\`\`

### Color Contrast
- Minimum 4.5:1 ratio for normal text
- Minimum 3:1 ratio for large text
- Test with tools like WebAIM Color Contrast Checker

### Reduced Motion
\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
\`\`\`

## Best Practices

### CSS Organization
1. Base styles first (typography, resets)
2. Component styles second
3. Utility classes last
4. Use `@layer` directive for proper cascade order

### Performance
1. Minimize CSS bundle size with PurgeCSS/Tailwind JIT
2. Use CSS custom properties for dynamic theming
3. Avoid deep nesting (max 3 levels)
4. Group related properties together

### Maintenance
1. Document complex calculations and magic numbers
2. Use semantic class names over presentational ones
3. Keep consistent naming conventions
4. Regular CSS audits to remove unused styles

## Common Issues and Solutions

### Issue: Button appears cut off on mobile
**Solution**: Ensure proper flex container and min-width values
\`\`\`css
.button-container {
  @apply flex flex-col sm:flex-row gap-4 px-4;
}

.button {
  @apply min-w-[200px] w-full sm:w-auto;
}
\`\`\`

### Issue: Invalid Tailwind class errors
**Solution**: Check for custom color modifiers and define them properly
\`\`\`css
/* Instead of: hover:from-welding-orange/90 */
/* Use: hover:from-orange-600 */
\`\`\`

This guide should be updated as the CSS architecture evolves.
