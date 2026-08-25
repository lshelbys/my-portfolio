# GitHub Pages deployment fix checklist

- [ ] Inspect the repository's Pages workflow, package scripts, and current GitHub Actions runs.
- [ ] Confirm why GitHub Pages is serving README content instead of the built site.
- [ ] Correct the workflow, Pages artifact, and repository build configuration.
- [ ] Verify the production output contains the portfolio entrypoint and expected assets.
- [ ] Push the correction to `lshelbys/my-portfolio` and confirm the workflow starts successfully.
- [ ] Report any remaining one-time Pages setting or propagation delay to the user.
