import { SanityAsset } from '@sanity/image-url';
import { urlFor } from './image';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export function resolveOpenGraphImage(image: SanityAsset | '', width = 1200, height = 627): OpenGraph['images'] {
  if (!image) return;
  const url = urlFor(image)?.width(1200).height(627).auto('format').fit('crop').url();
  if (!url) return;
  return { url, alt: image?.alt as string, width, height };
}
