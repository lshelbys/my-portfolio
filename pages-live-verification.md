# GitHub Pages live verification

Source repository: https://github.com/lshelbys/my-portfolio

Requested URL: https://lshelbys.github.io/my-portfolio/

The GitHub Pages URL redirects to the configured custom domain `https://shelbys.dev/`. After the root static artifact was pushed and the legacy Pages build completed successfully, a cache-busted browser visit rendered the actual dark portfolio instead of the README.

Verified live content includes the `shelbys` identity, Systems Engineering hero, `info@shelbys.dev`, navigation, About, Education, Experience, Skills, Projects, Certificates, and Contact routes. The extracted navigation uses hash routes such as `#/about` and `#/projects`, confirming the GitHub Pages fallback behavior is working.

The root artifact contains `index.html`, `404.html`, and compiled `assets/` files, while the repository also retains the source tree and Pages workflow for future updates.


## Latest check

The live home page and Certificates route are updated, but the live Education route shows the AUK image as unavailable. The hash route resolves the image reference as `./assets/media/auk-campus.jpeg`, so the deployed root asset path needs an additional check and correction before this update is considered complete.


## Final content update verification

The latest Pages deployment for commit `52c3fbb` completed successfully. The public file `https://shelbys.dev/media/auk-campus.jpeg` returns HTTP 200 as a JPEG, and the live Education route contains exactly one AUK entry with no secondary education. The live Certificates route contains one Amazon Web Services (AWS) Certification entry marked In progress.


## Certificates route issue

A cache-busted browser visit to `https://shelbys.dev/#/certificates?v=52c3fbb-final` displayed the generic ErrorBoundary message instead of the single AWS card. The browser console view did not expose a client error, so the route needs a direct no-query reload and live bundle check before final delivery.


## Certificates bundle trace

The live root bundle references `assets/Certificates-J-oI4fZN.js`, which is served with HTTP 200. That module imports `./index-CjHMaB94.js`, `./ScrollAnimation-BrSETphS.js`, `./calendar-CQ90jJNE.js`, and `./external-link-B86KhYW0.js`. The module includes the single AWS in-progress card. The browser route still hit the ErrorBoundary, so the next check should validate the imported dependency URLs and runtime module loading rather than the card content itself.


## Runtime import check

The live `Certificates-J-oI4fZN.js` module and its shared dependencies return HTTP 200, and a direct browser dynamic import resolves successfully. This narrows the public ErrorBoundary issue to route rendering or browser state rather than a missing or syntactically invalid deployed module.


## Fresh-load verification

Fresh document loads with the query before the hash route now render both requested pages correctly. Certificates shows one Amazon Web Services (AWS) Certification card marked In progress. Education shows one AUK card, and the supplied campus image loads from `https://shelbys.dev/media/auk-campus.jpeg`.
