import {defineField, defineType} from 'sanity'

export const feedback = defineType({
  type: 'document',
  name: 'feedback',
  title: 'Tilbakemelding',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
    }),
    defineField({
      type: 'number',
      name: 'score',
    }),
    defineField({
      type: 'text',
      name: 'content',
    }),
    defineField({
      type: 'boolean',
      name: 'approved',
      description: 'Om tilbakemeldingen er godkjent og kan vises på nettsiden',
    }),
  ],
})
