/**
 * Helper function to get the value from a Sanity image hotspot.
 */
export default function getPositionFromHotspot(
  hotspot: { x?: number | undefined; y?: number | undefined } | undefined,
) {
  if (!hotspot || !hotspot.x || !hotspot.y) return 'center';

  return `${hotspot.x * 100}% ${hotspot.y * 100}%`;
}
