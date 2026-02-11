export function urlResolver(slug: string | undefined, _type: string | undefined) {
  if (slug && _type === '') {
    return `/base/${slug}`;
  }

  return '/';
}
