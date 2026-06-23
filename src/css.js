/**
 * Parse an inline CSS string into a React style object.
 *
 * The source design was authored as inline `style="..."` strings, so this
 * lets us port the markup with high visual fidelity instead of hand-rewriting
 * every declaration as a camelCased object.
 *
 *   css("display:flex;gap:8px;color:var(--text-primary)")
 *     -> { display: "flex", gap: "8px", color: "var(--text-primary)" }
 *
 * Rules:
 *  - Custom properties (`--x`) are passed through untouched.
 *  - Vendor-prefixed and kebab-case properties are camelCased
 *    (`-webkit-text-fill-color` -> `WebkitTextFillColor`, `stroke-width` -> `strokeWidth`).
 */
export default function css(str) {
  const out = {}
  if (!str) return out
  for (const decl of str.split(';')) {
    const i = decl.indexOf(':')
    if (i < 0) continue
    const prop = decl.slice(0, i).trim()
    const val = decl.slice(i + 1).trim()
    if (!prop) continue
    if (prop.startsWith('--')) {
      out[prop] = val
      continue
    }
    const key = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    out[key] = val
  }
  return out
}
