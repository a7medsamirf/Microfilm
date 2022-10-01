import { theme } from './config/vuetify.options'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
/* ssr: false,
target: 'static', */
target: 'static',
  head: {
    htmlAttrs: {
      lang: 'ar',
    },
    title: 'Microfilm',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // PWA primary color
      { name : 'theme-color', content: '#071434'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Microfilm/favicon.ico' },
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"},

    ]
  },
  router: {
    base: '/Microfilm/'
  },

  transition: 'slide-bottom',
  loading: {
    height: '5px',
    duration: 1000,
    rtl: true,
    continuous: true,
    color: '#e62d2d',
    name: 'circle'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/vuetify-overrides.scss',
    '~/assets/vendors/slick-carousel/slick-theme.css',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/animate.css'
  ],

  styleResources: {
    scss: [
        '~/assets/_transition.scss',
        '~/assets/_mixins.scss',
        '~/assets/_functions.scss',
        '~/assets/_media-queries.scss',
        '~/assets/_url-img.scss'
    ]
},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/fontawesome.js', ssr: false},
    {src: '~/plugins/vue-carousel-3d.js', ssr: false},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify',{rtl:true}]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://resources.com/
    "@nuxtjs/style-resources"
],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './config/vuetify.options.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vus: { cacheBusting: true },
      scss: { sourceMap: false },
    },

  }
}
