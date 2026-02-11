import {defineField, defineType} from 'sanity'
import {slugify} from '../helpers/slugify'

export const chapter = defineType({
  type: 'document',
  name: 'chapter',
  title: 'Kapittel',
  fields: [
    defineField({type: 'string', name: 'title'}),
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
