import { defineConfig } from 'astro/config';

import { register } from "swiper/element/bundle";

register();

// https://astro.build/config
export default defineConfig({
  integrations: [
  ]
});