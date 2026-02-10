import { createImageUrlBuilder, SanityImageSource } from '@sanity/image-url';
import { client } from './client';

const builder = createImageUrlBuilder(client);

/**
 * Helper to return a url based on a Sanity Image Source
 * @param source Sanity Image Source (any image queried from Sanity documents)
 * @returns
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
