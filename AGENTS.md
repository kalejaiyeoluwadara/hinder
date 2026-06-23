<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Hinder Application Guidelines

Hinder is a satirical, interactive web platform for single people to "hate on" annoying couples, vent about their couple posts, and "destroy their relationships" via Hinder community features.

## UI Design & Aesthetics

Based on the designs and mockups:
- **Mobile-first Focus**: The UI is optimized to look like a mobile application. It should be centered in the viewport on desktop screens with a maximum width (e.g., `max-w-md` or `max-w-sm`), styling like a phone screen layout.
- **Color Palette**:
  - **Primary Action (Dark Red)**: Use deep crimson/dark red (e.g. `#8B0000` / `bg-red-950` / a custom HSL red like `hsl(0, 100%, 27%)`) for primary buttons ("Hate on their relationship").
  - **Secondary Actions (Light Pink/Red)**: Use light pink (e.g., `#ffebe6`) with red text (e.g., `#cc3333`) for secondary items like the "+ Add comment" button.
  - **Hate Badge**: Overlay badges on images showing the number of hates (e.g., "20 hates") - white background pill with black text.
  - **Base Backgrounds**: Use off-white/light gray (`bg-zinc-50` / `bg-zinc-100`) for the application background, and pure white (`bg-white`) or black (`dark:bg-black`) for main screens, cards, and container panels.
- **Component Layouts**:
  - **Cards**: Large, rounded couple images (using `rounded-2xl` or `rounded-3xl` or custom rounded styles) with overlay badges and clear social actions.
  - **Pill Buttons**: Rounded pill-style buttons (`rounded-full`) for CTA actions and comment tags.
  - **Typography**: Modern, readable, clean sans-serif typeface (like Geist Sans).

## Next.js & Technical Conventions

- **Version Matching**: Using Next.js v16.2.9 with React 19.
- **Styling**: Tailwind CSS v4.0 is active. Note that Tailwind v4.0 uses modern directives like `@theme` instead of Tailwind v3 configuration files.
- **Documentation**: ALWAYS consult version-matched documentation in [node_modules/next/dist/docs/](file:///Users/user/Desktop/space/hinder/node_modules/next/dist/docs/) before writing code or routing logic.

