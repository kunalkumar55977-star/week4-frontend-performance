# Week 4 — Frontend Performance Optimization Challenge

SwiftSite is a responsive landing page built with semantic HTML, CSS, and vanilla JavaScript.

## Files
- `index.html`: semantic structure and resource hints
- `styles.min.css`: compact responsive styles
- `script.min.js`: navigation behaviour
- `assets/hero.svg`: local vector artwork
- `../baseline/`: comparison version
- `../performance-report.md`: detailed report and measurement procedure

## Run
From the project root run `python -m http.server 8000`, then visit `http://localhost:8000/optimized/` and `http://localhost:8000/baseline/`.

## Test
Test mobile navigation, Escape-to-close, link activation, narrow viewport overflow, and browser console. Run Lighthouse for both versions using identical settings. Record actual scores and timings in the report; do not treat unmeasured values as results.

## Techniques
Deferred JavaScript, prioritized hero SVG, explicit image dimensions, compact assets, a small dependency footprint, responsive CSS, reduced-motion support, and production caching/compression recommendations.
