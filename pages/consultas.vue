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
      <v-tab>Movimientos</v-tab>
      <v-tab>Detalle de tu producto</v-tab>
      <v-tab>Configuración</v-tab>
    </v-tabs>
    <v-tabs-items class="accent" v-model="tab">
      <v-tab-item class="mt-5">
        <v-card class="mt-5 pa-5">
          <v-row>
            <v-col cols="12" md="2">
              <v-select :items="items" label="Exportar" outlined></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-select :items="items" label="Exportar" outlined></v-select>
            </v-col>
            <v-col cols="12" md="8" align="end">
              <v-btn class="primary secondary--text" large>
                Ver estado de cuenta
              </v-btn>
            </v-col>
          </v-row>
          <div class="accent mx-n5 grey--text pa-3">Abril 25</div>
          <div class="mx-n5">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <template v-slot:default="{ open }">
                    <v-row no-gutters>
                      <v-col cols="9" align="start">
												<p>TRANSFERENCIA DIRECTA A TOALA ORELLANA DANNY ALEXANDER</p>
												<p class="secondary--text font-weight-medium">Saldo</p>
												</v-col>
                      <v-col cols="3" class="text--secondary" align="end">
												<p>-8,68</p>
												<p>$0,00</p>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-text-field
                    v-model="trip.name"
                    placeholder="Caribbean Cruise"
                  ></v-text-field>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-card>
      </v-tab-item>
      <v-tab-item class="mt-5 pa-5"> </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  data: () => ({
    tab: null,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
		trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },
  }),
};
</script>
