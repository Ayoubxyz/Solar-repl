# Solar-Gear Website

## Project Overview
A modern, conversion-focused 4-page website for Solar-Gear, a solar energy solutions company serving residential and commercial customers across Kenya. The site combines exceptional visual design with strategic user experience to maximize conversions.

## Technology Stack
- **Frontend**: React with TypeScript, Wouter for routing
- **Backend**: Express.js with TypeScript
- **Styling**: Tailwind CSS with Shadcn UI components
- **Fonts**: Inter (body), Poppins (headings)
- **Color Scheme**: Primary Green (142 71% 45%), Deep Teal (186 44% 35%), Sky Blue (199 89% 48%)
- **Storage**: In-memory storage for contact inquiries and quote requests
- **State Management**: TanStack Query v5

## Site Structure

### Pages
1. **Home** (`/`) - Hero section with animations, benefits grid, solutions overview, 4-step process, savings calculator, testimonials, and CTAs
2. **About** (`/about`) - Mission, values, company stats, certifications, team information
3. **Products** (`/products`) - Filterable product catalog (panels, inverters, batteries, equipment) with quote request forms
4. **Packages** (`/packages`) - Residential and commercial package comparisons with detailed pricing and features

### Key Features
- Animated hero sections on all pages
- Energy savings calculator on home page
- Product filtering by category (all, panels, inverters, batteries, equipment)
- Package comparison with residential/commercial tabs
- Quote request forms for products and packages
- Responsive design (mobile, tablet, desktop)
- Fixed navigation with backdrop blur on scroll
- Comprehensive footer with newsletter signup

## Data Models

### Contact Inquiries
- Contact form submissions from users
- Fields: name, email, phone, inquiryType, message

### Products
- Solar panels, inverters, batteries, and equipment
- Fields: id, name, category, description, price, specs[], image, featured

### Packages
- Pre-configured solar solutions for residential and commercial
- Fields: id, name, type, price, capacity, features[], energyOutput, coverageArea, popular, badge

### Quote Requests
- Product and package quote requests
- Fields: name, email, phone, itemType, itemId, itemName, message

## API Endpoints (To be implemented)
- `POST /api/contact` - Submit contact inquiry
- `POST /api/quote-request` - Submit quote request for product or package
- `GET /api/products` - Retrieve all products (for future dynamic loading)
- `GET /api/packages` - Retrieve all packages (for future dynamic loading)

## Design Guidelines
Detailed design specifications are in `design_guidelines.md` including:
- Color palette for light and dark modes
- Typography hierarchy
- Component specifications
- Animation guidelines
- Layout system and spacing

## Project Status
- ✅ Schema definitions complete
- ✅ Frontend components built for all 4 pages
- ✅ Navigation and Footer components
- ✅ Design system configured (colors, fonts, spacing)
- ✅ Hero images generated for all pages
- 🔄 Backend API implementation in progress
- ⏳ Integration and testing pending

## Development Notes
- All components follow Shadcn UI patterns with hover-elevate and active-elevate-2 utilities
- Forms use React Hook Form with Zod validation
- Products and packages are currently hardcoded but structured for easy backend integration
- Calculator provides 25-year savings estimates based on 80% electricity bill reduction
- All interactive elements have data-testid attributes for testing

## Recent Changes
- Initial project setup complete
- All frontend pages implemented with exceptional visual quality
- Comprehensive design system established
- Hero images generated and integrated
