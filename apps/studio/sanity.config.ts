import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {DATASET, PROJECT_ID} from './env'

export default defineConfig({
  name: 'default',
  title: 'Sanity Stuff',

  projectId: PROJECT_ID,
  dataset: DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
