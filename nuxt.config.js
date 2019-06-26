export default {
  build: {
    extractCSS: true
  },
  head: {
    title: 'Nuxt Tailwind CSS + Purgecss',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A static site powered by Nuxt.js'
      }
    ]
  },
  devModules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: '~/tailwind.js',
    cssPath: '~/assets/css/tailwind.css'
  },
  srcDir: 'src'
}
