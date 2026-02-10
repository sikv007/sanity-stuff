import {defineField, defineType} from 'sanity'
import {defaultSlugField} from './shared/slug'

export const chapter = defineType({
  type: 'document',
  name: 'chapter',
  fields: [
    defaultSlugField,
    defineField({type: 'string', name: 'title'}),
    defineField({
      type: 'image',
      name: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
