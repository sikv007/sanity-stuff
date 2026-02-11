import {defineField, defineType} from 'sanity'
import {defaultSlugField} from './shared/slug'

export const instructor = defineType({
  type: 'document',
  name: 'instructor',
  fields: [
    defineField({
      type: 'string',
      name: 'firstName',
    }),
    defineField({
      type: 'string',
      name: 'lastName',
    }),
    defaultSlugField,
  ],
})
