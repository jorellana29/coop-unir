<template>
  <div>
    <p class="text-h4 mb-4">Cartera</p>
<<<<<<< HEAD
=======
<!--    <v-card class="mb-7">
      <v-container class="px-6">
        <v-row align="center">
          <v-col cols="12" md="1" align="end">
            <v-avatar color="grey lighten-3" radius="10px" size="80"
              >{{ dataSales && dataSales.ISO_120_ExtendedData.charAt(0) }}</v-avatar
            >
          </v-col>
          <v-col cols="12" md="11" align="start" class="mt-7">
            <span class="ml-3 secondary&#45;&#45;text font-weight-medium text-uppercase"
              >{{ dataSales && dataSales.ISO_120_ExtendedData || '' }}</span
            >
            <p class="pt-1 ml-3 grey&#45;&#45;text font-weight-medium ">
              Último ingreso {{ getDate().date }} a las {{ getDate().hour }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>-->
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
    <v-tabs background-color="#0000" color="secondary" class="mb-0 pb-0" v-model="tab">
      <v-tab class="mb-0 pb-0">Movimientos</v-tab>
=======
<!--    <v-card class="mb-7 rounded-bl-xl mx-auto" width="55%">
      <v-container class="px-6">
        <v-row align="center" class="px-3">
         <v-col cols="6">
           <p class="text-uppercase font-weight-medium">Cuenta Personal</p>
         </v-col>
          <v-col cols="6" class="font-weight-medium" align="end">
            <p>{{ dataSales && dataSales.ISO_102_AccountID_1 }}</p>
          </v-col>
        </v-row>
        <v-divider class="primary pt-1 mb-3"></v-divider>
        <v-row align="center" class="px-3">
          <v-col cols="12" class="my-0 py-1">
            <v-row>
              <v-col>
                <p class="grey&#45;&#45;text text-uppercase font-weight-medium mb-0 pb-0">
                  Saldo disponible
                </p>
              </v-col>
              <v-col align="end">
                <p class="text-h5 secondary&#45;&#45;text font-weight-medium mb-0 pb-0">
                  {{ '33.2' | currency }}
                </p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="my-0 py-1">
            <v-row>
              <v-col>
                <p class="grey&#45;&#45;text text-uppercase font-weight-medium mb-0 pb-0">
                  Saldo contable
                </p>
              </v-col>
              <v-col align="end">
                <p class="text-subtitle-1 secondary&#45;&#45;text font-weight-medium mb-0 pb-0">
                  {{ num | currency }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>-->
    <v-tabs background-color="#0000" color="secondary" class="mb-0 pb-0" v-model="tab">
      <v-tab class="mb-0 pb-0">Movimientos</v-tab>
<!--      <v-tab>Detalle de tu producto</v-tab>
      <v-tab>Configuración</v-tab>-->
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
    </v-tabs>
    <v-tabs-items class="accent" v-model="tab">
      <v-tab-item class="mt-0">
        <v-card class="mt-5 pa-5 accent" flat>
<<<<<<< HEAD
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
=======
<!--          <v-row>
            <v-col cols="12" md="12" align="end">
              <v-btn class="primary white&#45;&#45;text" nuxt to="/transferencias" large>
                Realizar transferencia
              </v-btn>
            </v-col>
          </v-row>-->
          <div v-for="(item, i) in movements" :key="i">
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
=======
                      v-model="trip.name"
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
    loading: false,
=======
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    trip: {
      name: '',
      location: null,
      start: null,
      end: null,
    },
    hola: undefined
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
        this.loading = true
        const sales = await createAxiosPetition('311000', '401010758310');
=======
        /*         const sales = await createAxiosPetition('311000', '401010758310');
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
        const convert = this.convertSales(this.dataSales.ISO_054_AditionalAmounts);
        this.countable = convert.countable;
        this.available = convert.available;
=======
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
        this.dataMovements = movements;
        console.log("peticion de movimientos res", movements)
        this.movements = {};
        for (const x of this.dataMovements.ISO_120_ExtendedData && this.dataMovements.ISO_120_ExtendedData.split('|')) {
=======
        this.dataMovements = movements; */
        this.dataMovements = {
          ISO_000_Message_Type: '1210',
          ISO_002_PAN: '',
          ISO_003_ProcessingCode: '941000',
          ISO_004_AmountTransaction: '0.0',
          ISO_006_BillAmount: '0.0',
          ISO_007_TransDatetime: '2022-06-05T16:35:11-04:00',
          ISO_008_BillFeeAmount: '0.0',
          ISO_011_SysAuditNumber: '3036790766',
          ISO_012_LocalDatetime: '2022-06-05T16:35:11-04:00',
          ISO_013_LocalDate: '2022-06-05T16:35:11.620-04:00',
          ISO_015_SettlementDatel: '2022-06-05T00:00:00-04:00',
          ISO_018_MerchantType: '0004',
          ISO_019_AcqCountryCode: '',
          ISO_022_PosEntryMode: '',
          ISO_023_CardSeq: '',
          ISO_024_NetworkId: '555551',
          ISO_028_TranFeeAmount: '0.0',
          ISO_029_SettlementFee: '0.0',
          ISO_030_ProcFee: '0.0',
          ISO_032_ACQInsID: '',
          ISO_033_FWDInsID: '',
          ISO_034_PANExt: '',
          ISO_035_Track2: '',
          ISO_036_Track3: '',
          ISO_037_RetrievalReferenceNumber: '',
          ISO_038_AutorizationNumber: '6A46B2',
          ISO_039_ResponseCode: '000',
          ISO_039p_ResponseDetail: 'TRANSACCION EXITOSA',
          ISO_041_CardAcceptorID: 'WEBB',
          ISO_042_Card_Acc_ID_Code: '',
          ISO_043_CardAcceptorLoc: '',
          ISO_044_AddRespData: '',
          ISO_049_TranCurrCode: '0.0',
          ISO_051_CardCurrCode: '0.0',
          ISO_052_PinBlock: '',
          ISO_054_AditionalAmounts: '',
          ISO_055_EMV: '',
          ISO_090_OriginalData: '',
          ISO_102_AccountID_1: '401010758310',
          ISO_103_AccountID_2: '',
          ISO_104_TranDescription: '',
          ISO_114_ExtendedData: '',
          ISO_115_ExtendedData: '',
          ISO_120_ExtendedData: '02-06-22 16:06:00^40.85^944.22^8282567892^D^TRANSFERENCIA HACIA CUENTA: 401010770432|02-06-22 05:02:03^50.5^985.07^6070813022^C^TRANSFERENCIA DESDE CUENTA: 401010010415|02-06-22 05:01:21^50.5^934.57^6070813021^C^TRANSFERENCIA DESDE CUENTA: 401010010415|02-06-22 04:02:02^50.5^884.07^6070813005^C^TRANSFERENCIA DESDE CUENTA: 401010010415|02-06-22 03:56:02^50.5^833.57^6070813001^C^TRANSFERENCIA DESDE CUENTA: 401010010415|02-06-22 03:44:07^5.5^783.07^6070812997^C^TRANSFERENCIA DESDE CUENTA: 401010010415|02-06-22 03:40:57^5.5^777.57^6070812996^C^TRANSFERENCIA DESDE CUENTA: 401010010415|02-06-22 02:05:46^1.24^772.07^6070812986^C^TRANSFERENCIA DESDE CUENTA: 401010010415|01-06-22 20:09:26^40.85^770.83^8282567892^D^TRANSFERENCIA HACIA CUENTA: 401010770432|01-06-22 19:53:03^0.89^811.68^8282567892^D^TRANSFERENCIA HACIA CUENTA: 401010770432',
          ISO_121_ExtendedData: '',
          ISO_122_ExtendedData: '',
          ISO_123_ExtendedData: '',
          ISO_124_ExtendedData: '',
          ISO_BitMap: 'camt.998.888.A'
        };
        this.dataSales = {
          ISO_000_Message_Type: '1210',
          ISO_002_PAN: '',
          ISO_003_ProcessingCode: '311000',
          ISO_004_AmountTransaction: '0.0',
          ISO_006_BillAmount: '0.0',
          ISO_007_TransDatetime: '2022-05-29T13:15:32-04:00',
          ISO_008_BillFeeAmount: '0.0',
          ISO_011_SysAuditNumber: '9079812972',
          ISO_012_LocalDatetime: '2022-05-29T13:15:32-04:00',
          ISO_013_LocalDate: '2022-05-29T13:15:32.265-04:00',
          ISO_015_SettlementDatel: '2022-05-29T00:00:00-04:00',
          ISO_018_MerchantType: '0004',
          ISO_019_AcqCountryCode: '',
          ISO_022_PosEntryMode: '',
          ISO_023_CardSeq: '',
          ISO_024_NetworkId: '555551',
          ISO_028_TranFeeAmount: '0.0',
          ISO_029_SettlementFee: '0.0',
          ISO_030_ProcFee: '0.0',
          ISO_032_ACQInsID: '',
          ISO_033_FWDInsID: '',
          ISO_034_PANExt: '',
          ISO_035_Track2: '',
          ISO_036_Track3: '',
          ISO_037_RetrievalReferenceNumber: '',
          ISO_038_AutorizationNumber: 'CB6E16',
          ISO_039_ResponseCode: '000',
          ISO_039p_ResponseDetail: 'TRANSACCION EXITOSA',
          ISO_041_CardAcceptorID: 'WEBB',
          ISO_042_Card_Acc_ID_Code: '',
          ISO_043_CardAcceptorLoc: '',
          ISO_044_AddRespData: '',
          ISO_049_TranCurrCode: '0.0',
          ISO_051_CardCurrCode: '0.0',
          ISO_052_PinBlock: '',
          ISO_054_AditionalAmounts: '1001840C0000001000001002840C000000100000',
          ISO_055_EMV: '',
          ISO_090_OriginalData: '',
          ISO_102_AccountID_1: '401010758310',
          ISO_103_AccountID_2: '',
          ISO_104_TranDescription: '',
          ISO_114_ExtendedData: '',
          ISO_115_ExtendedData: '',
          ISO_120_ExtendedData: 'JARAMILLO BORIS NELSON JAVIER',
          ISO_121_ExtendedData: '',
          ISO_122_ExtendedData: '',
          ISO_123_ExtendedData: '',
          ISO_124_ExtendedData: '',
          ISO_BitMap: 'camt.998.888.A'
        };
        const convert = this.convertSales(this.dataSales.ISO_054_AditionalAmounts);
        this.countable = convert.countable;
        this.available = convert.available;
        const preMovements = [];
        this.movements = {};
        for (const x of this.dataMovements.ISO_120_ExtendedData.split('|')) {
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
          const date = moment(new Date(objMov.date)).format('DD-MM-YYYY');
          console.log('fecha se demora', date)
=======
          const date = new Date(objMov.date).toLocaleDateString();
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
          if (!this.movements.hasOwnProperty(date)) {
            this.movements[date] = {
              transactions: []
            };
          }
<<<<<<< HEAD
          this.movements[date].transactions.push(objMov);
=======
          // preMovements.push(objMov);
          this.movements[date].transactions.push(objMov);
          // this.movements.push(objMov);
          // this.movements
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
      } finally {
        this.loading = false
=======
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
      }
    },
    convertSales (value) {
      const matrix = [];
<<<<<<< HEAD
=======
      console.log('Arreglo original: ', value);
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
      const LONGITUD_PEDAZOS = 20;
      for (let i = 0; i < value.length; i += LONGITUD_PEDAZOS) {
        const slice = value.slice(i, i + LONGITUD_PEDAZOS);
        matrix.push(slice);
      }
<<<<<<< HEAD
=======
      console.log('Arreglo de arreglos: ', matrix);
      const countable = '';
      const available = '';
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
      }
      const second = matrix[0];
      const type = second.substring(2, 4);
      const sale = `${Number(second.substring(8, 18))}.${second.substring(18, 20)}`;
      return {
        [type === '01' ? 'countable' : 'available']: sale || 0
      };
=======
      } else {
        const second = matrix[0];
        const type = second.substring(2, 4);
        const sale = `${Number(second.substring(8, 18))}.${second.substring(18, 20)}`;
        return {
          [type === '01' ? 'countable' : 'available']: sale || 0
        };
      }
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD

=======
/*@font-face {*/
/*  font-family: "Bp";*/
/*  src: local("Bp"),*/
/*  url(~/assets/fonts/Prelo-Slab-W04-Book.ttf) format("truetype");*/
/*}*/
/*html{*/
/*  font-family: Bp;*/
/*}*/
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
</style>
