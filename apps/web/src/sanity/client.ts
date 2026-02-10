import { createClient } from 'next-sanity';
import { DATASET, PROJECT_ID, SANITY_STUDIO_URL } from './env';

/**
 * Sanity
 */
export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2025-02-19',
  useCdn: true,
  stega: {
    enabled: true,
    studioUrl: SANITY_STUDIO_URL,
  },
});
