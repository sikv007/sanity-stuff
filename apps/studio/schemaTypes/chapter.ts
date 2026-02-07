import {defineField, defineType} from 'sanity'
import {defaultSlugField} from './shared/slug'

export const chapter = defineType({
  type: 'document',
  name: 'chapter',
  fields: [defaultSlugField, defineField({type: 'string', name: 'title'})],
})
