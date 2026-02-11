import {defineField, defineType} from 'sanity'

export const learningTrack = defineType({
  type: 'document',
  name: 'learningTrack',
  title: 'Læringssti',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Tittel',
      description: 'Tittelen på læringsstien',
      validation: (rule) => rule.required(),
    }),
  ],
})
