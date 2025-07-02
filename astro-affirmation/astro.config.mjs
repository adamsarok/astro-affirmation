// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [ sanity({
    projectId: 'xz16h32m',
    dataset: 'production',
    useCdn: false,
    apiVersion: "2025-06-15",
    studioBasePath: '/studio',
    stega: {
      studioUrl: "/studio",
    },
  }), react()]
});