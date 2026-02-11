import {defineArrayMember, defineField, defineType} from 'sanity'
import {slugify} from '../helpers/slugify'

export const course = defineType({
  type: 'document',
  name: 'course',
  title: 'Kurs',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Tittel',
      description: 'Tittelen på kurset',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      description:
        'Vi bruker dette feltet for å lage URL-er for kursene. Det bør være unikt og basert på kursets tittel.',
      options: {
        source: 'title',
        slugify: (input) => slugify(input),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'introduction',
      description:
        'Her kan du skrive en introduksjon til kurset. Det kan inneholde flere avsnitt og formatering.',
      of: [{type: 'block'}],
    }),
    defineField({
      type: 'array',
      name: 'modules',
      title: 'Moduler',
      description: 'Modulene som inngår i kurset',
      of: [defineArrayMember({type: 'reference', to: {type: 'module'}})],
    }),
    defineField({
      type: 'array',
      name: 'instructors',
      title: 'Instruktører',
      description: 'Instruktørene som underviser i kurset',
      of: [defineArrayMember({type: 'reference', to: {type: 'instructor'}})],
      validation: (rule) => rule.unique().error('En instruktør kan ikke legges til flere ganger'),
    }),
    defineField({
      type: 'array',
      name: 'feedback',
      title: 'Tilbakemeldinger',
      description: 'Tilbakemeldinger fra deltakere på kurset',
      of: [defineArrayMember({type: 'reference', to: {type: 'feedback'}})],
    }),
  ],
})
