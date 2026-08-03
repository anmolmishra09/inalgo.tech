# Inalgo Brand Guidelines

## Professional Logo

### Logo Design
The Inalgo logo features a modern, geometric "I" shape with circuit-like connections, symbolizing innovation and connectivity in algorithms. 

**Logo Components:**
- **Primary Mark**: Stylized "I" with gradient fill
- **Decorative Elements**: Circuit dots and lines representing digital connectivity
- **Typography**: "Inalgo" wordmark in Poppins Bold
- **Gradient**: Purple-indigo gradient (#4f46e5 to #7c3aed)

### Logo Variants
1. **Default**: Full color with gradient (for light backgrounds)
2. **Light**: White/light variant (for dark backgrounds - used in footer)
3. **Small**: Compact version for mobile and tight spaces
4. **Footer**: Slightly smaller size optimized for footer

### Logo Usage
- **File Location**: `/client/src/components/Logo.js`
- **Implementation**: React component with SVG
- **Hover Effect**: Subtle rotation (5deg) and scale (1.05)
- **Animation**: Pulsing circuit elements for tech feel

### Logo Do's
✅ Use on clean backgrounds
✅ Maintain adequate spacing around logo
✅ Use approved color variants only
✅ Scale proportionally

### Logo Don'ts
❌ Don't distort or stretch
❌ Don't change gradient colors
❌ Don't add drop shadows or effects
❌ Don't rotate beyond hover animation

---

## Consistent Color Theme

### Brand Colors

#### Primary Colors
- **Primary**: `#4f46e5` (Indigo) - Main brand color
- **Primary Light**: `#6366f1` - Hover states
- **Primary Dark**: `#4338ca` - Active states
- **Secondary**: `#7c3aed` (Purple) - Gradient end, accents
- **Secondary Light**: `#a78bfa` - Subtle highlights
- **Secondary Dark**: `#6d28d9` - Deep accents

#### Accent Colors
- **Accent Blue**: `#60a5fa` - Links, interactive elements
- **Accent Purple**: `#c084fc` - Special highlights
- **Accent Green**: `#34d399` - Success states

#### Neutral Colors
- **Black**: `#000000` - Primary background
- **Gray 900**: `#111827` - Dark elements
- **Gray 800**: `#1f2937` - Secondary backgrounds
- **Gray 700**: `#374151` - Borders
- **Gray 600**: `#4b5563` - Dividers
- **Gray 500**: `#6b7280` - Tertiary text
- **Gray 400**: `#9ca3af` - Placeholder text
- **Gray 300**: `#d1d5db` - Secondary text
- **Gray 200**: `#e5e7eb` - Light borders
- **Gray 100**: `#f3f4f6` - Primary text on dark
- **White**: `#ffffff` - Pure white accents

### Background System
- **Primary BG**: `#000000` - Main app background
- **Secondary BG**: `#131314` - Card backgrounds
- **Tertiary BG**: `#1f2937` - Nested elements

### Text Colors
- **Primary Text**: `#f3f4f6` - Main content on dark
- **Secondary Text**: `#d1d5db` - Supporting content
- **Tertiary Text**: `#9ca3af` - Subtle text
- **Dark Text**: `#1f2937` - Text on light backgrounds
- **Light Text**: `#6b7280` - Muted text

### Border Colors
- **Primary Border**: `#374151` - Main borders
- **Secondary Border**: `#4b5563` - Emphasis borders
- **Light Border**: `#e5e7eb` - Light theme borders

### Gradients
All gradients use 135deg angle for consistency:
- **Primary Gradient**: `#4f46e5` → `#7c3aed` (Main brand)
- **Secondary Gradient**: `#60a5fa` → `#4f46e5` (Accents)
- **Dark Gradient**: `#1f2937` → `#111827` (Backgrounds)

### Shadow System
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

### Color Usage Guidelines

#### Backgrounds
- Main app: `--bg-primary` (#000000)
- Cards/sections: `--bg-secondary` (#131314)
- Nested elements: `--bg-tertiary` (#1f2937)

#### Interactive Elements
- Buttons: Primary gradient
- Links: `--accent-blue` (#60a5fa)
- Hover: Lighten by one step
- Active: Darken by one step

#### Borders
- Standard: `--border-primary` (#374151)
- Focus: `--primary-color` (#4f46e5)
- Emphasis: `--border-secondary` (#4b5563)

---

## Clean Typography

### Font Family
**Primary Font**: Poppins (Google Fonts)
- **Weights Available**: 300, 400, 500, 600, 700, 800
- **Fallback**: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell

### Font Import
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
```

### Type Scale
- **XS**: `0.75rem` (12px) - Labels, badges
- **SM**: `0.875rem` (14px) - Small text, captions
- **Base**: `1rem` (16px) - Body text
- **LG**: `1.125rem` (18px) - Large body, subtitles
- **XL**: `1.25rem` (20px) - Card titles
- **2XL**: `1.5rem` (24px) - Section subtitles
- **3XL**: `1.875rem` (30px) - Section titles
- **4XL**: `2.25rem` (36px) - Page subtitles
- **5XL**: `3rem` (48px) - Hero titles

### Heading Hierarchy
```css
h1: 3rem (48px), weight: 700, line-height: 1.2
h2: 2.25rem (36px), weight: 700, line-height: 1.2
h3: 1.875rem (30px), weight: 700, line-height: 1.2
h4: 1.5rem (24px), weight: 700, line-height: 1.2
h5: 1.25rem (20px), weight: 700, line-height: 1.2
h6: 1.125rem (18px), weight: 700, line-height: 1.2
```

### Body Text
- **Weight**: 400 (Regular)
- **Line Height**: 1.6
- **Color**: `--text-secondary` (#d1d5db)
- **Max Width**: 65-75 characters for readability

### Weight Guidelines
- **300 (Light)**: Subtle text, decorative
- **400 (Regular)**: Body text, descriptions
- **500 (Medium)**: Nav links, labels
- **600 (Semibold)**: Card titles, emphasis
- **700 (Bold)**: Headings, CTAs
- **800 (Extrabold)**: Hero titles, major headings

### Line Height
- **Headings**: 1.2 (tight)
- **Body**: 1.6 (comfortable)
- **UI Elements**: 1.4 (balanced)

### Letter Spacing
- **Headings**: -0.5px (tighter for impact)
- **Body**: 0 (default)
- **Labels/Buttons**: 0.025em (slightly wider)

---

## Spacing System

### Spacing Scale
```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
--spacing-3xl: 4rem (64px)
```

### Usage Guidelines
- **Component padding**: Use md (16px) as baseline
- **Section padding**: Use 2xl-3xl (48-64px) for breathing room
- **Element gaps**: Use sm-lg (8-24px) based on hierarchy
- **Container margins**: Use xl-2xl (32-48px)

---

## Border Radius System

### Radius Scale
```css
--radius-sm: 0.25rem (4px) - Badges, tags
--radius-md: 0.5rem (8px) - Buttons, inputs
--radius-lg: 0.75rem (12px) - Cards
--radius-xl: 1rem (16px) - Large cards
--radius-2xl: 1.5rem (24px) - Hero sections
--radius-full: 9999px - Circular elements
```

---

## Animation System

### Transition Speeds
```css
--transition-fast: 150ms - Quick interactions
--transition-base: 300ms - Default
--transition-slow: 500ms - Complex animations
```

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth, natural

### Common Animations
- **Hover**: `transform: translateY(-2px)` + shadow increase
- **Click**: `transform: scale(0.98)`
- **Fade In**: `opacity: 0 → 1` over 300ms
- **Slide Up**: `transform: translateY(20px) → 0` over 500ms

---

## Implementation Files

### Core Files
1. **index.css**: Global styles, CSS variables, typography
2. **Logo.js**: Logo component with variants
3. **Logo.css**: Logo styling and animations
4. **Header.js/css**: Navigation with logo
5. **Footer.js/css**: Footer with light logo variant
6. **App.css**: Utility classes and button styles

### CSS Variables Location
All design tokens are defined in `/client/src/index.css` under the `:root` selector. Import this file first before any component styles.

---

## Brand Promise

**Innovation in Algorithms**

Inalgo represents the intersection of innovation and algorithms - sophisticated, modern, and technically excellent while remaining approachable and user-friendly.

### Brand Personality
- **Innovative**: Cutting-edge design and technology
- **Professional**: Clean, consistent, trustworthy
- **Accessible**: User-friendly, clear communication
- **Technical**: Detail-oriented, precise
- **Modern**: Contemporary design patterns

---

## Quick Reference

### Most Used Colors
- Background: `#000000`
- Cards: `#131314`
- Primary Text: `#f3f4f6`
- Secondary Text: `#d1d5db`
- Links: `#60a5fa`
- Borders: `#374151`
- Primary Brand: `#4f46e5`
- Gradient: `#4f46e5` → `#7c3aed`

### Most Used Font Sizes
- Body: `1rem` (16px)
- Card Title: `1.25rem` (20px)
- Section Title: `2.25rem` (36px)
- Hero: `3rem` (48px)

### Most Used Spacing
- Card padding: `2rem` (32px)
- Section padding: `4rem` (64px)
- Element gap: `1.5rem` (24px)

---

**Last Updated**: March 2, 2026
**Version**: 1.0
**Maintained by**: Inalgo Brand Team
