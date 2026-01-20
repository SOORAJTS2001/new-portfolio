import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts';
import remarkUnwrapImages from 'rehype-unwrap-images';
import rehypeExternalLinks from 'rehype-external-links';
import expressiveCode from 'astro-expressive-code';
import { expressiveCodeOptions } from './src/site.config';
import icon from 'astro-icon';
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://soorajts.vercel.app/',
  integrations: [expressiveCode(expressiveCodeOptions), tailwind({
    applyBaseStyles: false
  }),sitemap(), icon(),mdx()],
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank',
      rel: ['nofollow, noopener, noreferrer']
    }]],
    remarkRehype: {
      footnoteLabelProperties: {
        className: ['']
      }
    }
  },
  prefetch: true,
  output: 'server',
  adapter: vercel({webAnalytics: {
    enabled: true, // set to false when using @vercel/analytics@1.4.0
  }})
});
