# Taste
- Writes requests in romanized Bengali (Banglish) mixed with English (e.g., "image er niche ei rokom text hobey"), often terse and action-oriented ("fix it"). Confidence: 0.7
- Points at a concrete snippet/selection and asks for it to be fixed or changed in place, rather than describing the desired change abstractly. Confidence: 0.6
- Prefers extending existing components/sections and data structures in place over introducing new UI — explicitly rejects new sections/components ("no need new ui") and expects new content merged into the existing grid/list (e.g., reusing the existing card component with a graceful fallback rather than a separate showcase block). Confidence: 0.7
- Prefers new UI elements to mirror styles already used elsewhere in the codebase (e.g., make one button's hover match another existing button) instead of inventing new styling. Confidence: 0.65
- Works in Next.js App Router + Tailwind CSS projects structured with per-route client components (e.g., `XxxPageClient.tsx`). Confidence: 0.6
- Hands-on with the codebase: edits source/data files directly between prompts, so re-read a file before editing it and preserve those manual changes rather than reverting or re-adding removed entries. Confidence: 0.5
- Expects finished work to be committed and pushed to the remote, requested with terse phrases like "code commit and push" (commits on `main` and pushes to `origin`). Confidence: 0.6
- Cares about whether UI looks "professional"; flags visual clutter (e.g., two stacked floating action buttons with duplicate glow/pulse animations) as amateur and wants it cleaned up into a single, conventionally-designed element. Confidence: 0.6
ional"; flags visual clutter (e.g., two stacked floating action buttons with duplicate glow/pulse animations) as amateur and wants it cleaned up into a single, conventionally-designed element. Confidence: 0.6
