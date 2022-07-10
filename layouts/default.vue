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
<<<<<<< HEAD
=======
          <!-- <v-list-item-icon class="secondary--text">
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon> -->
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
=======
<!--        <v-tabs align-with-title style="padding-left: 25%">-->
<!--          <v-tab>Productos</v-tab>-->
<!--          <v-tab>Movimientos</v-tab>-->
<!--          <v-tab>Transferencias</v-tab>-->
<!--        </v-tabs>-->
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
      <v-spacer />
      <v-avatar
  color="grey lighten-3"
  radius="10px"
  size="40"
<<<<<<< HEAD
>{{ dataSales.ISO_120_ExtendedData && dataSales.ISO_120_ExtendedData.charAt(0) }}</v-avatar>
=======
>DT</v-avatar>
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
import xml2js from 'xml2js';
import { createAxiosPetition } from '@/assets/utils';
=======
import xml2js from "xml2js";

>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
          title: 'Cartera',
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
<<<<<<< HEAD
  mounted () {
    this.init();
=======
  created () {
    this.init()
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
  },
  methods: {
    async init () {
      try {
<<<<<<< HEAD
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
=======
        /*  const sales = await createAxiosPetition('311000', '401010758310');
         if (sales.ISO_039_ResponseCode !== '000') {
           this.$vs.notification({
             color: 'danger',
             position: 'top-center',
             title: 'Error',
             text: sales.ISO_039p_ResponseDetail
           });
           return;
         } */
	console.log('hola')
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
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
          ].faultstring;
=======
            ].faultstring;
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1
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
<<<<<<< HEAD
=======
/* .v-navigation-drawer {
  width: calc(100% - 30px);
  margin-left: 15px;
} */
>>>>>>> 4a6fa7b753875da5a9466dbc1b5d36372c96f0d1

</style>
