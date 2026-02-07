import {defineField, defineType} from 'sanity'
import {defaultSlugField} from './shared/slug'

export const courseModule = defineType({
  type: 'document',
  name: 'module',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defaultSlugField,
  ],
})
