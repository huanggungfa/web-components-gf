import { defineClientAppEnhance } from '@vuepress/client';

export default defineClientAppEnhance(({ app, router, siteData }) => {
    console.log('111111', app)
})