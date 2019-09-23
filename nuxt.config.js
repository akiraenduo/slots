import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-fire',
      {
        // Required:
        config: {
          development: {
            apiKey: 'AIzaSyBYmZ34OW4qhqGeeOOiuBY645Mbm05fu_g',
            authDomain: 'slots-codilar.firebaseapp.com',
            databaseURL: 'https://slots-codilar.firebaseio.com',
            projectId: 'slots-codilar',
            storageBucket: 'slots-codilar.appspot.com',
            messagingSenderId: '134357875358',
            appId: '1:134357875358:web:7b52c770211112c3f3598f'
          },
          production: {
            apiKey: 'AIzaSyBYmZ34OW4qhqGeeOOiuBY645Mbm05fu_g',
            authDomain: 'slots-codilar.firebaseapp.com',
            databaseURL: 'https://slots-codilar.firebaseio.com',
            projectId: 'slots-codilar',
            storageBucket: 'slots-codilar.appspot.com',
            messagingSenderId: '134357875358',
            appId: '1:134357875358:web:7b52c770211112c3f3598f'
          }
        },
        // The following options are optional:
        useOnly: ['auth', 'firestore'],
        customEnv: false,
        functionsLocation: 'us-central'
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
