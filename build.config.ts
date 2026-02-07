import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/module.ts'],
  externals: ['@nuxt/kit', '@nuxt/schema', 'nuxt/kit', 'nuxt/schema'],
});
