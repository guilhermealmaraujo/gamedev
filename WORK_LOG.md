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

Clarify the author's contribution to Fort Knucklebone by comparing the published reference with session preparation, and reconstruct what happened at the table. This analysis will help define the first case study.

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
