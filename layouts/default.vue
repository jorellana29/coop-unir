<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      :dark="false"
      fixed
      app
    >
    <v-list class="mt-3">
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          nuxt
          :to="item.to"
          exact
          active-class="primary white--text"
          class="py-2"
        >
          <v-list-item-content>
            <v-list-item-title class="title ml-5" v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      height="70%"
      color="white"
      app
    >
      <v-img
       :src="require('@/assets/imgs/logo.png')"
       max-width="6%"
       class="ml-5"
       ></v-img>

      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-avatar
  color="grey lighten-3"
  radius="10px"
  size="40"
>{{ dataSales.ISO_120_ExtendedData && dataSales.ISO_120_ExtendedData.charAt(0) }}</v-avatar>
<span class="ml-3 secondary--text">{{ dataSales.ISO_120_ExtendedData }}</span>
<v-divider vertical inset class="mx-4 py-6 secondary--text"></v-divider>
<span class="secondary--text mr-4">Salir</span>
    </v-app-bar>
    <v-main class="accent">
      <v-responsive class="mx-auto mt-15 secondary--text" max-width="1100">
        <v-container>
          <Nuxt />
        </v-container>
      </v-responsive>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import xml2js from 'xml2js';
import { createAxiosPetition } from '@/assets/utils';
export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: true,
      fixed: false,
      dataSales: {},
      selectedItem: 0,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Resumen',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'Transferencias',
          to: '/transferencias'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contactos',
          to: '/contactos'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Mi cuenta',
          to: '/micuenta'
        }
      ],
      miniVariant: false,
      title: 'Vuetify.js'
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    async init () {
      try {
        const sales = await createAxiosPetition('311000', '401010758310');
        if (sales.ISO_039_ResponseCode !== '000') {
          this.$vs.notification({
            color: 'danger',
            position: 'top-center',
            title: 'Error',
            text: sales.ISO_039p_ResponseDetail
          });
          return;
        }
        this.dataSales = sales;
        this.$store.commit('coop/setSales', this.dataSales);
      } catch (err) {
        let soapMsg = '';
        if (err.response) {
          const parser = new xml2js.Parser({
            explicitArray: false,
          });
          soapMsg = await parser.parseStringPromise(err.response.data);
          soapMsg = soapMsg['soap:Envelope']['soap:Body'][
            'soap:Fault'
          ].faultstring;
        }
        let message = err.response ? err.response.data.message : err.message;
        message = soapMsg || message;
        this.$vs.notification({
          color: 'danger',
          title: soapMsg ? 'API::ERROR' : 'ERROR',
          position: 'top-center',
          text: message
        });
      }
    }
  }
};
</script>
<style >

</style>
