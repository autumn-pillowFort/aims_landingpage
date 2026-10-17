# AIMS Hospitality Management System — landing page

This is a cleaned, framework-independent version of the current AIMS marketing site. It preserves the existing page design while separating markup, styling, and behaviour so the code is easier to review and migrate.

## Project structure

```text
aims-production-ready/
├── index.html                 # Semantic page structure and content
├── assets/
│   ├── css/styles.css          # Design tokens, layout, components, responsive rules
│   ├── js/main.js              # Navigation, dialogs, forms, reveal animations
│   └── images/aims-mark.svg    # Editable vector brand mark
└── docs/
    └── STACK-MIGRATION.md     # Suggested migration path
```

## Run locally

Because this version uses plain HTML, CSS, and JavaScript, open `index.html` in a browser or serve this folder with any static file server. No build step or framework is required.

## Before production launch

- Replace the mock dashboard and product-video placeholders with approved product media.
- Connect demo, marketplace-interest, and contact forms to a real backend/CRM/email service; current handlers only show preview confirmation messages.
- Add server-side validation, spam protection, consent/privacy copy, and a published privacy policy before collecting personal data.
- Review analytics, SEO metadata, social share metadata, image optimization, accessibility, and browser testing.
- Confirm product availability claims and integrations before publishing.
- Configure deployment previews and a production domain; this folder itself is not deployed.

## Design principles

- Content is kept in HTML rather than mixed into interaction code.
- Styles and scripts are external files.
- The UI does not depend on a framework, router, state library, or backend.
- The vector logo is an independent SVG asset and can be used in a header, favicon workflow, or app shell.
