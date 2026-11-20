# Contributing public documentation

This repository contains only documentation that is ready to be public. Keep
changes focused on released behavior, and include the MDX, public assets, and
navigation metadata needed to render the page.

Do not add secrets, customer data, internal review discussion, release plans,
or unreleased functionality. Draft and review-stage material belongs in
`dome-docs-content-private` until an approved promotion PR copies the selected
files here.

Run `npm run check:public` before opening a pull request. The portal build pins
the reviewed commit, so a merged public-content PR is the auditable record of
what becomes public.
