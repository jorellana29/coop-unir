<template xmlns:center="http://www.w3.org/1999/html" xmlns:v-row="http://www.w3.org/1999/html"
          xmlns:div="http://www.w3.org/1999/html">
<div>
  <p class="text-h4 mb-10">Transferencias directas</p>
  <v-stepper value="1" flat class="accent" color="accent">
    <v-stepper-header v-model="step">
      <v-stepper-step step="1" :complete="step > 1">
        Ingresar datos
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2"  :complete="step > 2">
        Confirmación de transferencia
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" :complete="step === 3">
        Resumen de transferencia
      </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
  <v-window v-model="step" class="pa-2" touchless>
    <v-window-item :value="1">
      <v-card
        elevation="10"
        class="mb-7"
      >
        <v-container class="px-6">
          <v-row align="center" >
            <v-col>
              <h4>CUENTA DE AHORRO</h4>
              <p class="mb-0 mt-2">{{ dataSales.ISO_102_AccountID_1 }}</p>
            </v-col>
            <v-col align="end">
              <h3 class="mr-8 secondary--text">{{ available | currency }}</h3>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card>
        <v-container class="px-6">
          <v-form lazy-validation v-model="valid" ref="form">
          <v-row align="center" >
            <v-col class="mb-0 pb-0">
              <p class="secondary--text font-weight-medium">Monto de la transferencia</p>
              <InputNumber
                v-model="form.mont"
                prefix="$"
                label="Valor"
                type="number"
                required
                :rules="[v => (v && Number(form.mont) < Number(available)) || 'Fondos insuficientes']"
              />
              <p class="secondary--text font-weight-medium">Seleccione una cuenta de sus favoritos u otro cliente</p>
              <v-tabs>
                <v-tab>
                  <v-icon left>
                    mdi-account-group
                  </v-icon>
                  Favoritos
                </v-tab>
                <v-tab>
                  <v-icon left>
                    mdi-newspaper-plus
                  </v-icon>
                  Nueva cuenta
                </v-tab>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p class="secondary--text font-weight-medium">Seleccione a quien desea realizar la transferencia</p>
                      <v-autocomplete
                        v-model="friend"
                        :disabled="isUpdating"
                        :items="friends"
                        outlined
                        chips
                        return-object
                        color="blue-grey lighten-2"
                        label="Selecciona la cuenta"
                        item-text="name"
                        item-value="name"
                      >
                        <template v-slot:selection="data">
                          <v-chip
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            close
                            @click="data.select"
                            @click:close="friend = {
                              name: '',
                              id: '',
                              account: '',
                              mont: 0,
                              description: ''
                            }"
                          >
                            <v-avatar left>
                              <v-img :src="`https://cdn.vuetifyjs.com/images/lists/${data.item.avatar}.jpg`"></v-img>
                            </v-avatar>
                            {{ data.item.name }}
                          </v-chip>
                        </template>
                        <template v-slot:item="data">
                          <template v-if="typeof data.item !== 'object'">
                            <v-list-item-content v-text="data.item"></v-list-item-content>
                          </template>
                          <template v-else>
                            <v-list-item-avatar>
                              <img :src="`https://cdn.vuetifyjs.com/images/lists/${data.item.avatar}.jpg`">
                            </v-list-item-avatar>
                            <v-list-item-content>
                              <v-list-item-title v-html="data.item.name"></v-list-item-title>
                              <!--                      <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>-->
                            </v-list-item-content>
                          </template>
                        </template>
                      </v-autocomplete>
                      <div v-show="friend && friend.name">
                        <p class="secondary--text font-weight-medium">Nombres</p>
                        <v-text-field
                          :value="friend.name"
                          readonly
                          outlined
                          label="Nombre del beneficiario"
                        ></v-text-field>
                        <p class="secondary--text font-weight-medium">Número cuenta</p>
                        <v-text-field
                          :value="friend.account"
                          readonly
                          outlined
                          label="Cuenta"
                        ></v-text-field>
                        <p class="secondary--text font-weight-medium">Identificación</p>
                        <v-text-field
                          :value="friend.id"
                          readonly
                          outlined
                          label="Identificación"
                        ></v-text-field>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                        <p class="secondary--text font-weight-medium">Beneficiario</p>
                        <v-text-field
                          v-model="form.name"
                          outlined
                          @input="form.name = $event.toUpperCase()"
                          :rules="rules.required"
                          label="Nombre del beneficiario"
                        ></v-text-field>
                        <p class="secondary--text font-weight-medium">Número cuenta</p>
                        <v-text-field
                          v-model="form.account"
                          outlined
                          type="number"
                          label="Cuenta"
                          :rules="rules.account"
                        ></v-text-field>
                        <p class="secondary--text font-weight-medium">Identificación</p>
                        <v-text-field
                          v-model="form.id"
                          :rules="rules.required"
                          outlined
                          class="mb-0"
                          label="Identificación"
                        ></v-text-field>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-col>
           <v-col cols="12" md="12" class="px-7 mt-n4 pt-n4">
             <p class="secondary--text font-weight-medium">Descripción</p>
             <v-textarea
               v-model="form.description"
               label="Descripción de la transferencia"
               auto-grow
               outlined
               rows="3"
               row-height="25"
             ></v-textarea>
           </v-col>
            <v-col cols="12" md="12" align="end">
              <v-btn color="primary" :disabled="!form || !form.name || !form.id || !form.account || !form.mont" @click="continueTransfer">
                Aceptar
              </v-btn>
            </v-col>
          </v-row>
          </v-form>
        </v-container>
      </v-card>
    </v-window-item>
    <v-window-item :value="2">
      <v-card class="pa-8">

        <v-col cols="12" md="12" align="center">
          <v-img :src="require('@/assets/imgs/logo.png')" max-width="15%"></v-img>
          <p class="font-weight-light text-h4 mt-3 text-uppercase">Resumen de transferencia</p>
        </v-col>
        <center class="px-7">
          <div style="width: 50%">
            <v-row>
              <v-col cols="12" md="12">
                <v-row justify="center">
                  <v-col cols="6">
                    <v-row>
                      <v-col cols="12"  align="start">
                        De:
                      </v-col>
                      <v-col cols="12" align="start">
                        <v-icon>
                          mdi-bank-transfer-out
                        </v-icon>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-row>
                      <v-col cols="12" class="mb-0 pb-0" align="start">
                        <p class="font-weight-bold">Mi cuenta personal</p>
                      </v-col>
                      <v-col cols="12" class="mt-0 pt-0" align="start">
                        {{ dataSales.ISO_102_AccountID_1 }}
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </center>
        <center>
          <v-divider  style="width: 50%"></v-divider>
        </center>
        <center class="px-7">
          <div style="width: 50%" class="mt-5">
            <v-row>
              <v-col cols="12" md="12">
                <v-row justify="center">
                  <v-col cols="6">
                    <v-row>
                      <v-col cols="12"  align="start">
                        Para:
                      </v-col>
                      <v-col cols="12" align="start">
                        <v-icon>
                          mdi-bank-transfer-in
                        </v-icon>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="6">
                    <v-row>
                      <v-col cols="12" class="mb-0 pb-0" align="start">
                        <p class="font-weight-bold">{{ form.name }}</p>
                      </v-col>
                      <v-col cols="12" class="mt-0 pt-0" align="start">
                        {{ form.account }}
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <div class="blue lighten-5 mt-3 pa-5 font-weight-light">
              <v-row class="">
                <v-col cols="6" align="start">
                  <p>Monto de transferencia</p>
                </v-col>
                <v-col cols="6">
                  <p>{{ Number(form.mont) | currency }}</p>
                </v-col>
                <v-col cols="6" align="start">
                  <p>Comisión</p>
                </v-col>
                <v-col cols="6">
                  {{ 0 | currency }}
                </v-col>
              </v-row>
              <div>
                <v-divider class=""></v-divider>
              </div>
              <v-row class="mt-2">
                <v-col cols="6" align="start">
                  <p class="font-weight-bold">Total a transferir</p>
                </v-col>
                <v-col cols="6">
                  <p class="font-weight-bold">{{ form.mont | currency }}</p>
                </v-col>
              </v-row>
              <v-btn block rounded class="mb-3" outlined @click="step--">Cambiar información</v-btn>
              <v-btn block rounded color="primary" :disabled="loading" :loading="loading" @click="transfer()">Transferir ahora</v-btn>
            </div>
          </div>
        </center>
      </v-card>
    </v-window-item>
    <v-window-item :value="3">
      <v-card class="my-9 py-9">
        <v-row justify="center">
          <v-col cols="12" align="center">
            <v-img :src="require('@/assets/imgs/check.png')" max-width="10%"></v-img>
          </v-col>
          <v-col cols="12" align="center">
            <p class="mb-2 font-weight-light text-h4 secondary--text">Transacción exitosa</p>
            <p>Realizado con éxito</p>
          </v-col>
          <v-col cols="12" align="center">
            <div class="blue lighten-5 mt-3 pa-5 font-weight-light" style="width: 50%">
                <v-row class="px-1">
                  <v-col cols="6" align="start" class="mb-0 pb-0">
                    <p class="font-weight-medium">Valor:</p>
                  </v-col>
                  <v-col cols="6" align="end" class="mb-0 pb-0">
                    <p>{{ form.mont | currency }}</p>
                  </v-col>
                </v-row>
              <v-divider class="mt-4 mb-4"></v-divider>
              <v-row class="">
                <v-col cols="6" align="start" class="mb-0 pb-0">
                  <p class="font-weight-medium">Desde:</p>
                </v-col>
                <v-col cols="6" align="end" class="mb-0 pb-0">
                  <p>Nro. {{ dataSales.ISO_102_AccountID_1 }}</p>
                </v-col>
                <v-col cols="6" align="start" class="mb-0 pb-0">
                  <p class="font-weight-medium">Para:</p>
                </v-col>
                <v-col cols="6" align="end" class="mb-0 pb-0">
                  {{ form.name }}
                </v-col>
                <v-col cols="6" align="start" class="mt-0 pt-0">
                  <p class="">Número de cuenta</p>
                </v-col>
                <v-col cols="6" align="end" class="mt-0 pt-0">
                  <p>Nro. {{ form.account }}</p>
                </v-col>
              </v-row>
              <div>
                <v-divider class=""></v-divider>
              </div>
              <v-row class="mt-2">
                <v-col cols="6" align="start">
                  <p class="font-weight-bold">Fecha</p>
                </v-col>
                <v-col cols="6" align="end">
                  <p>12/06/2022</p>
                </v-col>
                <v-col v-if="form.description && form.description !== 'Transferencia normal'" cols="6" align="start">
                  <p class="font-weight-bold">Motivo</p>
                </v-col>
                <v-col v-if="form.description && form.description !== 'Transferencia normal'" cols="6" align="end">
                  <p>{{form.description}}</p>
                </v-col>
              </v-row>
            </div>
            <v-divider class="mt-6 mx-9"></v-divider>
            <v-btn style="width: 50%"  rounded outlined class="mt-6" to="/">Ir a resumen</v-btn>
            <v-btn style="width: 50%"  rounded color="primary" class="mt-2" @click="()=> {
              step = 1
              form = {name: '', id: '', mont: 0, account: ''}
              friend = {name: '', id: '', mont: 0, account: ''}
              $refs.form.resetValidation()
              init()
            }">Nueva transferencia</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-window-item>
  </v-window>
  <vs-dialog width="550px" not-center v-model="active">
    <template #header>
      <h4 class="not-margin">
        Fondos insuficientes
      </h4>
    </template>
    <div class="con-content">
      <p>
        Elija otro monto
      </p>
    </div>

    <template #footer>
      <div class="con-footer">
        <vs-button @click="active=false" transparent>
          Aceptar
        </vs-button>
      </div>
    </template>
  </vs-dialog>
</div>
  </template>
<script>
import xml2js from 'xml2js';
import InputNumber from '~/components/InputNumber';
import { createAxiosPetition } from '@/assets/utils';

export default {
  layout: 'default',
  components: {
    InputNumber
  },
  data: () => ({
    step: 1,
    valid: true,
    friend: {
      name: '',
      id: '',
      account: ''
    },
    rules: {
      required: [v => !!v || 'El campo es requerido'],
      account: [v => !!v || 'El campo es requerido', v => (v && v.length > 11) || 'La cuenta tiene menos de 12 dígitos']
    },
    dataSales: {},
    active: false,
    friends: [],
    isUpdating: false,
    loading: false,
    form: {
      mont: 0,
      name: '',
      id: '',
      account: '',
      description: ''
    },
    available: ''
  }),
  mounted () {
    this.init();
    this.friends = this.$store.state.coop.contacts;
  },
  watch: {
    'friend.name': function (value) {
      this.form.name = value;
    },
    'friend.account': function (value) {
      this.form.account = value;
    },
    'friend.id': function (value) {
      this.form.id = value;
    },
  },
  methods: {
    continueTransfer () {
      if (this.$refs.form.validate()) {
        this.step += 1;
      } else {
        this.$vs.notification({
          color: 'danger',
          title: 'ERROR',
          position: 'top-center',
          text: 'Existen campos con los datos incorrectos'
        });
      }
    },
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
          return
        }
        this.dataSales = sales;
        const convert = this.convertSales(this.dataSales.ISO_054_AditionalAmounts);
        this.available = convert.available;
      } catch (err) {
        let soapMsg = ''
        if (err.response) {
          const parser = new xml2js.Parser({
            explicitArray: false,
          })
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
    },
    async transfer () {
      try {
        this.loading = true;
        if (!this.form.description) {
          this.form.description = 'Transferencia normal'
        }
        const transfer = await createAxiosPetition('401010', '401010758310', this.form);
        if (transfer.ISO_039_ResponseCode !== '000') {
          this.$vs.notification({
            color: 'danger',
            position: 'top-center',
            title: 'Error',
            text: transfer.ISO_039p_ResponseDetail
          });
          return;
        }
        this.step = 3;
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
      } finally {
        this.loading = false;
      }
    },
    convertSales (value) {
      const matrix = [];
      const LONGITUD_PEDAZOS = 20;
      for (let i = 0; i < value.length; i += LONGITUD_PEDAZOS) {
        const slice = value.slice(i, i + LONGITUD_PEDAZOS);
        matrix.push(slice);
      }
      if (matrix.length > 1) {
        const first = matrix[0];
        const type1 = first.substring(2, 4);
        const sale1 = `${Number(first.substring(8, 18))}.${first.substring(18, 20)}`;
        const second = matrix[1];
        const type2 = second.substring(2, 4);
        const sale2 = `${Number(second.substring(8, 18))}.${second.substring(18, 20)}`;
        return {
          [type1 === '01' ? 'countable' : 'available']: parseFloat(sale1) || 0,
          [type2 === '02' ? 'available' : 'countable']: parseFloat(sale2) || 0
        };
      }
      const second = matrix[0];
      const type = second.substring(2, 4);
      const sale = `${Number(second.substring(8, 18))}.${second.substring(18, 20)}`;
      return {
        [type === '01' ? 'countable' : 'available']: parseFloat(sale) || 0
      };
    }
  },
  head () {
    return {
      title: 'Transferencias'
    };
  }
};
</script>
