# Portfolio layout prototype

Initial responsive layout for Guilherme Araújo's RPG and systems design portfolio. The visual direction is approved as a starting point (DEC-003); case study content is still preliminary.

The website lives at the repository root: `index.html`, `styles.css`, `app.js`, and `assets/`. The site includes the homepage, Avernus and Stormwreck project overviews, and contextualized Illyria and Cassius case studies through hash navigation. Fort Knucklebone is the next case in preparation. It requires no dependencies or build step. Preview only these public files with a static HTTP server; do not expose the local `reference-material/` archive.

The visual direction uses dark charcoal, bronze accents, serif headings, cartographic imagery, and restrained project-specific colors. Reference images support design discussion; final publication requires confirmed attribution. Case study copy is preliminary. Playtest outcomes and prototype implementation are not inferred from preparation documents.

## GitHub Pages

In the repository's **Settings > Pages**, set **Build and deployment > Source** to **Deploy from a branch**. Select branch **main**, folder **/ (root)**, and click **Save**.

GitHub Pages publishes the committed files from the root of `main`. Future pushes update the site automatically. The `.nojekyll` file disables Jekyll processing for this plain static website; no custom deployment workflow is needed. Relative asset links support the repository path `/gamedev/`. With the current repository name and no custom domain, the expected address is `https://guilhermealmaraujo.github.io/gamedev/`.

GitHub Free requires a public repository for Pages; supported paid plans also allow private source repositories. A successful deployment must be confirmed in Actions before treating the expected address as live.

## Content organization

`index.html` contains the shared shell and homepage. `app.js` handles hash navigation and loads HTML content from `pages/`; it does not contain case-study markup. `styles.css` provides shared styling.

```text
pages/
  avernus/
    index.html
    illyria-house.html
    cassius-burgal.html
    fort-knucklebone.html
  stormwreck/
    index.html
```

These are HTML fragments rendered inside the shared page, not standalone documents. Their relative links resolve from the root `index.html`. To add content, create a fragment in the relevant project folder, register its path and title in `app.js`, and link to its hash route from the project overview.

Run the site through a local HTTP server: fetching page fragments may be blocked when opening `index.html` directly with `file://`. GitHub Pages serves them normally without a build step.

Earlier prototypes are stored locally in `reference-material/prototypes/`, which is ignored by Git. They are not part of the website source or deployment.
