# Week 4 Task Report — Frontend Performance Optimization Challenge

## Objective
Build a responsive frontend page, identify performance bottlenecks, apply targeted optimizations, and document a repeatable before/after measurement process.

## Project summary
SwiftSite is a small landing page implemented with semantic HTML, CSS, and vanilla JavaScript. The `baseline/` and `optimized/` variants are included to make comparison reproducible.

## Baseline inspection: identified risks
- Baseline JavaScript is loaded without `defer`, which can block HTML parsing while the browser fetches and executes it.
- Baseline mobile navigation changes inline styles and does not expose its expanded state to assistive technology.
- The baseline does not preload or prioritize the main hero illustration.
- Baseline CSS and JavaScript are readable, unminified source files.
- A static project does not configure production cache or compression headers.

These are source-code observations, not Lighthouse findings. No Lighthouse score is claimed because an actual browser audit has not been performed during file generation.

## Optimizations implemented
1. **Deferred JavaScript:** optimized `script.min.js` uses `defer` to avoid parser-blocking execution.
2. **Prioritized hero asset:** the SVG is preloaded and marked `fetchpriority="high"` because it is the primary above-the-fold visual.
3. **Lightweight vector art:** local SVG avoids a large raster image; explicit width and height reserve layout space.
4. **Compact assets:** optimized CSS and JavaScript are compact/minified compared with baseline source.
5. **Small dependency footprint:** no third-party UI framework or runtime is required.
6. **Responsive layout:** grid collapses to one column on small screens; navigation becomes a toggleable mobile menu.
7. **More robust interaction:** menu state is exposed with `aria-expanded`; Escape closes the menu and returns focus to the toggle; selecting a navigation link closes it.
8. **Reduced motion:** `prefers-reduced-motion` disables smooth scrolling and minimizes transition/animation durations.
9. **Production caching recommendation:** enable Brotli/gzip and long-lived caching for versioned assets at the server/CDN. Static HTML alone cannot guarantee these headers.

## Before-and-after evidence

| Check | Baseline | Optimized | Evidence |
|---|---|---|---|
| JavaScript loading | No `defer`; script at end of body | Deferred script in document head | Verified by source inspection |
| Hero priority | No preload or fetch priority | Preload and high fetch priority | Verified by source inspection |
| CSS/JS files | Readable source | Compact CSS and JS | Verified by source inspection |
| Menu behaviour | Inline display toggle | ARIA expanded state, Escape handling, focus return | Source inspected; browser test still required |
| Lighthouse Performance | Not measured | Not measured | Run audit to populate |
| LCP / CLS / TBT | Not measured | Not measured | Run audit to populate |
| Transfer size | Not measured | Not measured | Use DevTools Network panel |

## Actual test record — complete after running tests

| Test | Procedure | Expected result | Actual observed result |
|---|---|---|---|
| Desktop Lighthouse | Run both variants at same desktop profile | Comparable scores under same conditions | To be recorded |
| Mobile Lighthouse | Run both variants with same mobile profile | Record Performance, LCP, CLS, TBT | To be recorded |
| Mobile menu | At 390px, activate toggle | Menu opens; `aria-expanded=true` | To be recorded |
| Escape key | Open menu and press Escape | Menu closes and focus returns to toggle | To be recorded |
| Navigation link | Open menu and select link | Scrolls to section and closes menu | To be recorded |
| Layout shift | Reload and observe hero image | Reserved dimensions avoid image-caused jump | To be recorded |
| Console | Inspect DevTools Console after interaction | No uncaught JavaScript errors | To be recorded |

## Reproducible measurement method
1. From the project root, run `python -m http.server 8000`.
2. Open `http://localhost:8000/baseline/` in Chrome.
3. Open DevTools → Lighthouse, choose the Mobile profile, and run an audit.
4. Repeat at `http://localhost:8000/optimized/` using identical settings.
5. Repeat each run three times and compare median Performance score, LCP, CLS, TBT, and transfer size.
6. Keep browser version, viewport, throttling, device profile, and cache conditions consistent.
7. Manually run the interaction tests and enter observed results. For a deployed site, use PageSpeed Insights and record URL and date.

## Challenges and limitations
Lighthouse results vary with device emulation, browser version, machine load, and cache state. A local server cannot demonstrate production cache headers, CDN behaviour, or field Core Web Vitals. The page uses lightweight SVG artwork, so image-size gains are intentionally modest. The report does not invent before/after scores.

## Conclusion
The optimized implementation demonstrates deferred JavaScript, prioritized hero artwork, compact local assets, responsive layout, a small dependency footprint, and reduced-motion support. Quantitative conclusions must be based on actual Lighthouse/DevTools measurements recorded using the procedure above.
