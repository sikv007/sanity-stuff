import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {DATASET, PROJECT_ID} from './env'
import {nbNOLocale} from '@sanity/locale-nb-no'
import {media} from 'sanity-plugin-media'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'Sanity Stuff',

  projectId: PROJECT_ID,
  dataset: DATASET,

  plugins: [structureTool(), visionTool(), nbNOLocale(), media(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
})
