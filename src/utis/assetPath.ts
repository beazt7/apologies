/**
 * Resolves a root-relative public asset path (e.g. "/images/photo.jpg") against
 * the app's configured base path, so it still works when deployed under a
 * subpath such as GitHub Pages' "/<repo-name>/" instead of only at the domain root.
 */
export function resolveAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
