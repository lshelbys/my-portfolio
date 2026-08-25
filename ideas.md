# Reference-driven design brief

## Ground-truth reference

The website should closely follow the visual language and interaction model of the provided repository at [niladri-1/Personal-portfolio](https://github.com/niladri-1/Personal-portfolio). The reference is a dark, technical, developer-first portfolio with a 3D/WebGL-inspired atmosphere, a compact navigation bar, high-contrast typography, interactive project and skill sections, and responsive behavior. The new portfolio keeps that overall design DNA while replacing the identity, copy, projects, skills, and links with a Systems Engineering student profile.

## Chosen direction: Midnight Systems Lab

### Design Movement
Contemporary digital brutalism with editorial systems-design cues: monochrome surfaces, electric cyan instrumentation, thin ruled lines, compact metadata, and a sense of an operating interface rather than a marketing landing page.

### Core Principles
1. **System-first hierarchy:** use labels, coordinates, section IDs, and metadata to make the page feel engineered and intentional.
2. **Dark depth with measured signal:** near-black surfaces create focus, while one vivid cyan accent highlights active states and calls to action.
3. **Asymmetric editorial composition:** offset columns, split hero structure, and floating data cards replace a generic centered marketing layout.
4. **Readable technical warmth:** display typography is assertive and condensed; body text remains calm and accessible.

### Color Philosophy
The palette is anchored in graphite black and blue-black surfaces to evoke control rooms, terminals, and late-night build sessions. Warm gray text keeps long-form reading comfortable, while cyan is reserved for system status, links, hover states, and moments of forward motion. The signature brand color is **Signal Cyan** `#8FF3E4`, a luminous but disciplined green-blue that feels like a live telemetry indicator rather than decoration.

### Layout Paradigm
A full-height hero introduces the student as an operator of complex systems. A thin persistent top rail anchors navigation; sections use staggered columns and framed cards. The work section is a two-column project index with one dominant project block and smaller supporting entries. About and contact become a split field report, with the contact action treated like an outbound system command.

### Signature Elements
- Small monospace system labels such as `SYS / 01`, `STATUS: AVAILABLE`, and `KUWAIT / UTC+3`.
- Fine-line frames and hairline dividers with cyan active-state markers.
- A subtle animated telemetry grid / node field behind the hero, with no heavy glow or visual noise.

### Interaction Philosophy
Interactions should feel like instrument feedback: links brighten and shift by a few pixels, cards lift slightly with a crisp border response, and navigation state updates through a cyan signal bar. All interactions must remain keyboard accessible and respect reduced motion preferences.

### Animation
Use short, deliberate transitions under 300ms with a strong ease-out. Hero elements enter with a staggered fade-and-translate, the telemetry field drifts slowly, and project cards reveal metadata on hover. Avoid attention-grabbing loops; motion should suggest a live system, not a slideshow.

### Typography System
Use `Space Grotesk` for display headings and `IBM Plex Mono` for labels, metadata, buttons, and code-like details. Body copy uses `Space Grotesk` at a relaxed line height. Headings are large, tight, and mostly lowercase/short sentence case; labels are uppercase with expanded tracking.

### Brand Essence
A Systems Engineering student building reliable interfaces, connected prototypes, and useful software from first principles. Personality: **curious, methodical, quietly bold**.

### Brand Voice
Headlines are direct and specific; CTAs sound like an invitation to inspect or collaborate, not generic conversion copy. Microcopy is concise, calm, and lightly technical.

Example lines:
- “I turn messy requirements into systems that hold together.”
- “Open the build log”

### Wordmark & Logo
Use a compact monogram mark built from three stacked cyan bars and a cut-out central node, suggesting signal flow through a system. The wordmark is the user's name set in Space Grotesk with a small `SYS` prefix; the mark also appears as the favicon and a visible header symbol.

### Signature Brand Color
**Signal Cyan — `#8FF3E4`**. Use it sparingly for active status, links, thin rules, and interactive emphasis so it remains ownable and legible.

### Content assumptions
Until the user supplies personal details, use a flexible student profile with editable placeholder-safe content: Systems Engineering student based in Kuwait, focused on software, automation, infrastructure thinking, and practical prototypes. Do not invent employers, awards, testimonials, or unverifiable achievements.

## Style Decisions

- Fidelity to the reference repository's dark technical portfolio format takes priority over generic landing-page conventions.
- Keep the interface visually dense in metadata but generous in reading space.
- Avoid purple gradients, excessive rounded cards, stock-photo dependence, and generic filler copy.
- Treat the hero background asset as a systems visualization, not a photographic portrait.
