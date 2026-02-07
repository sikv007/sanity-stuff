import {defineField} from 'sanity'

export const defaultSlugField = defineField({
  type: 'slug',
  name: 'slug',
  options: {
    source: 'title',
    slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
  },
  validation: (rule) => rule.required(),
})
