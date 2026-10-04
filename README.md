# Portfolio layout prototype

Initial responsive layout for Guilherme Araújo's RPG and systems design portfolio. The visual direction is approved as a starting point (DEC-003); case study content is still preliminary.

The website lives at the repository root: `index.html`, `styles.css`, `app.js`, and `assets/`. The prototype includes the homepage, project overviews, and an initial Fort Knucklebone case study through hash navigation. It requires no dependencies or build step. Preview only these public files with a static HTTP server; do not expose the local `reference-material/` archive.

The visual direction uses dark charcoal, bronze accents, serif headings, cartographic imagery, and restrained project-specific colors. Reference images support design discussion; final publication requires confirmed attribution. Case study copy is preliminary. Playtest outcomes and prototype implementation are not inferred from preparation documents.

## GitHub Pages

In the repository's **Settings > Pages**, set **Build and deployment > Source** to **Deploy from a branch**. Select branch **main**, folder **/ (root)**, and click **Save**.

GitHub Pages publishes the committed files from the root of `main`. Future pushes update the site automatically. The `.nojekyll` file disables Jekyll processing for this plain static website; no custom deployment workflow is needed. Relative asset links support the repository path `/gamedev/`. With the current repository name and no custom domain, the expected address is `https://guilhermealmaraujo.github.io/gamedev/`.

GitHub Free requires a public repository for Pages; supported paid plans also allow private source repositories. A successful deployment must be confirmed in Actions before treating the expected address as live.
