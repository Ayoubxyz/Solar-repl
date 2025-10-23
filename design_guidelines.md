# Solar-Gear Design Guidelines

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from modern clean energy leaders (Tesla Energy, Sunrun) combined with conversion-optimized e-commerce patterns (Shopify, Stripe). The design emphasizes trust, sustainability, and professional credibility while maintaining strong visual appeal for both residential and commercial audiences.

## Color Palette

### Light Mode
- **Primary Green**: 142 71% 45% - Main brand color for CTAs, accent elements
- **Deep Teal**: 186 44% 35% - Secondary actions, section backgrounds
- **Sky Blue**: 199 89% 48% - Informational elements, links
- **Warm Gold**: 45 93% 58% - Highlight savings, energy metrics (use sparingly for impact)
- **Neutral Gray**: 220 13% 46% - Body text, supporting content
- **Light Background**: 210 20% 98% - Page backgrounds, cards
- **White**: 0 0% 100% - Primary backgrounds, hero overlays

### Dark Mode
- **Primary Green**: 142 65% 55% - Adjusted for dark backgrounds
- **Deep Teal**: 186 50% 45% - Enhanced visibility
- **Charcoal**: 220 18% 12% - Dark backgrounds
- **Soft Gray**: 220 10% 85% - Text on dark backgrounds

### Trust Signals
- **Success Green**: 142 76% 36% - Certifications, guarantees
- **Warning Amber**: 38 92% 50% - Energy alerts, important notices

## Typography

**Font Stack**: 
- **Headings**: 'Inter' or 'Poppins' (600-700 weight) - Modern, geometric, professional
- **Body**: 'Inter' or 'Open Sans' (400-500 weight) - Excellent readability
- **Accent/Numbers**: 'Poppins' (700 weight) - Energy savings, pricing

**Hierarchy**:
- Hero Headlines: 4xl-6xl (56-72px desktop), bold, tight leading
- Section Headers: 3xl-4xl (36-48px), semi-bold
- Subheadings: xl-2xl (24-30px), medium weight
- Body Text: base-lg (16-18px), regular weight
- CTAs: lg (18px), semi-bold, uppercase tracking

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent vertical rhythm.
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component gaps: gap-8 to gap-12
- Card padding: p-6 to p-8
- Container max-width: max-w-7xl with px-4 to px-8

**Grid Strategy**:
- Products: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Packages: 3-column comparison (side-by-side)
- Benefits: 3-column icon grid
- Projects: 3-column masonry or 2-column with feature card

## Component Library

### Hero Section (Home Page)
- Full-bleed background image (solar panels on Kenyan roof, bright sunshine)
- Overlay gradient: linear from transparent to dark (40% opacity)
- Centered content with max-w-4xl
- Large headline + supporting text + dual CTAs (primary + outline with blur backdrop)
- Subtle scroll indicator animation
- Height: 85vh minimum

### Navigation
- Fixed header with backdrop blur on scroll
- Logo left, navigation center, CTA button right
- Mobile: Hamburger menu with slide-in drawer
- Subtle shadow on scroll

### Product Cards
- Clean white cards with subtle shadow
- Product image (aspect-ratio-square with hover zoom)
- Product name (xl, semi-bold)
- 2-3 key specs as bullet points
- Pricing (2xl, bold) with currency
- Dual CTAs: "View Details" + "Request Quote" (outline)
- Hover: lift effect (transform translateY + shadow increase)

### Package Cards
- Elevated design with border accent on featured package
- Package name + pricing tier
- "What's Included" checklist with green checkmarks
- Energy output estimate
- Coverage area/capacity
- Primary CTA at bottom
- Badge for "Most Popular" or "Best Value"

### Benefits Section
- Icon + title + description cards
- Icons: Simple line icons (solar panel, battery, money, lightning)
- 3-column grid with consistent height
- Subtle hover animation (icon color shift)

### Trust Elements
- Testimonial cards with customer photo, name, location, quote
- Certification badges row (warranty, certified installer, quality marks)
- Project showcase with before/after or installation images
- Stats counter section (projects completed, energy generated, customers served)

### Forms (Contact/Quote)
- Clean, spacious layout with clear labels
- Input fields: Rounded, border focus states
- Dropdown for inquiry type
- Textarea for message
- Submit button: Full-width on mobile, auto on desktop
- Success state animation

### Footer
- 4-column layout: Company info, Quick Links, Services, Contact
- Newsletter signup section
- Social media icons
- Trust badges row
- Copyright and policies

## Animations

**Use Sparingly** - Only for enhancing understanding:
- Hero: Fade-in + slide-up on load (0.8s ease)
- Scroll-triggered: Fade-in-up for sections (Intersection Observer)
- Product cards: Smooth hover lift (0.3s)
- CTA buttons: Subtle scale on hover (transform: scale(1.02))
- Savings calculator: Number count-up animation
- NO background parallax, NO excessive motion

## Images

### Hero Images
- **Home**: Large hero image of modern Kenyan home with rooftop solar installation, bright sunny day, professional photography
- **About**: Team installing solar panels or office/warehouse facility
- **Products**: Clean product grid with white/light backgrounds showcasing equipment
- **Packages**: Split hero showing residential home and commercial building with solar

### Product Images
- High-quality product photos on white background
- Consistent lighting and angles
- Minimum 800x800px for cards
- Consider lifestyle shots (panels on roof) for context

### Project Gallery
- Actual installation photos from reference projects (Karen, Runda, Mombasa)
- Before/after comparisons where applicable
- Wide shots showing full installation + detail shots

### Trust Building
- Team photos (professional, on-site)
- Certification/quality badges
- Partner/supplier logos

## Accessibility & Responsiveness

- Maintain WCAG AA contrast ratios (4.5:1 text, 3:1 UI)
- All interactive elements: min 44x44px touch target
- Form labels always visible
- Focus states clearly visible
- Responsive breakpoints: 640px, 768px, 1024px, 1280px
- Mobile-first approach with progressive enhancement

## Key Design Principles

1. **Conversion-First**: Every section guides toward action (consultation, quote, purchase)
2. **Trust Building**: Prominent certifications, testimonials, guarantees throughout
3. **Clear Hierarchy**: Important info front-loaded, scannable layouts
4. **Professional Polish**: Clean, modern, premium feel reflecting quality service
5. **Eco-Conscious**: Green theme with natural imagery, sustainability messaging

## Page-Specific Layouts

**Home**: Hero → Benefits (3-col) → Solutions Overview (4 items) → Process (4 steps) → Projects Gallery → Calculator → CTA Section → Footer

**About**: Hero → Mission Statement → Team Grid → Certifications Row → Why Choose Us (3 benefits) → Company Stats → CTA → Footer

**Products**: Hero → Category Tabs/Filter → Product Grid (3-col, 9-12 items) → Comparison Table → Installation Info → CTA → Footer

**Packages**: Hero with Residential/Commercial Toggle → Package Cards (3-col comparison) → What's Included Details → FAQs → Calculator → Strong CTA → Footer