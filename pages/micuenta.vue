<template>
  <div>
    <p class="text-h4 mb-10">Mi cuenta</p>
    <v-card class="mb-7">
      <v-container class="px-6">
        <v-row align="center">
          <v-col cols="12" md="1" align="end">
            <v-avatar color="grey lighten-3" radius="10px" size="80"
              >DT</v-avatar
            >
          </v-col>
          <v-col cols="12" md="11" align="start" class="mt-7">
            <span class="ml-3 secondary--text font-weight-medium"
              >DANNY ALEXANDER TOALA ORELLANA</span
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
      <v-tab>Cambio de contraseña</v-tab>
    </v-tabs>
    <v-tabs-items class="accent" v-model="tab">
      <v-tab-item class="mt-5">
        <v-card class="mt-5 pa-5">
          <p class="text--secondary text-h5">Datos personales</p>
          <p class="secondary--text font-weight-medium">Fecha de nacimiento</p>
          <p class="text--secondary">17/09/2022</p>
        </v-card>
        <v-card class="mt-5 pa-5">
          <p class="text--secondary text-h5">Datos contacto</p>
          <p class="secondary--text font-weight-medium">Correo electrónico</p>
          <p class="text--secondary">dannirux@gmail.com</p>
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
export default {
  data: () => ({
    tab: null,
  }),
	head() {
    return {
      title: "Mi cuenta"
    }
  }
};
</script>
