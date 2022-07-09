const BACKEND = process.env.BACKEND || 'http://a036ffb35fa1b433785a33458ca17f5f-1005277024.us-east-1.elb.amazonaws.com:8583/BelejanorSwitch/services';
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Cooperativa UNIR',
    title: 'Cooperativa UNIR',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://ecuador.unir.net/wp-content/uploads/sites/8/2021/01/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vuesax' },
    { src: '@/plugins/filters' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  axios: { proxy: true },
  proxy: {
    '/api/': {
      target: BACKEND,
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#1464ac',
          secPrimary: '#fd0',
          secondary: '#0f265c',
          accent: '#f5f6f7',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
