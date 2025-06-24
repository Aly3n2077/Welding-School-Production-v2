# MRONCY School of Welding Website Documentation

## Overview
This document provides an overview of the MRONCY School of Welding website, including its structure, components, and recent fixes.

## Recent Fixes

### 1. Hero Background Image
- Fixed the hero background image path in globals.css
- Ensured the image is properly displayed on all screen sizes
- Added proper fallback for when the image is loading

### 2. Header Logo
- Fixed the header logo display issues
- Added responsive sizing for the logo
- Ensured proper scaling on mobile devices

### 3. About Teaser Carousel
- Fixed the rotating image carousel in the About section
- Improved the modal functionality for viewing flyers
- Added the ability to close the modal by clicking/touching outside
- Enhanced keyboard navigation for accessibility

### 4. Featured Courses Horizontal Scrolling
- Fixed horizontal scrolling functionality for course cards
- Improved touch controls for mobile devices
- Enhanced visual indicators for scrolling
- Fixed responsive layout issues

### 5. Responsive Improvements
- Added xs breakpoint (375px) for better control on small devices
- Improved typography scaling across different screen sizes
- Enhanced spacing and layout for better mobile experience
- Fixed touch interactions for better mobile usability

## Component Structure

### Layout Components
- Header: Navigation and branding
- Footer: Contact information and links

### Home Page Components
- HeroSection: Main banner with call-to-action
- FeaturedCourses: Horizontally scrolling course cards
- AboutTeaser: Information about the school with image carousel
- Testimonials: Student testimonials
- ProfessionalNetwork: Information about professional connections
- GenderDiverseSection: Information about diversity initiatives
- KeyHighlights: Key features of the school

### Course-Related Components
- CoursePage: Main courses listing page
- CourseDetail: Individual course details

### Contact Components
- ContactForm: Form for inquiries
- MapComponent: Location map

## Environment Variables
The following environment variables are required:
- RECAPTCHA_SECRET_KEY
- EMAIL_FROM
- ADMIN_EMAIL
- RESEND_API_KEY
- NEXT_PUBLIC_SITE_URL
- RECAPTCHA_SITE_KEY

## Image Assets
- herobg.png: Hero section background
- ico2.png: School logo
- careerflyer.jpg: Career opportunities flyer
- certified-professionals-flyer.png: Certified professionals flyer
- welding-services-flyer.jpeg: Welding services flyer

## Recent Updates (v1.5.0)
- Enhanced hero section with professional button design
- Fixed mobile responsiveness issues for call-to-action buttons
- Improved user interface consistency across all devices
- Resolved CSS syntax errors and Tailwind class conflicts
- Enhanced button animations and hover effects

## Technical Architecture

### Styling Framework
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Custom CSS Variables**: Consistent color scheme with CSS custom properties
- **Responsive Design**: Mobile-first approach with breakpoint-based styling
- **Animation System**: Custom keyframe animations with CSS transitions

### Button System
- **Primary Buttons**: Gradient background with hover effects and scaling
- **Secondary Buttons**: Transparent with border, converts to solid on hover
- **Mobile Optimization**: Responsive sizing with consistent touch targets
- **Accessibility**: Focus states and proper contrast ratios

### Performance Optimizations
- **Image Optimization**: Next.js Image component with lazy loading
- **CSS Optimization**: Component-scoped styles with Tailwind utilities
- **Animation Performance**: Hardware-accelerated transforms
- **Bundle Optimization**: Tree-shaking and code splitting

## Troubleshooting

### Common CSS Issues
- **Invalid Tailwind Classes**: Ensure custom color modifiers are properly defined
- **Mobile Button Issues**: Use responsive utilities and proper flex/grid layouts
- **Animation Performance**: Use transform and opacity for smooth animations

### Development Tips
- Use Next.js Image component for all images to ensure optimization
- Test responsive design at multiple breakpoints
- Validate Tailwind classes before deployment
- Use browser dev tools to debug layout issues

## Future Improvements
- Add more course-specific images
- Implement dark mode toggle
- Add more interactive elements and micro-animations
- Enhance performance with further image optimization
- Implement service worker for offline access
- Add A/B testing for conversion optimization
