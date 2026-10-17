# Stack migration guide

The current page is a static prototype. Its structure is deliberately portable; the next stack should be chosen based on the product's needs rather than rewriting everything at once.

## 1. Stabilize the domain and content

Move repeated content (module cards, FAQs, marketplace categories, navigation links) into plain data objects/JSON. Keep product wording and feature availability separate from presentation. Do not put business rules in CSS or DOM handlers.

## 2. Component boundaries

Suggested components when adopting a component framework:

- `SiteHeader` / `MobileNavigation`
- `HeroSection` / `ProductPreview`
- `ProductWalkthroughSection`
- `ModuleGrid` and `ModuleCard`
- `IntegrationSection`
- `AIConciergeSection`
- `CapabilitiesSection`
- `MarketplaceIntro` / `MarketplaceCategoryGrid`
- `FAQSection`
- `DemoRequestDialog` / `MarketplaceInterestDialog`
- `ContactForm` / `SiteFooter`

Keep each component presentational where possible. Move data submission into service functions, not click handlers.

## 3. Suggested target architecture

For a React/Next.js stack, a portable layout could be:

```text
src/
  app/ or routes/             # Routing and page composition
  components/
    layout/                   # Header, footer, navigation
    sections/                 # Landing-page sections
    ui/                       # Buttons, dialogs, inputs
  content/                    # FAQs, modules, marketplace data
  lib/                         # Small framework-agnostic utilities
  services/                    # API clients (demo requests, contact, etc.)
  styles/                      # Tokens and global styles
  types/                       # Shared interfaces/types
```

This is a recommended future structure, not a claim that a backend or API already exists.

## 4. Replace preview-only form handlers

Create service interfaces such as `submitDemoRequest(data)`, `submitMarketplaceInterest(data)`, and `submitContactMessage(data)`. Initially these can call a server route or trusted form provider. Validate again on the server, protect against spam, and return explicit success/error states. Never expose private API keys in browser code.

## 5. Migrate incrementally

1. Set up the new framework and lint/format/type-check tools.
2. Copy the SVG brand asset and design tokens.
3. Rebuild the shared header, footer, buttons, inputs, and dialogs.
4. Convert page sections one at a time, matching the existing design.
5. Move repeated content into data files.
6. Replace DOM event listeners with framework state and lifecycle patterns.
7. Connect forms through a service/API layer.
8. Add tests, accessibility checks, SEO, monitoring, and deployment previews.
9. Compare the new build against the current static version before switching traffic.

## 6. Production-quality checks

- HTML validity and accessible names/focus management
- Responsive layouts and reduced-motion support
- Form validation, server-side validation, rate limiting and spam controls
- Error and loading states, not only success messages
- Automated tests for navigation, dialogs, and form flows
- Content security and dependency updates
- Performance budgets, optimized media, metadata and sitemap

“Production-ready” here means the code is organized as a maintainable static foundation. It is not launch-ready for real submissions until the integrations and operational checks above are completed.
