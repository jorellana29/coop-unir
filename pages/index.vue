<template>
<div>
  <p class="text-h4 mb-10">Transferencias directas</p>
  <v-card
  elevation="10"
  class="mb-7"
  >
    <v-container class="px-6">
      <v-row align="center" >
        <v-col>
          <h4>AHORRO ELECTRÓNICO</h4>
          <p class="mb-0 mt-2">23456545332</p>
        </v-col>
        <v-col align="end">
          <h3 class="mr-8 secondary--text">$ 258,00</h3>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-card  
  >
    <v-container class="px-6">
      <v-row align="center" >
        <v-col>
          <p class="secondary--text font-weight-medium">Monto</p>
          <!-- <v-card style="width: 20%; heigth: 10px" class="mb-5" >
            <v-row style="heigth: 10px">
              <v-col xs="1" class="accent">
               <v-icon>
                mdi-currency-usd
               </v-icon>
              </v-col>
              <v-col xs="7">
                <v-text-field
            class="pa-0 ma-0"
            solo
            flat
            style="width: 100%; height: 10px"
            label="Prepend inner"
          >
          </v-text-field>
              </v-col>
            </v-row>
          </v-card> -->
          <vs-input  placeholder="">
        <template #icon color="primary">
          <v-icon>
               mdi-currency-usd
             </v-icon>
        </template>
      </vs-input>
          <!-- <v-text-field
            class="pl-0"
            solo
            style="width: 20%"
            label="Prepend inner"
          >
           <template v-slot:prepend>
             <div class="primary">
               <v-icon>
               mdi-currency-usd
             </v-icon>
             </div>
           </template>
          </v-text-field> -->
          <p class="secondary--text font-weight-medium">Beneficiario</p>
          <v-text-field
            outlined
            label="Nombre beneficiario"
            append-icon="mdi-map-marker"
          ></v-text-field>
          <v-text-field
            outlined
            label="Número de cuenta"
          ></v-text-field>
           <p class="secondary--text font-weight-medium">Monto</p>
           <v-textarea
          label="Descripción opcional"
          auto-grow
          outlined
          rows="3"
          row-height="25"

        ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</div>
  </template>
<script>
export default {
  layout: 'default',
  data: () => ({

  }),
	head() {
    return {
      title: "Transferencias"
    }
  }
};
</script>
