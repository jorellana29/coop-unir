<template>
  <div>
    <p class="text-h4 mb-10">Mi cuenta</p>
    <v-card class="mb-7">
      <v-container class="px-6">
        <v-row align="center">
          <v-col cols="12" md="1" align="end">
            <v-avatar color="grey lighten-3" radius="10px" size="80"
<<<<<<< HEAD
              >{{ $store.state.coop.sales.ISO_120_ExtendedData && $store.state.coop.sales.ISO_120_ExtendedData.charAt(0) }}</v-avatar
=======
              >DT</v-avatar
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
            >
          </v-col>
          <v-col cols="12" md="11" align="start" class="mt-7">
            <span class="ml-3 secondary--text font-weight-medium"
              >{{ $store.state.coop.sales.ISO_120_ExtendedData }}</span
            >
            <p class="pt-1 ml-3 grey--text font-weight-medium">
              Último ingreso 01/05/2022 a las 15:44
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-tabs background-color="#0000" color="secondary" v-model="tab">
      <v-tab>Detalle</v-tab>
    </v-tabs>
    <v-tabs-items class="accent" v-model="tab">
      <v-tab-item class="mt-5">
        <v-card class="mt-5 pa-5">
          <p class="text--secondary text-h5">Datos personales</p>
          <p class="secondary--text font-weight-medium">Fecha de nacimiento</p>
          <p class="text--secondary">17/09/1975</p>
        </v-card>
        <v-card class="mt-5 pa-5">
          <p class="text--secondary text-h5">Datos contacto</p>
          <p class="secondary--text font-weight-medium">Correo electrónico</p>
          <p class="text--secondary">jarabor@gmail.com</p>
          <v-divider class="my-5"></v-divider>
          <p class="secondary--text font-weight-medium mt-2">
            Número de celular
          </p>
          <p class="text--secondary">0987580692</p>
          <v-divider class="my-5"></v-divider>
          <p class="secondary--text font-weight-medium mt-2">Dirección</p>
          <p class="text--secondary">Av ajavi y paquisha</p>
        </v-card>
      </v-tab-item>
      <v-tab-item class="mt-5 pa-5">
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
<<<<<<< HEAD
=======
import { createAxiosPetition } from '@/assets/utils';
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
export default {
  data: () => ({
    tab: null,
  }),
  methods: {
<<<<<<< HEAD
=======
    async init () {
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
    }
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
  },
  head () {
    return {
      title: 'Mi cuenta'
    };
  }
};
</script>
