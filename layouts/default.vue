<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      :dark="'white'"
      fixed
      app
    
    >
    <v-list class="mt-3">
      <font face="Comic Sans MS,arial,verdana">Este texto tiene otra tipografía</font>
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
          active-class="primary"
          class="py-2"
        >
          <!-- <v-list-item-icon class="secondary--text">
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon> -->
          <v-list-item-content>
            <v-list-item-title  class="title  secondary--text ml-5" v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      color="white"
      app
    >
      <v-img
       src="https://www.pichincha.com/portal/Portals/0/MainPichincha.svg?ver=_XlM6NWjdDPfjZiQD96oOg%3d%3d"
       max-width="9%"
       class="ml-5"
       ></v-img>

      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer" />
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <v-spacer />
      <v-avatar
  color="grey lighten-3"
  radius="10px"
  size="40" 
>DT</v-avatar>
<span class="ml-3 secondary--text">DANNY ALEXANDER TOALA ORELLANA</span>
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
export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: true,
      fixed: false,
      selectedItem: 0,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Transferencias',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Pagos',
          to: '/pagos'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Consultas',
          to: '/consultas'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Mi cuenta',
          to: '/micuenta'
        }
      ],
      miniVariant: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style >
/* .v-navigation-drawer {
  width: calc(100% - 30px);
  margin-left: 15px;
} */

</style>
