import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../sanity/live';

export async function getCourses() {
  const courses = defineQuery(`
    *[_type == "course"]
    {
      _id,
      title,
      instructors[]->{
        _id,
        firstName,
        lastName,
        slug,
        image,
      },
  }`);

  const { data } = await sanityFetch({ query: courses });

  return data;
}
