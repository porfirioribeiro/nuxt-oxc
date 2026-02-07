import { defineNuxtModule } from 'nuxt/kit';
import { setupOxlint } from './oxlint';

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'oxc-nuxt',
    configKey: 'oxc',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, nuxt) {
    setupOxlint(nuxt);
  },
});
