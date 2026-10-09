# Game Development Portfolio Work Log

This document records approved decisions, their rationale, and subsequent revisions throughout the portfolio project. English is the official language for repository content. Working conversations may continue in Portuguese.

## Maintaining this log

- Each decision has an identifier, a date, and a status: active or superseded.
- Revisions are added as new entries referencing the previous decision. Previous entries remain as historical records.
- Unapproved proposals are explicitly identified as proposals.
- Original source materials remain in `reference-material/`, a local folder ignored by Git. This log and content prepared for the website can be versioned.

## DEC-001 — Initial website structure

**Date:** 4 October 2026  
**Status:** Active  
**Approval:** The user approved the structure in conversation and requested that it be recorded.  
**Scope:** Initial content architecture; subject to revision following curation.

### Decision

Organize the portfolio by project, with case studies within each project. The homepage provides a quick introduction, while project pages let visitors examine design decisions and supporting evidence in greater depth.

```text
Homepage
├── Introduction and specialization
├── Featured projects
└── Resume and contact

Avernus
├── Campaign overview and author's contribution
├── Fort Knucklebone: interactions and consequences
├── Hellturel: personal quests and region structure
└── Hexcrawl: exploration design

Stormwreck
├── Overview and current status
├── Exploration and encounter systems
└── Unreal prototype: design and implementation

About / Resume / Contact
```

These topics guide curation. They do not require a separate page for every topic or imply that all content is ready for publication.

### Case study format

1. Context and contribution: what came from reference materials and what the author developed or adapted.
2. Goal: the intended player experience.
3. Design: decisions, possible approaches, and consequences.
4. Concrete example: a quest, interaction, or system explained with visual support.
5. At the table or in the prototype: what happened during testing, where evidence is available.
6. Reflection: results, limitations, and potential improvements.

Original documents provide supporting evidence through selected excerpts and links where appropriate. The main content explains the work to visitors unfamiliar with the campaigns. Test results must not be inferred from session preparation alone.

### Rationale

- Demonstrate the author's reasoning and contribution through concrete examples.
- Support both quick browsing and deeper examination.
- Connect RPG design, systems design, and technical implementation across Avernus and Stormwreck.
- Support the RPG Designer application at Larian while remaining useful for other design and development applications.

### Initial curation direction

Start with approximately three well-developed case studies across Avernus and Stormwreck. Final selection and quantity depend on the assessment of available evidence.

### Open questions

- Final case study selection and priorities.
- Visual identity, detailed layout, and website technology.
- Public website language and any bilingual version; repository language is settled by DEC-002.
- Playtest evidence, authorship, and implementation status to confirm for each study.

## DEC-002 — Official repository language

**Date:** 4 October 2026  
**Status:** Active  
**Approval:** The user explicitly requested English as the official repository language and translation of this log.  
**Scope:** Content authored and maintained in the repository.

### Decision

Use English for repository documentation, decision records, and other newly authored text, including future code comments and commit messages. Working conversations may continue in Portuguese.

Original reference materials retain their original languages. Translate selected material when preparing it for repository content. The public website language remains a separate decision.

### Rationale

Keep repository content consistent and accessible to international collaborators and reviewers.

### Changes made

Translated this work log into English, preserving DEC-001 and its approved structure. Recorded the repository language policy as a separate decision rather than changing the scope of DEC-001.

## Next work

Develop the Avernus background-to-quest case from the source comparison, character backgrounds, session preparations and attributed player recaps. The current content outline is in `docs/portfolio-content-structure.md`. Fort Knucklebone analysis remains supporting research.

## Layout proposal — First visual prototype

**Date:** 4 October 2026  
**Status:** Proposal; awaiting user review. This is not an approved design decision.

Created a navigable layout prototype in `site/dist/`, with a homepage, Avernus and Stormwreck overviews, and an initial Fort Knucklebone case study.

The visual direction is a restrained design atlas: charcoal surfaces, bronze accents, serif headings, cartographic imagery, and a deep-blue exploration section. Content prioritizes project evidence and readable case studies. Initial copy is in English for review; the public language policy remains a separate decision.

The prototype uses selected reference images. Attribution and case study content must be finalized before public release. JavaScript syntax and local HTTP delivery were checked; the homepage was visually inspected at narrow and wide browser sizes, and the Avernus and Fort Knucklebone navigation was exercised.

## DEC-003 — Initial visual layout

**Date:** 4 October 2026  
**Status:** Active  
**Approval:** The user approved the initial layout as a starting point and requested a commit.  
**Scope:** Visual direction and navigable prototype described in the preceding layout proposal.

### Decision

Adopt the initial prototype as the starting point for the website: charcoal surfaces, bronze accents, serif headings, project imagery, and a restrained fantasy tone. Retain the homepage, project overviews, and case study presentation as the basis for further development.

The preceding proposal is retained as history and is now approved through this decision. Case study copy and attribution remain preliminary; this approval does not finalize the content or authorize public deployment. Future layout revisions will be recorded separately.

## DEC-004 — Root structure and branch-based publishing

**Date:** 4 October 2026
**Status:** Active
**Approval:** The user explicitly requested moving the website to the repository root and using Deploy from a branch.
**Scope:** Source organization and GitHub Pages publishing.

### Decision

Keep `index.html`, `styles.css`, `app.js`, and `assets/` at the repository root. Move the site README to the root, remove the custom Pages workflow, and add `.nojekyll` for plain static delivery. Configure GitHub Pages to publish from `main` and `/ (root)`.

This supersedes the prototype's `site/dist/` organization and the custom deployment workflow. Historical entries retain their original paths. The visual direction in DEC-003 remains active. Original reference materials remain local and ignored by Git.

### Rationale

The website has no build step. A root-level static layout keeps publishing straightforward and avoids an unnecessary output directory or custom workflow.

## DEC-005 — Avernus starting focus

**Date:** 5 October 2026

**Status:** Active

**Approval:** The user selected the background-to-quest topic, retained Avernus and Stormwreck as the two projects, and requested a revised evidence-based structure.

**Scope:** Editorial starting focus; the detailed outline remains a working proposal.

### Decision

Retain the project-based architecture from DEC-001. Start Avernus with a featured case study about adapting character backgrounds into connected narrative and quest content. Cassius, Illyria's house and Elentir's succession are candidate supporting examples within that case, rather than automatically separate pages. This replaces Fort Knucklebone as the initial editorial priority; it does not discard its research or the exploration/hexcrawl work.

### Working proposal

`docs/portfolio-content-structure.md` describes the proposed project overview, case sections, evidence formats and publication boundaries. These details are open for review and are not presented as individually approved decisions. No website implementation or publication is included in this revision.

### Structure review and editorial preview

The user approved the proposed structure and requested a text/visual preview. The content hierarchy and case outline in `docs/portfolio-content-structure.md` are now approved as a starting point. Individual wording and evidence selection remain drafts. A standalone preview is available in `previews/avernus-backgrounds.html`, with relationship and revelation-sequence diagrams. It does not replace the existing website pages. Browser verification could not be completed because the integrated browser could not reach the local server.

## DEC-006 — Detailed case priority

**Date:** 5 October 2026

**Status:** Active

**Approval:** The user requested Illyria's house first, Fort Knucklebone next, and Cassius later.

### Decision

Keep the wider background-to-quest approach from DEC-005. Prioritize Illyria's house as its first detailed example, followed by Fort Knucklebone. Defer Cassius. This supersedes the earlier recommended example order, not the two-project architecture.

### Preview

Created `previews/illyria-house.html` as a standalone editorial preview with an interaction map, explicit competency explanations, a preparation/recap evidence table and a revelation sequence. It distinguishes planned content from reported play and identifies Elentir's encounter as part of the approach. Copy remains for review; no production page was replaced or deployment performed.

## DEC-007 — Integrate contextualized case studies

**Date:** 5 October 2026

**Status:** Active

**Approval:** The user approved self-contained case context and requested both Illyria and Cassius inside the website.

### Decision and implementation

Add Illyria and Cassius as detailed studies under the Avernus project, each with campaign context, relevant character descriptions, explicit competencies, interaction diagrams and preparation/recap comparisons. The Avernus overview introduces the shared background-to-quest approach and provides the route to future content. This authorizes Cassius integration now, revising its deferred status in DEC-006. Fort Knucklebone remains the next content-development priority.

Replaced the superseded Fort prototype's unsupported originality claims with an accurate case-in-preparation page. Preserve its existing hash route. Future region and hexcrawl content appears as non-clickable preparation/development entries until ready. No commit, push or deployment is included.

## Prototype folder clarification

Renamed `previews/` to `prototypes/` to distinguish earlier standalone drafts from the integrated pages in `app.js`. Historical entries retain their original paths. Relative links within the prototypes remain valid.

## DEC-008 — Separate HTML content from navigation

**Date:** 5 October 2026

**Status:** Active

**Approval:** The user requested a dedicated folder for HTML content and excluded prototypes from the repository.

### Decision

Move project and case-study markup into HTML fragments under `pages/avernus/` and `pages/stormwreck/`. Keep the homepage/shared shell in `index.html` and navigation, loading, caching and failure handling in `app.js`. Preserve existing hash routes and root-relative content conventions for GitHub Pages at `/gamedev/`.

Move standalone prototypes into the already ignored local archive at `reference-material/prototypes/`. Historical log entries preserve prior paths. This supersedes the earlier JavaScript-embedded content and tracked-folder proposal.

## Stormwreck document review and project presentation

**Date:** 9 October 2026

Reviewed the text and tables of `Conception of Exploration on Stormwreck Isle 1.2.docx`. Updated the Stormwreck overview with separate design-document and early Unreal entries. Added a design breakdown covering regional structure, travel pace/activities, hazards across exploration/combat and contextual encounter generation. Documented incomplete specifications and example inconsistencies without claiming tested balance. The prototype overview explicitly awaits repository review and demonstration before implementation claims. No commit or deployment performed.
