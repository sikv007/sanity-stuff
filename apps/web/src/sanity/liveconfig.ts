import { defineLive } from 'next-sanity/live';
import { client } from './client';
import { TOKEN } from './env';

export const { sanityFetch, SanityLive } = defineLive({ client, browserToken: TOKEN, serverToken: TOKEN });
