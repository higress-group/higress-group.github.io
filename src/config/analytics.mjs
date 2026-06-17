// Single source of truth for the site's analytics configuration.
//
// Owned by the Higress maintainers (project-shared Google account); see
// cncf/sandbox#481 for the CNCF onboarding context.
//
// Used by:
//   - astro.config.mjs (head[] injection for Starlight-rendered docs pages)
//   - src/components/analytics/GoogleAnalytics.astro (for marketing/blog/etc.
//     pages rendered by src/layout/siteLayout.astro)
export const GA_MEASUREMENT_ID = "G-34NDHLSRQX";
