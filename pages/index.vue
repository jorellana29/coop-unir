<template>
  <div>
    <p class="text-h4 mb-4">Cartera</p>
    <v-card class="rounded-lg mb-6 mx-auto" width="65%">
      <v-card-title>
        <p class="primary--text">Saldos Cooperativa UNIR</p>
      </v-card-title>
      <v-row align="center" class="px-4">
        <v-col cols="6" class="mb-0 pb-0">
          <p class="text-uppercase font-weight-medium">Cuenta Personal</p>
        </v-col>
        <v-col cols="6" class="font-weight-medium text-h6 mb-0 pb-0" align="end">
          <p>{{ dataSales && dataSales.ISO_102_AccountID_1 }}</p>
        </v-col>
      </v-row>
      <v-row class="px-4">
        <v-col cols="12" class="mb-0 pb-0">
          <p class="font-weight-bold text-h4">{{ available | currency }}</p>
          <p class="font-weight-medium text-subtitle-1 mb-0 pb-0 mt-0 pt-0">Disponible</p>
        </v-col>
        <v-col cols="12" class="mt-0 pb-0">
          <p class="font-weight-bold text-h4">{{ countable | currency }}</p>
          <v-row>
            <v-col cols="6">
              <p class="font-weight-medium text-subtitle-1">Contable</p>
            </v-col>
            <v-col align="end">
              <v-btn class="text-end primary white--text mb-4" align="end" rounded nuxt to="/transferencias" large>
                Realizar transferencia
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-tabs background-color="#0000" color="secondary" class="mb-0 pb-0" v-model="tab">
      <v-tab class="mb-0 pb-0">Movimientos</v-tab>
    </v-tabs>
    <v-tabs-items class="accent" v-model="tab">
      <v-tab-item class="mt-0">
        <v-card class="mt-5 pa-5 accent" flat>
          <div v-show="loading">
            <v-skeleton-loader
              type="article, actions"
            ></v-skeleton-loader>
            <v-skeleton-loader
              type="article, actions"
            ></v-skeleton-loader>
            <v-skeleton-loader
              type="article, actions"
            ></v-skeleton-loader>
            <v-skeleton-loader
              type="article, actions"
            ></v-skeleton-loader>
            <v-skeleton-loader
              type="article, actions"
            ></v-skeleton-loader>
            <v-skeleton-loader
              type="article, actions"
            ></v-skeleton-loader>
          </div>
          <div v-show="!loading" v-for="(item, i) in movements" :key="i">
            <div class="accent mx-n5 grey--text pa-3">{{ transformDate(i) }}</div>
            <div class="mx-n5">
              <v-expansion-panels>
                <v-expansion-panel v-for="(x, index) of item.transactions" :key="index">
                  <v-expansion-panel-header>
                    <template v-slot:default="{ open }">
                      <v-row no-gutters align="center" justify="center">
                        <v-col cols="1" align="center">
                          <v-icon>mdi-bank-transfer-{{x.type === 'C' ? 'in' : 'out'}}</v-icon>
                        </v-col>
                        <v-col cols="8" align="start">
                          <p>
                            TRANSFERENCIA DIRECTA {{x.type === 'C' ? 'DE' : 'A'}} {{ x.result.split(':')[1] }}
                          </p>
                          <p class="secondary--text font-weight-medium">Saldo</p>
                        </v-col>
                        <v-col cols="3" class="text--secondary" align="end">
                          <p class="font-weight-bold" :class="x.type === 'C'? 'success--text' : ''">{{x.type === 'C' ? '+' : '-'}} {{ x.mont | currency}}</p>
                          <p>{{ x.sale | currency }}</p>
                        </v-col>
                      </v-row>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-text-field
                      placeholder="Caribbean Cruise"
                    ></v-text-field>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </v-card>
      </v-tab-item>
      <v-tab-item class="mt-5 pa-5"> </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import xml2js from 'xml2js';
import moment from 'moment';
import { createAxiosPetition } from '@/assets/utils';

export default {
  data: () => ({
    tab: null,
    dataSales: null,
    dataMovements: null,
    movements: {},
    available: '',
    countable: '',
    num: '12',
    loading: false,
  }),
  mounted () {
    this.init();
  },
  created () {
  },
  methods: {
    transformDate (date) {
      moment.locale('es-mx');
      return moment(date).format('MMMM D');
    },
    getDate () {
      return { date: moment().format('YYYY-MM-DD'), hour: moment().format('LT') };
    },
    async init () {
      try {
        this.loading = true
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
        const convert = this.convertSales(this.dataSales.ISO_054_AditionalAmounts);
        this.countable = convert.countable;
        this.available = convert.available;
        const movements = await createAxiosPetition('941000', '401010758310');
        if (movements.ISO_039_ResponseCode !== '000') {
          this.$vs.notification({
            color: 'danger',
            position: 'top-center',
            title: 'Error',
            text: movements.ISO_039p_ResponseDetail
          });
          return;
        }
        this.dataMovements = movements;
        console.log("peticion de movimientos res", movements)
        this.movements = {};
        for (const x of this.dataMovements.ISO_120_ExtendedData && this.dataMovements.ISO_120_ExtendedData.split('|')) {
          let objMov = {};
          const arrObjMov = x.split('^');
          objMov = {
            date: arrObjMov[0],
            mont: arrObjMov[1],
            sale: arrObjMov[2],
            serial: arrObjMov[3],
            type: arrObjMov[4],
            result: arrObjMov[5],
          };
          const date = moment(new Date(objMov.date)).format('DD-MM-YYYY');
          console.log('fecha se demora', date)
          if (!this.movements.hasOwnProperty(date)) {
            this.movements[date] = {
              transactions: []
            };
          }
          this.movements[date].transactions.push(objMov);
        }
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
        this.loading = false
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
          [type1 === '01' ? 'countable' : 'available']: sale1 || 0,
          [type2 === '02' ? 'available' : 'countable']: sale2 || 0
        };
      }
      const second = matrix[0];
      const type = second.substring(2, 4);
      const sale = `${Number(second.substring(8, 18))}.${second.substring(18, 20)}`;
      return {
        [type === '01' ? 'countable' : 'available']: sale || 0
      };
    }
  },
  head: {
    title () {
      return 'Cartera';
    }
  }
};
</script>
<style lang="css">
</style>
