# Specification

## Summary
**Goal:** Build the “Ethical Bytes” multi-page marketing website with core company pages, a consistent non-blue/purple visual theme, brand imagery, and a working Contact Us form that stores inquiries in the backend.

**Planned changes:**
- Create top-level navigation and client-side routes for Home, About, Services, Pricing, and Contact Us, with a consistent header and footer across pages.
- Implement page content: About (mission/values + “How we work”), Services (Website Development, Website Design, Graphic Design + optional additional services), and Pricing (3+ tiers with CTAs to Contact Us).
- Build Contact Us form (name, email, optional company, service interest dropdown, message) with loading/success/error states and persistence via backend.
- Add backend Motoko support to store inquiries with timestamps and expose methods to create and list inquiries.
- Apply a coherent, accessible visual theme across the site (avoiding blue/purple as the primary palette) and include generated static brand images used on the Home page and in the header.

**User-visible outcome:** Visitors can navigate Ethical Bytes’ Home/About/Services/Pricing/Contact pages, view services and pricing tiers, and submit a contact inquiry that is saved and remains available after refresh.
