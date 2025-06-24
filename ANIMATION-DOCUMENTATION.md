# Animation System Documentation

This document outlines the animation system implemented in the MRONCY School of Welding website.

## Core Animation Principles

1. **Consistency**: All animations follow consistent timing and easing functions defined in CSS variables
2. **Performance**: Animations are optimized for performance using hardware acceleration and efficient properties
3. **Accessibility**: Animations respect user preferences for reduced motion
4. **Progressive Enhancement**: Core functionality works without animations, which are added as an enhancement

## Animation Types

### Page Transitions

Page transitions provide smooth movement between different pages of the website:

- Entry animations when a page loads
- Exit animations when navigating away
- Consistent timing and easing for a cohesive experience

### Scroll Animations

Elements animate as they enter the viewport during scrolling:

- Fade-in animations
- Slide-up/down/left/right animations
- Staggered animations for lists and grids

### Interactive Animations

Feedback animations that respond to user interactions:

- Hover effects on buttons, links, and cards
- Click/tap animations
- Form element focus states

## Implementation

### CSS Variables

Animation timing and easing functions are defined as CSS variables for consistency:

\`\`\`css
:root {
  --transition-fast: 150ms;
  --transition-medium: 300ms;
  --transition-slow: 500ms;
  --transition-extra-slow: 800ms;
  
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
\`\`\`

### Animation Classes

Reusable animation classes are defined in the global CSS:

\`\`\`css
.animate-fade-in {
  animation: fadeIn 1s var(--ease-out) forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s var(--ease-out) forwards;
  opacity: 0;
}
\`\`\`

### React Components

Custom React components for animations:

1. **ScrollAnimation**: Triggers animations when elements enter the viewport
2. **PageTransition**: Handles smooth transitions between pages
3. **AnimationInitializer**: Sets up scroll-based animations on page load

## Performance Optimization

1. **Hardware Acceleration**: Using `transform` and `opacity` properties that don't trigger layout
2. **Will-change**: Hinting to the browser which properties will animate
3. **Reduced Motion**: Respecting user preferences for reduced motion

## Accessibility

1. **Reduced Motion**: Animations are disabled for users who prefer reduced motion
2. **Focus Visibility**: Enhanced focus states for keyboard navigation
3. **Animation Timing**: Appropriate timing to avoid overwhelming users

## Usage Guidelines

### Adding Scroll Animations

\`\`\`jsx
<ScrollAnimation type="fade-up" delay={0.2}>
  <YourComponent />
</ScrollAnimation>
\`\`\`

### Adding Page Transitions

Wrap your page content with the PageWrapper component:

\`\`\`jsx
<PageWrapper>
  <YourPageContent />
</PageWrapper>
\`\`\`

### Adding CSS Animations

Apply animation classes directly to elements:

\`\`\`jsx
<div className="animate-fade-in">
  Content that fades in
</div>
\`\`\`

### Creating Staggered Animations

Use the stagger-animation class with child elements:

\`\`\`jsx
<div className="stagger-animation">
  <div>First item (appears first)</div>
  <div>Second item (appears second)</div>
  <div>Third item (appears third)</div>
</div>
