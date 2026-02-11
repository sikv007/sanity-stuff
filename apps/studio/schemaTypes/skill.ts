import {defineField, defineType} from 'sanity'
import {slugify} from '../helpers/slugify'

export const skill = defineType({
  type: 'document',
  name: 'skill',
  title: 'Ferdighet',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The title of the skill',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title',
        slugify: (input) => slugify(input),
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
