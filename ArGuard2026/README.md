# ArGuard GitHub Pages Site

This directory hosts the ArGuard shared task website at <https://araieval.github.io/ArGuard2026/>.

ArGuard is the ArabicNLP 2026 shared task on harmful content detection in Arabic memes and LLM prompts.

The overview page source is `index.md`. Task detail pages are `task1.md` and `task2.md`. Page metadata and copy live in front matter, shared page structure lives in `_layouts/arguard.html` and `_layouts/arguard-task.html`, and repeated content such as tracks, tables, timeline, resources, and organizers lives in `_data/ArGuard2026/*.yml`.

## Local Preview

```bash
cd ..
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000/ArGuard2026/>.

## Publishing

The site is published as a subpage of the ArAIEval GitHub Pages repository.
