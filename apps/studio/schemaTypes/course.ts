import {defineArrayMember, defineField, defineType} from 'sanity'
import {defaultSlugField} from './shared/slug'

export const course = defineType({
  type: 'document',
  name: 'course',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defaultSlugField,
    defineField({
      type: 'array',
      name: 'modules',
      of: [defineArrayMember({type: 'reference', to: {type: 'module'}})],
    }),
    defineField({
      type: 'array',
      name: 'content',
      of: [{type: 'block'}],
    }),
  ],
})
