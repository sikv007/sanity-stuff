import {defineCliConfig} from 'sanity/cli'
import {DATASET, PROJECT_ID} from './env'

export default defineCliConfig({
  api: {
    projectId: PROJECT_ID,
    dataset: DATASET,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  typegen: {
    schema: 'schema.json',
    path: '../web/src/**/*.{tsx,ts}',
    generates: '../web/src/sanity/types.ts',
    overloadClientMethods: true,
  },
})
