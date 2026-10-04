# Portfolio layout prototype

Initial responsive layout for Guilherme Araújo's RPG and systems design portfolio. The visual direction is approved as a starting point (DEC-003); case study content is still preliminary.

Serve `dist/` with a static HTTP server. The prototype includes the homepage, project overviews, and an initial Fort Knucklebone case study through hash navigation. It requires no dependencies or build step.

The visual direction uses dark charcoal, bronze accents, serif headings, cartographic imagery, and restrained project-specific colors. Reference images support design discussion; final publication requires confirmed attribution. Case study copy is preliminary. Playtest outcomes and prototype implementation are not inferred from preparation documents.

## GitHub Pages

In the repository's **Settings > Pages**, set **Build and deployment > Source** to **GitHub Actions**. Push the deployment workflow to `main`, or run **Deploy portfolio to GitHub Pages** manually from the Actions tab once the workflow is on GitHub.

The workflow publishes only `site/dist/`. Future pushes that change that directory automatically deploy the updated site. Relative asset links support the repository path `/gamedev/` without a build step. With the current repository name and no custom domain, the expected address is `https://guilhermealmaraujo.github.io/gamedev/`.

GitHub Free requires a public repository for Pages; supported paid plans also allow private source repositories. A successful deployment must be confirmed in Actions before treating the expected address as live.
