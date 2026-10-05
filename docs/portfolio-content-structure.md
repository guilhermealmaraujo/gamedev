# Portfolio content structure

Date: 5 October 2026
Status: Approved as a starting structure on 5 October 2026. Case-study wording and final evidence selection remain drafts.

## Content hierarchy

The homepage presents two projects: Avernus and Stormwreck. A project overview describes the scope, role, contribution and current status. A case study explains a specific design challenge through decisions and evidence. Supporting artifacts belong inside these explanations rather than forming an unstructured archive.

```text
Homepage
  Avernus project
    Featured case: From Character Backgrounds to Quests
      Personal motivations and campaign goals
      Quest connections and regional needs
      Clue placement and revelation sequence
      Planned pacing and reported play
      Reflection and source attribution
      Supporting example: Cassius Burgal
      Supporting example: Illyria's house
      Supporting example: Elentir's leadership succession
    Exploration and hexcrawl development
  Stormwreck project
    Exploration and encounter design
    Unreal implementation and demonstration
  About, resume and contact
```

Begin with one substantial Avernus case study containing the supporting examples. Create separate example pages only when the material and reading length justify them. Fort Knucklebone can appear where it continues a character arc; it is no longer the default first case. Stormwreck's detailed outline awaits comparable implementation review.

## Avernus project overview

- Identify the published D&D adventure and explain the adaptation scope.
- Describe the author's role as DM and campaign adapter, and identify player-supplied backgrounds.
- Explain the central approach: connect character motivations to investigation and campaign objectives.
- State the play boundary: the party reached Fort Knucklebone; post-fort exploration remains unplayed, and the hexcrawl is in development.
- Link to the featured narrative/quest case and the exploration work.

## Featured case outline

Working title: **Avernus — From Character Backgrounds to Quests**.

1. **Context and design goal.** Explain how personal stories informed the campaign adaptation. Do not invent a retrospective rationale; confirm why the author made individual decisions.
2. **Background to playable objective.** Use selected characters to trace the original motivation, added campaign connection, clue, objective and possible decision. Cover the strongest examples rather than seven full biographies. Seraphiel's current file supplies appearance only.
3. **Connected quests and regional needs.** Show how personal objectives intersect with the published city's defense, allies, supplies and main investigation. Use a compact relationship diagram with supplied and adapted elements identified.
4. **Clues and revelations.** Explain Cassius's replacement of Klim Jhasso and the liquid-metal watch; explain distinct interaction triggers at Illyria's house. Distinguish conditional information access from genuinely different quest outcomes.
5. **Sequence and pacing.** Map the intended order and spacing of revelations, encounters and quieter scenes. Session estimates demonstrate planning, not successful pacing. Compare intended and reported sequence where records permit it; identify constrained historical scenes honestly.
6. **At the table.** Pair preparation with excerpts attributed to player recaps, including Cassius's revelations and Elentir's succession. Literary reconstructions are supplementary evidence and do not establish exact dialogue or player reactions.
7. **Reflection.** Include a documented revision where available, remaining source/continuity questions, and what the author would change. Do not claim feedback-driven iteration without a before/after example.
8. **Selected evidence and credits.** Present short edited excerpts, a quest brief and diagrams. Credit the published adventure, player backgrounds/recaps, external material and any AI writing assistance. Keep the original archive local.

## Publication boundaries

Each example must distinguish published source, player input, author adaptation, preparation and reported play. Prepared cross-location consequences are not tested results. Engine implementation claims require a verified demonstration or code review. Do not publish the adventure PDF or raw mixed-source novel packets.

## Next content task

Start with Illyria's house as the first detailed example, followed by Fort Knucklebone. The user explicitly deferred Cassius; retain its research for later. A standalone preview in `reference-material/prototypes/illyria-house.html` pairs interaction triggers with competencies and evidence. Distinguish the four indoor personal interactions from Elentir's approach encounter and the group vision. Drafts must not imply every character received a separate interaction inside the house or that every prepared clue was encountered.

## Integrated navigation update

The user subsequently requested both detailed cases inside the website (DEC-007). The current routes are `#avernus`, `#illyria` and `#cassius`, with reciprocal case/project links. Content is stored in `pages/avernus/` as HTML fragments; `app.js` handles navigation and loading. Fort Knucklebone, Hellturel region design and exploration/hexcrawl are future-content entries; `#knucklebone` remains an accurate preparation notice for existing links. The homepage retains the two projects, and Stormwreck is unchanged. Each case supplies its own campaign context and only the character information needed to understand the design.
