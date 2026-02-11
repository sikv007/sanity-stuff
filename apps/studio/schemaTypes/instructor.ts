import {defineField, defineType} from 'sanity'
import {slugify} from '../helpers/slugify'

export const instructor = defineType({
  type: 'document',
  name: 'instructor',
  title: 'Instruktør',
  fields: [
    defineField({
      type: 'string',
      name: 'firstName',
      title: 'Fornavn',
      description: 'Fornavnet på instruktøren',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'lastName',
      title: 'Etternavn',
      description: 'Etternavnet på instruktøren',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      description:
        'Vi bruker dette feltet for å lage URL-er for instruktørene. Det bør være unikt og basert på instruktørens navn.',
      options: {
        source: (doc) => `${doc.firstName} ${doc.lastName}`,
        slugify: (input) => slugify(input),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'email',
      title: 'E-post',
      description: 'E-postadressen til instruktøren',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      type: 'array',
      name: 'biography',
      title: 'Biografi',
      description:
        'Skriv en biografi for instruktøren. Det kan inneholde flere avsnitt og formatering.',
      of: [{type: 'block'}],
    }),
    defineField({
      type: 'array',
      name: 'skills',
      title: 'Ferdigheter',
      description: 'Ferdighetene til instruktøren',
      of: [{type: 'reference', to: {type: 'skill'}}],
      validation: (rule) => rule.unique(),
    }),
  ],
})
